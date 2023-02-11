import React, { FC, useEffect } from 'react';
import { redirect, Route, Routes, Navigate } from 'react-router-dom';
import Login from '../../components/Login/Login.lazy';
import Profile from '../../components/Profile/Profile';
import Dashboard from '../../pages/Dashboard/Dashboard.lazy';
import { useAppSelector } from '../../store/hooks';
import { selectUser } from '../../store/userDetailsReducer';
import styles from './Layout.module.scss';


interface LayoutProps {
  header?: React.ReactElement,
  body?: React.ReactElement,
  footer?: React.ReactElement
}


const Layout: FC<LayoutProps> = ({header, footer}) =>{ 

  const user = useAppSelector(selectUser);
  
  return (
  <div className={styles.Layout} data-testid="Layout">
    <header>
    {header}
    </header>
    <div className='section' data-testid="section">
    <Routes>
      <Route path='/Dashboard' element = {<Dashboard/>}/>
      <Route path='/' element = {<div>Home Comonent</div>}/>
      <Route path='/Login' element = {<Login/>}/>
      <Route
      path="*"
      element={<Navigate to="/" />}
    />
    <Route path='/Profile' element = {<Profile/>}/>
    </Routes>
    </div>
    <footer>
    {footer}
    </footer>
  </div>
)
};

export default Layout;
