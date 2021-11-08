import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Header from './components/header/header.component';

import HomePage from './pages/home-page/home-page.component';

import Shop from './pages/shop/shop.component';

import SignInSignUp from './pages/sign-in-sign-up/sign-in-sign-up.component';

import './App.css';


class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/shop" component={Shop} />
          <Route exact path="/sign-in-sign-up" component={SignInSignUp} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
