import { FC } from 'react';
import { InputProps } from './types';
import './SearchInput.css';

const SearchInput: FC<InputProps> = ({ searchQuery }) => (
  <input className="search-input" type="text" onChange={searchQuery} />
);

export default SearchInput;
