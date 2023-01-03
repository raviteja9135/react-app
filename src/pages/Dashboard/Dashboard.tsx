import { FC } from 'react';
import Search from '../../components/Search/Search.lazy';
import styles from './Dashboard.module.scss';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  function updatedData (data: string[]) {
    // console.log(data);
  }
  function showComponent() {
      return (
        <div className='search'>
          <Search ></Search>
        </div>
      )
    
  }
  
  return (
  <div className={styles.Dashboard} data-testid="Dashboard">
    {showComponent()}
  </div>
);
  };

export default Dashboard;
