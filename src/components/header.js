import React from 'react';
import image from '../styles/react-logo.png';
import '../styles/index.css'

const Header = () => {
  return (    
      <div className="App">
        <div className="App-header">
          <img id="png" src={image} alt="" />
          <h2>Welcome to React Server Side Rendering</h2>
        </div>
      </div>
      
  );
};

export default Header;