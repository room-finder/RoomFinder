import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Header, Button, Grid } from 'semantic-ui-react';

class dummySuccessPage extends Component {
  render() {
    document.body.style.backgroundColor = "green";
    return (
      <Container style={{marginTop: "50px"}}>
        <Grid centered>
          <Grid.Row>
            <Header 
              as="h2"
              inverted 
              content="Success"
            />
          </Grid.Row>
          <Grid.Row>
            <Link to="/">
              <Button content="Back to Login" />
            </Link>
          </Grid.Row>
        </Grid>
      </Container>
    )
  }
}

export default dummySuccessPage