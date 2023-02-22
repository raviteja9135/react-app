import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Search from '../../components/Search/Search.lazy';
import { useAppSelector } from '../../store/hooks';
import { selectUser } from '../../store/userDetailsReducer';
import styles from './Dashboard.module.scss';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => {
  const navigate = useNavigate();
  const userDetails = useAppSelector(selectUser);
  function updatedData (data: string[]) {
    // console.log(data);
  }

  useEffect(() => {
    if(!userDetails.user.firstName) {
    navigate('/Login');
    }
},[userDetails, navigate]);

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
