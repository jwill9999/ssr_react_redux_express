import React from 'react';
import image from '../styles/react-logo.png';
import '../styles/index.css'
import { Link } from 'react-router-dom'



const Header = () => {
  return (
    <div className="App ">
      <div className="App-header">
        <img id="png" src={image} alt="" />
        <h2>Welcome to React Server side Rendering</h2>
      </div>
      <div className='container'>
        <div className="row">
          <div className="col-md-12 col-md-offset-5">
            <ul className='nav nav-pills'>
              <li><Link to='/'>Home</Link></li>
              <li><Link to='/page'>Page</Link></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )     

}
export default Header;