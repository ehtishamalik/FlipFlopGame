import { useState } from 'react';
import { CardProps } from './types';

export function Card({ image }: CardProps) {
  const [imageError, setImageError] = useState(false);
  const placeholderImage = 'images/placeholder.svg';

  const handleImageError = () => {
    setImageError(true);
  };

  const handleCardFlip = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    event.currentTarget.classList.toggle('flipped')
  };

  return (
    <button
      type="button"
      className="card"
      data-id={image}
      onClick={handleCardFlip}
    >
      <figure className="card__back">
        <img
          src="images/back.png"
          alt="back image of card"
          className="card__back--img"
        />
      </figure>
      <figure className="card__front">
        {imageError ? (
          <img
            src={placeholderImage}
            alt="Placeholder"
            className="card__front--placeholder"
          />
        ) : (
          <img
            src={`images/${image}.png`}
            alt="front image of card"
            className="card__front--img"
            onError={handleImageError}
          />
        )}
      </figure>
    </button>
  );
}
