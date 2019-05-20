import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignInPage from './Pages/signInPage'
import CriteriaPage from './Pages/criteriaPage'
import roomsPage from './Pages/roomsPage'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        netID: '',
        name: '',
        email: ''
      },
      library: ''
    }
  }

  updateUserData = (signInData) => {
    this.setState({ userData: signInData })
  }

  updateLibrary = (lib) => {
    this.setState({ library: lib})
  }

  render() {
    console.log(this.state.userData)
    console.log(this.state.library)
    document.body.style.backgroundColor = "blueviolet";
    return [
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={(props) => <SignInPage {...props} updateApp={this.updateUserData} />} />
          <Route exact path="/criteria" component={() => <CriteriaPage updateApp={this.updateLibrary} />} />
          <Route exact path="/rooms" component={roomsPage} />
        </Switch>
      </BrowserRouter>
    ]
  }
}

export default App;