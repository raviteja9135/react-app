import React, { FC } from 'react';
import { useAppDispatch,  } from '../../store/hooks';
import { USER_UPDATE_CURRENT, USER_UPDATE_LIST } from '../../store/userDetailsReducer';
import styles from './Login.module.scss';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  
  const setState = useAppDispatch()
  function handleSubmit(event:any) {
    event.preventDefault()
  setState({type: USER_UPDATE_CURRENT,
  payload: {
    userName:event.currentTarget.userName.value,
    password:event.currentTarget.password.value
  }});
  setState({type: USER_UPDATE_LIST,
  payload: {
    userName:event.currentTarget.userName.value,
    password:event.currentTarget.password.value
  }});

  }

  return (
  <div className={styles.Login} data-testid="Login">
    <form onSubmit={handleSubmit}>
    <input type="text"  className='input-text'placeholder='User Name' name="userName" id="userName" />
    <input type="password" className='password' name="password" id="password" />
    <button type="submit" value="submit" className='set-login'> Login </button>
    </form>
  </div>
 );
}

export default Login;
