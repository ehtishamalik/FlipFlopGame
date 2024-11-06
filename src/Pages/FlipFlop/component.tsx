import { useRef, useEffect, useMemo, useState } from 'react';
import { Card } from '../../Components/FlipFlop/Card';
import { generateRandomArray } from './helpers';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import { difficultyOptions } from '../../constants';
import { toast } from 'react-toastify';
import { Counter } from '../../Components/FlipFlop/Counter';
import { CounterRef } from '../../Components/FlipFlop/Counter';
import { submitScoreboard } from '../../api';

export function FlipFlop() {
  const navigate = useNavigate();

  const [movesCount, setmovesCount] = useState<number>(0);

  const counterRef = useRef<CounterRef>(null);

  const firstCard = useRef<HTMLButtonElement | null>(null);
  const firstCardNumber = useRef<number | null>(null);

  const secondCard = useRef<HTMLButtonElement | null>(null);
  const secondCardNumber = useRef<number | null>(null);

  const alreadyFlipped = useRef<number[]>([]);

  const difficulty = useSelector(
    (state: RootState) => state.gameDifficulty.level
  );

  const isCounterRunning = useSelector(
    (state: RootState) => state.counter.running
  );

  const isUserLogin = useSelector((state: RootState) => state.userLogin.active);

  const seconds = useSelector((state: RootState) => state.counter.seconds);

  const difficultyNumber: number = difficulty
    ? difficultyOptions[difficulty]
    : 0;
  const cardLength: number = difficultyNumber * difficultyNumber;
  const uniqueCardsNumber: number = cardLength / 2;

  // Memoize the random card array to avoid recalculating
  const cards = useMemo(() => generateRandomArray(cardLength), [cardLength]);

  useEffect(() => {
    if (difficulty && !isUserLogin) {
      toast.info('Please login to save your score.');
    }

    if (!difficulty) {
      toast.error('Please select game difficulty.');
      navigate('/gamedifficulty');
    }
  }, [isUserLogin, difficulty, navigate]);

  useEffect(() => {
    if (isCounterRunning) {
      counterReset();
    }
  }, [difficulty]);

  const onCardFlip = (imageName: number, currentTarget: HTMLButtonElement) => {
    if (alreadyFlipped.current.includes(imageName)) return;

    if (firstCard.current === null) {
      if (!isCounterRunning) counterStart();

      firstCard.current = currentTarget;
      firstCardNumber.current = imageName;
      currentTarget.classList.add('flipped');
    } else if (secondCard.current === null) {
      secondCard.current = currentTarget;
      secondCardNumber.current = imageName;
      currentTarget.classList.add('flipped');

      setmovesCount(() => movesCount + 1);
      checkCards();
    }
  };

  const checkCards = () => {
    if (firstCard.current && secondCard.current) {
      if (firstCardNumber.current === secondCardNumber.current) {
        alreadyFlipped.current.push(firstCardNumber.current!);
        resetCardStates();
        checkGameCompletion();
      } else {
        setTimeout(() => {
          firstCard.current?.classList.remove('flipped');
          secondCard.current?.classList.remove('flipped');
          resetCardStates();
        }, 1000);
      }
    }
  };

  const resetCardStates = () => {
    firstCard.current = null;
    firstCardNumber.current = null;

    secondCard.current = null;
    secondCardNumber.current = null;
  };

  const checkGameCompletion = () => {
    if (alreadyFlipped.current.length === uniqueCardsNumber) {
      toast(
        `Congratulations, you have completed the game in ${seconds} seconds & ${movesCount} moves!`,
        {
          icon: <span>🥳</span>,
        }
      );
      counterStop();
      toast.promise(handleSubmitScoreboard, {
        pending: 'Saving Socre....',
      });
    }
  };

  const handleSubmitScoreboard = async () => {
    const token = localStorage.getItem('access_token');

    if (!difficulty) return;

    const response = await submitScoreboard(
      difficulty,
      {
        moves_count: movesCount,
        seconds: seconds,
      },
      token ?? ''
    );
    if (response.type === 'error') {
      toast.error(response.message);
      return;
    }
    toast.success(response.message);
  };

  const counterStart = () => {
    if (counterRef.current) counterRef.current.start();
  };

  const counterStop = () => {
    if (counterRef.current) counterRef.current.stop();
  };

  const counterReset = () => {
    if (counterRef.current) counterRef.current.reset();
  };

  return (
    <main>
      <Counter ref={counterRef} movesCount={movesCount} />
      <section className="flip-flop">
        <div
          className={`flip-flop__container flip-flop__container--${difficulty?.toLowerCase()}`}
        >
          <div
            className={`flip-flop__grid flip-flop__grid--${difficulty?.toLowerCase()}`}
          >
            {cards.map((img) => (
              <Card imageName={img} onClickCallback={onCardFlip} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
