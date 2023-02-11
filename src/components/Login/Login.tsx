
import { Button, FormGroup, Input } from '@mui/material';
import { FC } from 'react';
import {CreateNewFolderTwoTone} from '@mui/icons-material';
import {   } from '../../store/hooks';
import {} from '../../store/userDetailsReducer';
import styles from './Login.module.scss';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  return (
    <div className={styles.Login}>
      <FormGroup className={styles.FormGroup}>
        <Input placeholder='User Name'></Input>
        <Input placeholder='Password'></Input>
        <Button type='submit' variant='contained' endIcon={<CreateNewFolderTwoTone/>}>Login</Button>
      </FormGroup>
    </div>
  );
  
}

export default Login;
