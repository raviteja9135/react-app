import { FC, useEffect, useState } from 'react';
import { useAppSelector } from '../../store/hooks';
import { selectUser, User } from '../../store/userDetailsReducer';
import styles from './Search.module.scss';
import { getListData } from './Search.service';
interface SearchProps {
}

const Search: FC<SearchProps> = (): JSX.Element => {
  const user = useAppSelector(selectUser);
  const [userList, setUserList] = useState<User[]>([]);

  function rows(user: User, index: number) {
    return (
      <tr key={index}>
        <td>{index}</td>
        <td>{user.user.firstName}</td>
        <td>{user.user.lastName}</td>
        <td>{user.user.email}</td>
        <td>{user.user.phone}</td>
      </tr>
    );
  }

  async function showDetails() {
    await getListData().then((obj:User[]) => {
      setUserList(prevState => [
        ...prevState, ...obj
      ]);
  });
  }

  useEffect(() => {
    return () => {}
  },[user]);

  return (
    <>
      <div className={styles.Search} data-testid="Search">
        <input placeholder='Search' className='add-input' />
        <button type='button' onClick={showDetails}> add</button>
        <br />
        <br />
      </div>
      <div>
        <div><h3>Welcome User {user.user.firstName}</h3> </div>
        <div><h3>Your Last Name is {user.user.lastName}</h3></div>
        <div><h3>Your Email is {user.user.email}</h3></div>
        <div><h3>Your Phone is {user.user.phone}</h3></div>
      </div>
      <h2> Please find below the list of users logged in</h2>
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user: User, index) => {
            if (user.user.firstName) {
              return rows(user, index)
            }
            return false;
          }
          )}
        </tbody>
        <tfoot></tfoot>
      </table>
    </>
  );
}

export default Search;

