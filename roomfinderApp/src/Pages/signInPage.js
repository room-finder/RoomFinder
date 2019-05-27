import React, { Component } from 'react'
import { Segment, Container, Header, Form, Button, Grid, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      netID: '',
      password: '',
      submittedNetID: '',
      submittedName: '',
      submittedEmail: '',
      submittedPassword: '',
      error: false
    }
    this.validUser = this.validUser.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  userData = [
    { name: 'Tom Jones', netID: 'taj123', password: 'password1', email: "thomasjones2020@u.northwestern.edu" },
    { name: 'Alice Smith', netID: 'abs456', password: 'password2', email: "alicesmith2021@u.northwestern.edu" },
    { name: 'Bobby Lee', netID: 'bgl789', password: 'password3', email: "bobbylee2019@u.northwestern.edu" },
  ]

  validUser = () => {
    for (let i = 0; i < this.userData.length; i++) {
      if (this.userData[i].netID === this.state.netID 
        && this.userData[i].password === this.state.password) {
        return true
      } 
    }
    return false
  }

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
  }
  
  handleSubmit = () => {
    const { netID, password } = this.state
    this.updateAppData()
    this.setState({ submittedNetID: netID, submittedPassword: password, netID: '', password: '' })
    if (!this.validUser()) {
      this.setState({ error: true })
    }
    else {
      this.setState({ error: false })
    }
  }

  updateAppData = () => {
    var appUserData = {
      netID: '',
      name: '',
      email: ''
    }
    const pos = this.userData.map((e) => { return e.netID; }).indexOf(this.state.netID);
    if (pos > -1) {
      appUserData = {
        netID: this.userData[pos].netID,
        name: this.userData[pos].name,
        email: this.userData[pos].email
      }
    }
    this.props.updateApp(appUserData)
  }

  render() {
    const { netID, password } = this.state
    const InvalidInput = () => {
      if (this.state.error) {
        return (
          <Message 
            compact
            visible 
            error
            header="Invalid NetID or Password"
            content="Please try again." 
          />
        )
      }
      else return null
    }

    const SubmitButton = () => {
      if (this.validUser()) {
        return (
          <Link to="/criteria">
            <Button
              onClick={this.updateAppData}
              content="Login" 
              style={{backgroundColor: "blueviolet", color: "white"}}
            />
          </Link>
        )
      }
      else {
        return (
          <Button 
            content="Login" 
            style={{backgroundColor: "blueviolet", color: "white"}}
          />
        )
      }
    }

    return ([
      <Segment style={{borderRadius: '0px', height: "60px"}}>
        <Header 
          as="h2"
          style={{ color: "blueviolet" }}
          content="RoomFinder" />
      </Segment> ,
      <Container style={{marginTop: "50px"}}>
        <Grid centered>
          <Segment>
            <Grid.Row> 
                <Header 
                  as="h3"
                  content="Sign In With Your NetID"
                />
              </Grid.Row>
              <br/>
              <Grid.Row>
                <Form size="tiny" onSubmit={this.handleSubmit}> 
                  <Form.Input
                    name="netID" 
                    value={netID} 
                    placeholder="NetID"
                    onChange={this.handleChange}
                  />
                  <Form.Input
                    type="password"
                    name="password" 
                    value={password} 
                    placeholder="Password"
                    onChange={this.handleChange}
                  />
                  <SubmitButton />
                </Form>
              </Grid.Row>
            </Segment>
            <Grid.Row> 
              <InvalidInput />
            </Grid.Row>
          </Grid>
      </Container>
    ])
  }
}

export default SignInPage
