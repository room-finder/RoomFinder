import React, { Component } from 'react'
import { Container, Header, Form, Segment, Button, Input } from 'semantic-ui-react';
import '../App.css';

class signInPage extends Component {
  render() {
    document.body.style.backgroundColor = "#D8BFD8"	
    return (
      <Container>
        <Segment color='purple' style={{marginTop: '30px'}}>
          <Header>
          PLEASE SIGN IN WITH YOUR NETID
          </Header>
        </Segment>
          <Form>
            <Form.Field>
              <input placeholder='First Name' />
            </Form.Field>
            <Form.Field>
              <label>Last Name</label>
              <input placeholder='Last Name' />
            </Form.Field>
            <Button style={{backgroundColor: "purple"}} type='submit'>Submit</Button>
          </Form>
      </Container>
    )
  }
}

export default signInPage