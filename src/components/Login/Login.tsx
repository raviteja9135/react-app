
import { Button, FormGroup, TextField } from '@mui/material';
import { FC, useEffect } from 'react';
import {LoginTwoTone, CreateTwoTone} from '@mui/icons-material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { SET_CURRENT_USER, selectUser } from '../../store/userDetailsReducer';
import styles from './Login.module.scss';
import { useNavigate } from 'react-router-dom';
import { getUser } from '../../store/server';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const setUser = useAppDispatch();
  const user = useAppSelector(selectUser);
  const navigate = useNavigate();
  function checkCredentials (event: any) {
    event.preventDefault();
    getUser({
      userName: event.currentTarget.userName.value,
      password: event.currentTarget.password.value
    }).then((obj)=> {
      console.log(obj);
      setUser({
        type: SET_CURRENT_USER,
        payload:  obj
      });
    }); 
  }

  useEffect(() => {
      if(user.user.firstName) {
      navigate('/Dashboard');
      }
  },[user, navigate]);

  return (
    <div className={styles.Login}>
      <form onSubmit={checkCredentials}>
      <FormGroup  className={styles.FormGroup}>
        <TextField id='userName' variant="outlined" placeholder='User Name'></TextField>
        <TextField id='password' type="password" variant="outlined" placeholder='Password'></TextField>
        <Button type='submit' className={styles.setLogin} size='large' variant='contained' endIcon={<LoginTwoTone/>}>Login</Button>
        <Button type="button" onClick={() => navigate('/Profile')} className={styles.setLogin} size='large' variant='outlined' endIcon={<CreateTwoTone/>}>Create New Account</Button>
      </FormGroup>
      <h1>{user.user.lastName}</h1>
      </form>
      
      
    </div>
  );
  
}

export default Login;
