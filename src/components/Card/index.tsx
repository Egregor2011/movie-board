import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Card.css';
import { CardProps } from './types';

const Card: FC<CardProps> = ({ id, title, releaseDate, image, overview }) => (
  <div className="card">
    <Link
      to={{
        pathname: `/movies/${id}`,
      }}
      state={{
        id,
        title,
        image,
        overview,
      }}
    >
      <img src={process.env.IMAGES_PATH + image} alt="" />
    </Link>
    <h1 className="card__title">{title}</h1>
    <h2>{releaseDate}</h2>
  </div>
);

export default Card;
