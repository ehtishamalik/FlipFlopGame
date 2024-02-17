import clsx from 'clsx'
import { backImage } from '../common/images'
import { CardProps } from './types'

export const Card = ({ image, showAnimal, callback }: CardProps) => {
  return (
    <div
      className={clsx('card', {
        flipped: showAnimal,
      })}
      onClick={callback}
    >
      <figure className='front'>
        <img
          className='front-image'
          src={image}
          alt='image of an animal on the card'
        />
      </figure>
      <figure className='back'>
        <img
          className='back-image'
          src={backImage}
          alt='image of the back of the card'
        />
      </figure>
    </div>
  )
}
