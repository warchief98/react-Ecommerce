import React from 'react';

import { Switch, Route } from 'react-router-dom';

import HomePage from './pages/home-page/home-page.component';

import './App.css';

const HatsPage = (props) =>{
    console.log(props);
    return(
    <div>
        <h1>Hats page</h1>
    </div>
    )
};

class App extends React.Component {

  render(){
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/hats" component={HatsPage} />
        </Switch>
        
      </div>
    );
  }
}

export default App;
