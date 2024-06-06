import { useState } from 'react';
import { CardProps } from './types';

export function Card({ imageLink }: CardProps) {
  const [imageError, setImageError] = useState(false);
  const placeholderImage = 'static/placeholder.svg';

  const handleImageError = () => {
    setImageError(true);
  };

  return (
    <button
      type="button"
      className="card"
      onClick={(event) => event.currentTarget.classList.toggle('flipped')}
    >
      <figure className="card__back">
        <img
          src="static/back.png"
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
            src={imageLink}
            alt="front image of card"
            className="card__front--img"
            onError={handleImageError}
          />
        )}
      </figure>
    </button>
  );
}
