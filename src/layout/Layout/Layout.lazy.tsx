import { lazy, Suspense } from 'react';
const LazyLayout = lazy(() => import('./Layout'));

const Layout = (props:any) => (
  <Suspense fallback={null}>
    <LazyLayout {...props} />
  </Suspense>
);

export default Layout;
