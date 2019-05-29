import React, { Component } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import SignInPage from './Pages/signInPage'
import CriteriaPage from './Pages/criteriaPage'
import RoomsPage from './Pages/roomsPage'
import ConfirmPage from './Pages/confirmPage'

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
        timeTo: '',
        people: '',
      },
      roomNumber: ''
    }
  }

  updateUserData = (signInData) => {
    this.setState({ userData: signInData })
  }

  updateLibrary = (libCriteria) => {
    this.setState({ criteria: libCriteria})
  }

  updateRoom = (room) => {
    this.setState({ roomNumber: room})
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
    console.log(this.state.criteria)
    console.log(this.state.roomNumber)
    return [
      <BrowserRouter>
        <Switch>
          <Route exact path='/' render={() => <SignInPage updateApp={this.updateUserData} />} />
          <Route exact path="/criteria" render={() => <CriteriaPage updateApp={this.updateLibrary} />} />
          <Route 
            exact 
            path="/rooms" 
            render={() => 
              <RoomsPage 
                lib={this.state.criteria.library}
                timeFrom={this.displayTimeFrom()}
                timeTo={this.displayTimeTo()}
                date={this.state.criteria.date} 
                updateApp={this.updateRoom}
              />}
          />
          <Route 
            exact 
            path='/confirm' 
            render={() => 
              <ConfirmPage
                room={this.state.roomNumber}
                email={this.state.userData.email}
                name={this.state.userData.name}
                timeFrom={this.state.criteria.timeFrom}
                timeTo={this.state.criteria.timeTo}
                date={this.state.criteria.date}
                people={this.state.criteria.people}
              />
            } 
          />
        </Switch>
      </BrowserRouter>
    ]
  }
}

export default App;