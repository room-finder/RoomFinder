import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignInPage from './Pages/signInPage'
import criteriaPage from './Pages/criteriaPage'
import roomsPage from './Pages/roomsPage'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        netID: '',
        name: '',
        email: ''
      }
    }
  }

  updateUserData = (signInData) => {
    this.setState({ userData: signInData })
  }

  render() {
    document.body.style.backgroundColor = "blueviolet";
    return [
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={(props) => <SignInPage {...props} />} />
          <Route exact path="/criteria" component={criteriaPage} />
          <Route exact path="/rooms" component={roomsPage} />
        </Switch>
      </BrowserRouter>
    ]
  }
}

export default App;