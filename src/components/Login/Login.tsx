import React, { FC } from 'react';
import styles from './Login.module.scss';

interface LoginProps {}

const Login: FC<LoginProps> = () => (
  <div className={styles.Login} data-testid="Login">
    <input type="text" name="userName" id="userName" />
  </div>
);

export default Login;
