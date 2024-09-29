import { useState } from 'react';
import { CardProps } from './types';

export function Card({ imageName, onClickCallback }: CardProps) {
  const [imageError, setImageError] = useState(false);
  const placeholderImage = 'images/placeholder.svg';

  const handleImageError = () => {
    setImageError(true);
  };

  const handleCardFlip = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const { currentTarget } = event;
    onClickCallback(imageName, currentTarget);
  };

  return (
    <button type="button" className="card" onClick={handleCardFlip}>
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
            src={`images/${imageName}.png`}
            alt="front image of card"
            className="card__front--img"
            onError={handleImageError}
          />
        )}
      </figure>
    </button>
  );
}
