import React, { FC } from 'react';
import Search from '../../components/Search/Search.lazy';
import styles from './Dashboard.module.scss';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => (
  <div className={styles.Dashboard} data-testid="Dashboard">
    <Search></Search>
  </div>
);

export default Dashboard;
