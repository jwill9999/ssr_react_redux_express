import React, { Component } from 'react';
import Header from '../../components/header';
import Main from '../../Routes/routesSchema';
import './App.css';

class App extends Component {
  render() {
    return (
     <div>
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
