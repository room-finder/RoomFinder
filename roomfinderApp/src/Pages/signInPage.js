import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Form, Button, Grid, Input } from 'semantic-ui-react';

class signInPage extends Component {
  state={}
  handleChange = (e, { name, value }) => this.setState({ [name]: value })
  handleSubmit = () => this.setState({ netID: '', password: '' })

  render() {
    document.body.style.backgroundColor = "blueviolet";
    const { netID, password } = this.state
    console.log(netID, password)
    return (
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
            <Link to="/nextPage">
              <Button 
                type="submit" 
                content="Login"
              />
            </Link>
          </Form>
        </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default signInPage