import { ChangeEvent } from 'react';

export interface Movie {
  id: number;
  title: string;
  overview: string;
  poster_path: string;
  release_date: string;
  vote_average: number;
}
export type Movies = Movie[];

export type SearchQuery = (event: ChangeEvent<HTMLInputElement>) => void;
