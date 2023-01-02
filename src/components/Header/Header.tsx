import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => (
  <div className={styles.Header} data-testid="Header">
    <nav>
        <Link to='/'>Home</Link>
        <Link to='/Dashboard'>Dashboard</Link>
        <Link to="/Login"> Login</Link>
    </nav>
  </div>
);

export default Header;
