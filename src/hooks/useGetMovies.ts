import { ChangeEvent, startTransition, useEffect, useState } from 'react';
import { Movies, SearchQuery } from './../pages/Home/types';
import { moviesUrl } from '../libs/constants';
import { getData } from '../libs/helpers';

const useGetMovies = (): {
  movies: Movies;
  searchQuery: SearchQuery;
  error: unknown;
  loading: boolean;
} => {
  const [data, setData] = useState<Movies>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<unknown>(null);
  const [query, setQuery] = useState<string>('');

  useEffect(() => {
    try {
      getData(moviesUrl).then(({ results }) => setData(results));
    } catch (err) {
      setError(err);
      console.log({ err });
    }
    setLoading(false);
  }, []);

  const filteredData = data.filter(({ title }) =>
    title.toLowerCase().includes(query.toLowerCase())
  );

  const searchQuery = (e: ChangeEvent<HTMLInputElement>) =>
    startTransition(() => setQuery(e.target.value));

  return {
    movies: filteredData,
    searchQuery,
    error,
    loading,
  };
};

export default useGetMovies;
