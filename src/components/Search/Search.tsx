import { FC } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectUser, User } from '../../store/userDetailsReducer';
import styles from './Search.module.scss'; 
 interface SearchProps {
 }

const Search: FC<SearchProps> = ():JSX.Element => {
  const user = useAppSelector(selectUser);

 
  function rows(user: User, index: number) {
    return (
      <tr key={index}>
        <td>{index}</td>
        <td>{user.userName}</td>
        <td>{user.password}</td>
      </tr>
    );
  }

  function showDetails() {
    return user.userList.map((user: User, index) => {
      if (user.userName && user.password) {
        return rows(user, index);
      }
      return false;
    });
  }

  return (
    <>
      <div className={styles.Search} data-testid="Search">
        <input placeholder='Search'className='add-input'/>
        <button type='button'> add</button>
        <br />
        <br />
      </div>
      <div>
        <div><h3>Welcome User {user.current.userName}</h3> </div>
        <div><h3>Your Password is {user.current.password}</h3></div>
      </div>
      <h2> Please find below the list of users logged in</h2>
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>User Name</th>
            <th>Passowrd</th>
          </tr>
        </thead>
        <tbody>
          {showDetails()}
          </tbody>
          <tfoot></tfoot>
      </table>
    </>
  );
}

export default Search;

