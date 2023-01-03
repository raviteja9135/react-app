import React, { Component, Suspense } from 'react';
import './App.scss';
import Footer from './components/Footer/Footer.lazy';
import Header from './components/Header/Header.lazy';
import Layout from './layout/Layout/Layout.lazy';



class App extends Component {
constructor(private navigate:any) {
  super(navigate);
  
}


  render(): React.ReactNode {
    
      return (
        <div className="App">
          <Suspense fallback={<div>... Loading</div>}>
            <Layout header={<Header/>} footer={<Footer/>}/>
          </Suspense>
        </div>
      );
  }

  search() {

  }

}


export default App;
