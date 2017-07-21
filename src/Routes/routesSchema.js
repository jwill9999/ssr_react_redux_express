import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Home from '../components/home';
import Page from '../components/page';


const Main = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Home}/>
      <Route path='/page' component={Page}/>     
    </Switch>
  </main>
)
 


export default Main;