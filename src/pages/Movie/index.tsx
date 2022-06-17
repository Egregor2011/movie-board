import { FC } from 'react';
import { useLocation } from 'react-router-dom';
import './Movie.css';
import { LocationStateType } from './types';

const Movie: FC = () => {
  const location = useLocation();
  const { image, title, overview } = location?.state as LocationStateType;
  return (
    <section className="movie__section">
      <img src={process.env.IMAGES_PATH_BIG + image} alt="" />
      <h2 className="movie__title">{title}</h2>
      <p className="movie__overview">{overview}</p>
    </section>
  );
};

export default Movie;
