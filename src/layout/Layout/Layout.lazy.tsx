import React, { Children, lazy, Suspense } from 'react';

const LazyLayout = lazy(() => import('./Layout'));

const Layout = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyLayout/>
  </Suspense>
);

export default Layout;
