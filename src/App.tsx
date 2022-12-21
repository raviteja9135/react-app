import React, { Component } from 'react';
import './App.css';
import Layout from './layout/Layout/Layout.lazy';
import Dashboard from './pages/Dashboard/Dashboard';

class App extends Component {
  render(): React.ReactNode {
      return (
        <div className="App">
          <header className="App-header">
          </header>
          {/* <Layout>
            <Dashboard></Dashboard>
          </Layout> */}
        </div>
      );
  }

  search() {

  }

}


export default App;
