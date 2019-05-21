import React, { Component } from 'react'
import { Segment, Header, Container, Grid } from 'semantic-ui-react'

class RoomsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRoom: '',
      timeSlot: ''
    }
  }

  render() {
    if (this.props.lib==="mudd") {
      return ([
        <Segment textAlign='center' style={{borderRadius: '0px'}}>
          <Header 
            as="h2"
            style={{ color: "blueviolet" }}
            content="RoomFinder" />
        </Segment>,
        <Container style={{ marginTop: "30px" }}>
          <Grid centered>
            <Grid.Row>
              <Header as="h2" inverted content="Mudd Library Study Rooms" />
            </Grid.Row>
            <Grid.Row>
              <Header inverted>
                {this.props.date} from {this.props.timeFrom} to {this.props.timeTo}
              </Header>
            </Grid.Row>
          </Grid>
        </Container>
      ])
    } else if (this.props.lib==="main") {
      return ([
        <Segment textAlign='center' style={{borderRadius: '0px'}}>
          <Header 
            as="h2"
            style={{ color: "blueviolet" }}
            content="RoomFinder" />
        </Segment>,
        <Container style={{ marginTop: "30px" }}>
          <Grid centered>
            <Grid.Row>
              <Header as="h2" inverted content="Main Library Study Rooms" />
            </Grid.Row>
            <Grid.Row>
              <Header inverted>
                {this.props.date} from {this.props.timeFrom} to {this.props.timeTo}
              </Header>
            </Grid.Row>
          </Grid>
        </Container>
      ])
    }
    else return null
  }
}

export default RoomsPage

