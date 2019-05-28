import React, { Component } from 'react'
import { Segment, Header, Container, Grid, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import CriteriaPage from './criteriaPage';

class ConfirmPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { room, name, email, timeFrom, timeTo, date} = this.props
    return ([
      <Segment style={{borderRadius: '0px'}}>
        <Grid columns="equal">
          <Grid.Column width={11}> 
            <Header 
              as="h2"
              style={{ color: "blueviolet"}}
              content="RoomFinder" 
            />
          </Grid.Column>
        </Grid>
      </Segment>,
      <Container centered style={{ marginTop: "30px" }}>
        <Segment padded> 
          <Header content="Reservation Confirmed!" />
          <p><strong style={{color: "blueviolet"}}>Name:</strong> {name} </p>
          <p><strong style={{color: "blueviolet"}}>When:</strong> {date} {timeFrom} — {timeTo}</p>
          <p><strong style={{color: "blueviolet"}}>Room:</strong> {room}</p>
          <p>Confirmation email sent to <p style={{color: "blueviolet"}}>{email}</p></p> 
          <Button 
            fluid
            style={{color: "white", backgroundColor: "blueviolet"}}
            as={Link} 
            to="/"
            content="Logout"
          />
          <br />
          <Button 
            fluid
            style={{color: "white", backgroundColor: "blueviolet"}}
            as={Link} 
            to="/criteria"
            content="Make Another Reservation"
          />
        </Segment>
      </Container>
    ])
  }
}

export default ConfirmPage