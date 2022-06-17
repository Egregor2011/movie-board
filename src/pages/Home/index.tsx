import { FC } from 'react';
import Card from '../../components/Card';
import Loader from '../../components/Loader';
import SearchInput from '../../components/SearchInput';
import useGetMovies from '../../hooks/useGetMovies';
import './Home.css';
import { Movie } from './types';

const Home: FC = () => {
  const { movies, error, loading, searchQuery } = useGetMovies();

  if (error) {
    return <div>Error</div>;
  }

  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <h1>Movies</h1>
      <SearchInput searchQuery={searchQuery} />
      <div className="cards__container">
        {movies?.map((movie: Movie) => (
          <Card
            key={movie.id}
            id={movie.id}
            image={movie.poster_path}
            title={movie?.title}
            releaseDate={movie?.release_date}
            overview={movie?.overview}
          />
        ))}
      </div>
    </>
  );
};

export default Home;
