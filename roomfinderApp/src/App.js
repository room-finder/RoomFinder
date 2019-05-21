import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignInPage from './Pages/signInPage'
import CriteriaPage from './Pages/criteriaPage'
import RoomsPage from './Pages/roomsPage'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {
        netID: '',
        name: '',
        email: ''
      },
      criteria: {
        library: '',
        date: '',
        timeFrom: '',
        timeTo: ''
      }
    }
  }

  updateUserData = (signInData) => {
    this.setState({ userData: signInData })
  }

  updateLibrary = (libCriteria) => {
    this.setState({ criteria: libCriteria})
  }

  displayTimeTo = () => {
    if (this.state.criteria.timeTo[0] === "0")
      return this.state.criteria.timeTo.substring(1)
    else 
      return this.state.criteria.timeTo
  }

  displayTimeFrom = () => {
    if (this.state.criteria.timeFrom[0] === "0")
      return this.state.criteria.timeFrom.substring(1)
    else 
      return this.state.criteria.timeFrom
  }
  
  render() {
    console.log(this.state.userData)
    return [
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={(props) => <SignInPage {...props} updateApp={this.updateUserData} />} />
          <Route exact path="/criteria" render={(props) => <CriteriaPage {...props} updateApp={this.updateLibrary} />} />
          <Route 
            exact 
            path="/rooms" 
            render={(props) => 
              <RoomsPage 
                lib={this.state.criteria.library}
                timeFrom={this.displayTimeFrom()}
                timeTo={this.displayTimeTo()}
                date={this.state.criteria.date} />}
          />
        </Switch>
      </BrowserRouter>
    ]
  }
}

export default App;