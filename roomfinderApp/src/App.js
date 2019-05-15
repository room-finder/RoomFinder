import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import signInPage from './Pages/page1'
import './App.css';

class App extends Component {
  render() {
    return [
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={signInPage} />
        </Switch>
      </BrowserRouter>
    ]
  }
}

export default App;