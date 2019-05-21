import React, { Component } from 'react'
import { Menu, Segment, Header, Container, Grid } from 'semantic-ui-react'

class RoomsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRoom: '',
      timeSlot: ''
    }
  }

  render() {
    const Rooms = () => {
      if (this.props.lib==="mudd") {
        return ([
          <Grid.Row>
            <Menu vertical> 
              <Menu.Item content="Mudd 2144" />
              <Menu.Item content="Mudd 2144" />
              <Menu.Item content="Mudd 2144" />
            </Menu>
          </Grid.Row>
        ])
      } else if (this.props.lib==="main") {
        return ([
          <Grid.Row>
            <Segment textAlign="left" style={{width: "240px"}}>
              <Header as="h4" content="Core B" />
            </Segment>
          </Grid.Row>,
          <Grid.Row>
            <Segment textAlign="left" style={{width: "240px"}}>
              <Header as="h4" content="Core C" />
            </Segment>
          </Grid.Row>,
          <Grid.Row>
            <Segment textAlign="left" style={{width: "240px"}}>
              <Header as="h4" content="Core D" />
            </Segment>
          </Grid.Row>
        ])
      } else return null
    }


    const LibraryHeader = () => {
      if (this.props.lib==="mudd") {
        return (
          <Header as="h3" content="Mudd Library Study Rooms" />
        )
      } else if (this.props.lib==="main") {
        return (
          <Header as="h3" content="Main Library Study Rooms" />
        )
      } else return null
    }
    
    return ([
      <Segment textAlign='center' style={{borderRadius: '0px'}}>
        <Header 
          as="h2"
          style={{ color: "blueviolet" }}
          content="RoomFinder" 
        />
      </Segment>,
      <Container style={{ marginTop: "30px" }}>
        <Grid centered>
          <Segment> 
            <LibraryHeader />
            <Header as="h5" style={{marginTop: '0px'}}>
              {this.props.date} | {this.props.timeFrom} - {this.props.timeTo}
            </Header>
          </Segment>
          <Rooms />
        </Grid>
      </Container>
    ])
  }
}

export default RoomsPage

