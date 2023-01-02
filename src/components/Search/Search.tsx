import { FC, useEffect, useRef, useState } from 'react';
import { connect } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { selectUser } from '../../store/userDetailsReducer';
import styles from './Search.module.scss';



 interface list {
  key: number,
  item: string
 }
 
 interface SearchProps {
  someText(list:list[]): void;
 }

const Search: FC<SearchProps> = ({someText}):JSX.Element => {
  const user = useAppSelector(selectUser);
  const dispatch = useAppDispatch();
  
  const [list, setList] = useState<{key: number, item:string}[]>([]);
  const addInput = useRef<HTMLInputElement>(null);
  
  function search() {
    dispatch({type:'userDetail/update',
  payload: {userName: 'Ravi', pasword:"teja"}});
  }

  useEffect(() => {
  },[user])

  function addValueToList() {

    if (addInput.current && addInput.current.value !== '') {
      setList([
        ...list,
        {
        key: list.length+1,
        item: addInput.current.value
        }
      ]);
      addInput.current.value = '';
    }
  }

  function rows(list: list) {
    return (
      <tr key={list.key}>
        <td>{list.key}</td>
        <td>{list.item}</td>
      </tr>
    );
  }

  function showDetails() {
    someText(list);
    return list.map((ref: list) => {
      return rows(ref);
    });
  }

  return (
    <>
      <div className={styles.Search} data-testid="Search">
        <input placeholder='Add To List'className='add-input' ref={addInput} required />
        <button type='button' onClick={addValueToList}> add</button>
        <br />
        <br />
        <input placeholder='Search' onChange={search} />
      </div>
      <div>
        <div>{user.password}</div>
        <div>{user.userName}</div>
      </div>
      <table>
        <thead>
          <tr>
            <th>S.no</th>
            <th>List</th>
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

export default connect()(Search);

