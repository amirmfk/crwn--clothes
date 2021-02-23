import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';

import ShopPage from './Pages/shop/shop.Components';
import HomePage from './Pages/HomePage/homepage.components';
import Header from './Components/Header/header.components';



function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
