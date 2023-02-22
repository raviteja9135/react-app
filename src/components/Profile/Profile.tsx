import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormGroup, TextField} from '@mui/material';
import { FC, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch } from '../../store/hooks';
import { USER_UPDATE_CURRENT } from '../../store/userDetailsReducer';
import styles from './Profile.module.scss';

interface ProfileProps {}

const Profile: FC<ProfileProps> = () =>{
const [isOpen, setisOpen] = useState<boolean>(false);
const profilePreview = useRef<any>();
const reader = new FileReader();
let img: string | ArrayBuffer | null;
const [hideProfileForm, setHideProfileForm] = useState<boolean>(true);
reader.addEventListener('load',() => {
  img = reader.result;
  profilePreview.current.src = reader.result
  
},true);

  const setState = useAppDispatch();
  const navigate = useNavigate();
  function handleSubmit(event:any) {
    event.preventDefault()
    if(event.currentTarget.password.value === event.currentTarget.rePassword.value) {
      setState({
        type: USER_UPDATE_CURRENT,
        payload: {
          user: {
            firstName:event.currentTarget.firstName.value,
            lastName:event.currentTarget.lastName.value,
            email: event.currentTarget.email.value,
            phone: event.currentTarget.phone.value,
            password: event.currentTarget.password.value,
            userName: event.currentTarget.firstName.value,
            profilePic: null
          }
        }
      });
      setHideProfileForm(false);
    }
  }
  
  function toggleOverlay() {
    (isOpen)? setisOpen(false): setisOpen(true);
  }

  function handleProfilePic(event:any) {
    const file = event.currentTarget.files[0];
    reader.readAsArrayBuffer(file)
    toggleOverlay();
  }

  function redirectDashboard () {
    navigate('/Dashboard');
  }

  function updatePic() {

  }

  return (
  <div className={styles.Profile} data-testid="Login">
    {hideProfileForm && <form onSubmit={handleSubmit} className={styles.form}>

      <FormGroup className={styles.FormGroup}>
        <TextField type="text" color='primary' variant="outlined"  className={styles.Input} placeholder='First Name' name="firstName" id="firstName" />
        <TextField type="text" color='primary' variant="outlined" className={styles.Input} placeholder='Last Name' name="lastName" id="lastName" />
        <TextField type="email" color='primary' variant="outlined" className={styles.Input} placeholder='Email Id' name="email" id="email" />
        <TextField type="tel" color='primary' variant="outlined" className={styles.Input} placeholder='Phone Number' name="phone" id="phone" />
        <Button variant="contained" type='submit' className={styles.button}>Create Profile</Button>
      </FormGroup>

      <FormGroup className={styles.FormGroup}>
        <TextField size='medium' type='file' variant="outlined"  className={styles.Input} inputProps={{accept:'.png,.jpg,.jpeg'}} id="profilePic" onChange={handleProfilePic}/>
        <TextField id="password" name="password" type='password' variant="outlined" color='primary'  className={styles.Input} placeholder='Enter Password'/>
        <TextField id="rePassword" name="rePassword" type='password' variant="outlined" color='primary'  className={styles.Input} placeholder='Re-enter Password'/>
        <Button variant="contained" className={styles.button}>Update Password</Button>
      </FormGroup>

    </form> }
    {!hideProfileForm && <>
      <h1>Profile Created Successfully</h1>
      <Button type='button' variant='contained' color='success' onClick={redirectDashboard}>Go to Dashboard</Button>
    </>}
    <Dialog open={isOpen}
        onClose={toggleOverlay}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">
          {"Edit Profile Pic"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Please crop the profile pic to fit.
            <img src="" ref={profilePreview} alt="preview profilepic" />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={toggleOverlay}>Disagree</Button>
          <Button onClick={toggleOverlay} autoFocus>
            Agree
          </Button>
        </DialogActions>
    </Dialog>
  </div>
 );
};

export default Profile;
