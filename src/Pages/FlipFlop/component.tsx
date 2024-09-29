import { useRef, useEffect, useMemo } from 'react';
import { Card } from '../../Components/FlipFlop/Card';
import { generateRandomArray } from './helpers';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useNavigate } from 'react-router-dom';
import { diffultyOptions } from '../../constants';

export function FlipFlop() {
  const difficulty = useSelector((state: RootState) => state.gameDifficulty.level);
  const navigate = useNavigate();

  useEffect(() => {
    if (!difficulty) {
      navigate('/gamedifficulty');
    }
  }, [difficulty]);

  if (!difficulty) return null; // Return null early if difficulty is not set

  const difficultyNumber: number = diffultyOptions[difficulty];
  const cardLength: number = difficultyNumber * difficultyNumber;
  const uniqueCardsNumber: number = cardLength / 2;

  // Memoize the random card array to avoid recalculating
  const cards = useMemo(() => generateRandomArray(cardLength), [cardLength]);

  const gridStyles = useMemo(
    () => ({
      '--grid-template': `${difficultyNumber}`,
    } as React.CSSProperties),
    [difficultyNumber]
  );

  const firstCard = useRef<HTMLButtonElement | null>(null);
  const firstCardNumber = useRef<number | null>(null);

  const secondCard = useRef<HTMLButtonElement | null>(null);
  const secondCardNumber = useRef<number | null>(null);

  const alreadyFlipped = useRef<number[]>([]);

  const onCardFlip = (imageName: number, currentTarget: HTMLButtonElement) => {
    if (alreadyFlipped.current.includes(imageName)) return;

    if (firstCard.current === null) {
      firstCard.current = currentTarget;
      firstCardNumber.current = imageName;
      currentTarget.classList.add('flipped');
    } else if (secondCard.current === null) {
      secondCard.current = currentTarget;
      secondCardNumber.current = imageName;
      currentTarget.classList.add('flipped');

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
      console.log('Congratulations');
    }
  };

  return (
    <section className="flip-flop">
      <div className="flip-flop__container">
        <div className="flip-flop__grid" style={gridStyles}>
          {cards.map((img) => (
            <Card imageName={img} onClickCallback={onCardFlip} />
          ))}
        </div>
      </div>
    </section>
  );
}
