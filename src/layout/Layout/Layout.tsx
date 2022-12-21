import React, { FC } from 'react';
import styles from './Layout.module.scss';

interface LayoutProps {
}

const Layout: FC<LayoutProps> = (props, children) => (
  <div className={styles.Layout} data-testid="Layout">
  </div>
);

export default Layout;
