import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import signInPage from './Pages/signInPage'
import dummySuccessPage from './Pages/dummySuccessPage'

class App extends Component {
  render() {
    return [
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={signInPage} />
          <Route exact path='/nextPage' component={dummySuccessPage} />
        </Switch>
      </BrowserRouter>
    ]
  }
}

export default App;