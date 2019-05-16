import React, { Component } from 'react'
import ConfirmModal from '../Modals/confirmModal'
import { Container, Header, Form, Button, Grid, Input } from 'semantic-ui-react';

class signInPage extends Component {
  state={}

  userData = [
    { name: 'Tom Jones', netID: 'taj123', password: 'password1', email: "thomasjones2020@u.northwestern.edu" },
    { name: 'Alice Smith', netID: 'abs456', password: 'password2', email: "alicesmith2021@u.northwestern.edu" },
    { name: 'Bobby Lee', netID: 'bgl789', password: 'password3', email: "bobbylee2019@u.northwestern.edu" },
  ]

  handleChange = (e, { name, value }) => {
    this.setState({ [name]: value })
    for (let i = 0; i < this.userData.length; i++) {
      if (this.userData[i].netID === this.state.netID) {
        this.setState({name: this.userData[i].name, email: this.userData[i].email})
      } 
    }
  }
  
  handleSubmit = () => this.setState({showModal: true})

  closeModal = () => this.setState({ netID: '', password: '', showModal: false})

  render() {
    document.body.style.backgroundColor = "blueviolet";
    const { netID, password } = this.state

    const validUser = () => {
      for (let i = 0; i < this.userData.length; i++) {
        if (this.userData[i].netID === this.state.netID && this.userData[i].password === this.state.password) {
          return true
        } 
      }
      return false
    }

    return ([
      <ConfirmModal
        open={this.state.showModal}
        name={this.state.name}
        email={this.state.email}
        netID={this.state.netID}
        closeModal={this.closeModal}
        success={validUser()}
      />,

      <Container style={{marginTop: "50px"}}>
      <Grid centered>
      <Grid.Row>
          <Header 
            as="h2"
            inverted 
            content="Please Sign In With Your NetID"
          />
        </Grid.Row>
        <Grid.Row>
          <Form onSubmit={this.handleSubmit} inverted> 
            <Form.Field>
              <Input
                name="netID" 
                value={netID} 
                label="NetID"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Form.Field>
            <Input
                type="password"
                name="password" 
                value={password} 
                label="Password"
                onChange={this.handleChange}
              />
            </Form.Field>
            <Button 
              content="Login"
            />
          </Form>
        </Grid.Row>
        </Grid>
      </Container>
    ])
  }
}

export default signInPage
