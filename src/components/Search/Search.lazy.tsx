import React, { lazy, Suspense } from 'react';

const LazySearch = lazy(() => import('./Search'));

const Search = (props: any & { children?: React.ReactNode; }) => (
  <Suspense fallback={<div> ... Loading</div>}>
    <LazySearch {...props} />
  </Suspense>
);

export default Search;
