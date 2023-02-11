import React, { lazy, Suspense } from 'react';

const LazyProfilePic = lazy(() => import('./ProfilePic'));

const ProfilePic = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyProfilePic {...props} />
  </Suspense>
);

export default ProfilePic;
