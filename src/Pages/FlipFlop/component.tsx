import { useRef } from 'react';
import { Card } from '../../Components/FlipFlop/Card';
import { generateRandomArray } from './helpers';

export function FlipFlop() {
  const difficutyNumber: number = 4;
  const cardLength: number = difficutyNumber * difficutyNumber;
  const uniqueCardsNumber: number = cardLength / 2;

  const gridStyles = {
    '--grid-template': `${difficutyNumber}`,
  } as React.CSSProperties;

  const firstCard = useRef<HTMLButtonElement | null>(null);
  const firstCardNumber = useRef<number | null>(null);

  const secondCard = useRef<HTMLButtonElement | null>(null);
  const secondCardNumber = useRef<number | null>(null);

  const cards = useRef<number[]>(generateRandomArray(cardLength));
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

      checkCards(imageName);
    }
  };

  const checkCards = (imageName: number) => {
    if (firstCard.current && secondCard.current) {
      if (firstCardNumber.current === secondCardNumber.current) {
        alreadyFlipped.current.push(imageName);
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
        <div className="flip-flop__grid flip-flop__grid--" style={gridStyles}>
          {cards.current.map((img) => (
            <Card imageName={img} onClickCallback={onCardFlip} />
          ))}
        </div>
      </div>
    </section>
  );
}
