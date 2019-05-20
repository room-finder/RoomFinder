import React, { Component } from 'react'
import { Menu, Segment, Container, Header, Form, Button, Grid, Message } from 'semantic-ui-react';
import { Link } from 'react-router-dom'

class SignInPage extends Component {
  constructor(props) {
    super(props);
    this.state={
      netID: '',
      password: '',
      submittedName: '',
      submittedEmail: '',
      submittedNetID: '',
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
    this.setState({ submittedNetID: netID, submittedPassword: password, netID: '', password: '' })
    for (let i = 0; i < this.userData.length; i++) {
      if (this.userData[i].netID === this.state.netID) {
        this.setState({submittedName: this.userData[i].name, submittedEmail: this.userData[i].email})
      } 
    }
    if (!this.validUser()) {
      this.setState({ error: true })
    }
    else {
      this.setState({ error: false })
    }
  }

  render() {
    console.log(this.state.submittedNetID)
    console.log(this.state.submittedName)
    console.log(this.state.submittedEmail)
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
              content="Login" 
              style={{ backgroundColor: "lavender", color: "blueviolet" }}
            />
          </Link>
        )
      }
      else {
        return (
          <Button 
            content="Login" 
            style={{ backgroundColor: "lavender", color: "blueviolet" }}
          />
        )
      }
    }

    return ([
      <Segment textAlign='center' style={{borderRadius: '0px'}}>
        <Header 
          as="h2"
          style={{ color: "blueviolet" }}
          content="RoomFinder" />
      </Segment> ,
      <Container style={{marginTop: "30px"}}>
        <Grid centered>
          <Grid.Row>
              <Header 
                as="h2"
                inverted 
                content="Sign In With Your NetID"
              />
            </Grid.Row>
            <Grid.Row>
              <Form onSubmit={this.handleSubmit} inverted> 
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
            <InvalidInput />
          </Grid>
      </Container>
    ])
  }
}

export default SignInPage
