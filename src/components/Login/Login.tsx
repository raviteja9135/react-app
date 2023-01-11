import { FC } from 'react';
import { useAppDispatch,  } from '../../store/hooks';
import { USER_UPDATE_CURRENT } from '../../store/userDetailsReducer';
import styles from './Login.module.scss';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  
  const setState = useAppDispatch()
  function handleSubmit(event:any) {
    event.preventDefault()
    console.log(event.currentTarget.email.value);
    setState({
      type: USER_UPDATE_CURRENT,
      payload: {
        firstName:event.currentTarget.firstName.value,
        lastName:event.currentTarget.lastName.value,
        email: event.currentTarget.email.value,
        phone: event.currentTarget.phone.value
      }
    });
  }

  return (
  <div className={styles.Login} data-testid="Login">
    <form onSubmit={handleSubmit}>
      <input type="text"  className='input-text' placeholder='First Name' name="firstName" id="firstName" />
      <input type="text" className='input-text' placeholder='Last Name' name="lastName" id="lastName" />
      <input type="email" className='input-text' placeholder='Email Id' name="email" id="email" />
      <input type="tel" className='input-text' placeholder='Phone Number' name="phone" id="phone" />
      <button type="submit" value="submit" className='set-login'>Submit</button>
    </form>
  </div>
 );
}

export default Login;
