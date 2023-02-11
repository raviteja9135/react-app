import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, FormGroup, TextField} from '@mui/material';
import { FC, useRef, useState } from 'react';
import { useAppDispatch } from '../../store/hooks';
import { USER_UPDATE_CURRENT } from '../../store/userDetailsReducer';
import styles from './Profile.module.scss';
import {Dashboard} from '@mui/icons-material';

interface ProfileProps {}

const Profile: FC<ProfileProps> = () =>{
const [isOpen, setisOpen] = useState<boolean>(false);
const profilePreview = useRef<any>();
const reader = new FileReader();

reader.addEventListener('load',() => {
  profilePreview.current.src = reader.result
},false);

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

  function toggleOverlay() {
    (isOpen)? setisOpen(false): setisOpen(true);
  }

  function handleProfilePic(event:any) {
    const file = event.currentTarget.files[0];
    reader.readAsDataURL(file);
    console.log(profilePreview);
    // profilePreview.current.src = file;
    toggleOverlay();

  }

  function updatePic() {

  }

  return (
  <div className={styles.Profile} data-testid="Login">
    <form onSubmit={handleSubmit} className={styles.form}>

      <FormGroup className={styles.FormGroup}>
        <TextField type="text" color='primary' variant="outlined"  className={styles.Input} placeholder='First Name' name="firstName" id="firstName" />
        <TextField type="text" color='primary' variant="outlined" className={styles.Input} placeholder='Last Name' name="lastName" id="lastName" />
        <TextField type="email" color='primary' variant="outlined" className={styles.Input} placeholder='Email Id' name="email" id="email" />
        <TextField type="tel" color='primary' variant="outlined" className={styles.Input} placeholder='Phone Number' name="phone" id="phone" />
        <Button variant="contained" className={styles.button}>Create Profile</Button>
      </FormGroup>

      <FormGroup className={styles.FormGroup}>
        <TextField size='medium' type='file' variant="outlined"  className={styles.Input} inputProps={{accept:'.png,.jpg,.jpeg'}} id="profilePic" onChange={handleProfilePic}/>
        <TextField type='password' variant="outlined" color='primary'  className={styles.Input} placeholder='Enter Password'/>
        <TextField type='password' variant="outlined" color='primary'  className={styles.Input} placeholder='Re-enter Password'/>
        <Button variant="contained" className={styles.button}>Update Password</Button>
      </FormGroup>
      
    </form>
    <Dialog open={isOpen}
        onClose={toggleOverlay}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description">
      <DialogTitle id="alert-dialog-title">
          {"Use Google's location service?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Let Google help apps determine location. This means sending anonymous
            location data to Google, even when no apps are running.
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
