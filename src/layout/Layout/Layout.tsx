import React, { FC } from 'react';
import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../pages/Dashboard/Dashboard.lazy';
import styles from './Layout.module.scss';



interface LayoutProps {
  header?: React.ReactElement,
  body?: React.ReactElement,
  footer?: React.ReactElement
}


const Layout: FC<LayoutProps> = ({header, footer}) => (
  <div className={styles.Layout} data-testid="Layout">
    <header>
    {header}
    </header>
    <div className='section' data-testid="section">
    <Routes>
      <Route path='/Dashboard' element = {<Dashboard/>}/>
      <Route path='/' element = {<div>Home Comonent</div>}/>
      <Route path='/Login' element = {<div>Login Component</div>}/>
    </Routes>
    </div>
    <footer>
    {footer}
    </footer>
  </div>
);

export default Layout;
