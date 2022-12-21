import React, { FC } from 'react';
import styles from './Search.module.scss';

interface SearchProps {}

const Search: FC<SearchProps> = () => {
  
  function search () {
    alert('show Details');
  }

  return (
  <div className={styles.Search} data-testid="Search">
    <input placeholder=''onChange={search}/>
  </div>
);
  }

export default Search;
