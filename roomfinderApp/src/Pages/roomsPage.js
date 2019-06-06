import React, { Component } from 'react'
import { Menu, Segment, Header, Container, Grid, Button, Modal, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import moment from 'moment'

const muddRooms = [
  { name: 'Mudd 2142', description: '60" Display | 1 Large Table | 6 Chairs' },
  { name: 'Mudd 2146', description: '60" Display | 1 Large Table | 2 Bench Seats' },
  { name: 'Mudd 2148', description: '60" Display | 1 Large Table | 6 Chairs' },
  { name: 'Mudd 2151', description: '60" Display | 3 Small Tables | 2 Soft Chairs' },
  { name: 'Mudd 2174', description: '80" Display | 1 Table | 12 chairs' },
  { name: 'Mudd 2176', description: '80" Display | 2 Tables | Bench Seat | 4 Chairs' }
]

const mainRooms = [
  { name: 'Core B', description: '1 Whiteboard | 1 Table | 4 Chairs' },
  { name: 'Core C', description: '1 Whiteboard | 1 Table | 4 Chairs' },
  { name: 'Core D', description: '1 Whiteboard | 1 Table | 4 Chairs' },
  { name: '1South Room A', description: '3 Tables | 10 Chairs | Movable Furniture' },
  { name: '1South Room B', description: '2 Tables | 10 Chairs | Movable Furniture' }
]

class RoomsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRoom: '',   
      showModal: false
    }
  }

  handleItemClick = (e, { name }) => {
    this.setState({ selectedRoom: name, showModal: true })
  }

  updateAppData = () => {
    this.props.updateApp(this.state.selectedRoom)
  }

  render() {
    const { selectedRoom } = this.state

    const roomMenu = (m, n, library) => {
      let RoomItems = []
      for (let i = m; i < n; i++) {
        RoomItems.push(
          <Menu.Item 
            name={library[i].name}
            active={selectedRoom === library[i].name}
            onClick={this.handleItemClick}
          >
            <Header style={{marginBottom: "0px"}} as="h5" content={library[i].name} />
            <p style={{color: "grey"}}>{library[i].description}</p>
          </Menu.Item>
        )
      }
      return RoomItems
    }

    const roomType1 = this.props.lib === 'mudd' ? 'Group Study Rooms' : 'Core Study Rooms'
    const roomType2 = this.props.lib === 'mudd' ? 'Large Study Rooms' : 'Large Study Rooms'

    const GroupRooms = () => {
      if (this.props.lib === 'mudd') {
        if (this.props.date === moment().format('MM-DD-YYYY')) {
          return roomMenu(0, 2, muddRooms)
        }
        else {
          return roomMenu(0, 4, muddRooms)
        }
      }
      else {
        if (this.props.date === moment().format('MM-DD-YYYY')) {
          return roomMenu(0, 1, mainRooms)
        }
        else {
          return roomMenu(0, 3, mainRooms)
        }
      }
    }
    
    const LargeRooms = () => {
      if (this.props.lib === 'mudd') {
        if (this.props.date === moment().format('MM-DD-YYYY')) {
          return roomMenu(4, 5, muddRooms)
        }
        else {
          return roomMenu(4, 6, muddRooms)
        }
      }
      else {
        if (this.props.date === moment().format('MM-DD-YYYY')) {
          return roomMenu(3, 4, mainRooms)
        }
        else {
          return roomMenu(3, 5, mainRooms)
        }
      }
    }

    const Rooms = () => {
      // Busy time on current day, no rooms usually available 
      if (parseInt(this.props.timeFrom) >= 6 & this.props.timeFrom.includes("PM") 
      & this.props.date === moment().format('MM-DD-YYYY')) {
        return (
          <Grid.Row>
            <Message visible error> 
              <Message.Header content="Sorry!" />
              There are no rooms avalable at this time. 
            </Message> 
          </Grid.Row>
        )
      } 
      else {
        return ([
          <Grid.Row>
            <Menu fluid vertical style={{textAlign: "left"}}>
              <Menu.Item style={{backgroundColor: "lavender"}}>
                <Header 
                  as="h4" 
                  inverted
                  content={roomType1}
                  style={{textAlign: "center", color: "blueviolet"}}
                />
              </Menu.Item>
              <GroupRooms />
            </Menu>
          </Grid.Row>, 
          <Grid.Row> 
            <Menu fluid vertical style={{textAlign: "left"}}>
              <Menu.Item style={{backgroundColor: "lavender"}}>
                <Header 
                  as="h4" 
                  inverted
                  content={roomType2} 
                  style={{textAlign: "center", color: "blueviolet"}}
                />
              </Menu.Item>
              <LargeRooms />
            </Menu> 
          </Grid.Row>
        ])
      }
    }

    const LibraryHeader = () => {
      if (this.props.lib==="mudd") {
        return (
          <Header as="h3" content="Available in Mudd Library" style={{marginBottom: "2px"}}/>
        )
      } else if (this.props.lib==="main") {
        return (
          <Header as="h3" content="Available in Main Library" style={{marginBottom: "2px"}}/>
        )
      } else return null
    }
    
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
          <Grid.Column>
            <Button 
              floated="right" 
              compact as={Link} 
              to="/" 
              content="Logout"
              style={{backgroundColor: "blueviolet", color: "white"}}
            />
          </Grid.Column>
        </Grid>
      </Segment>,
      <Modal dimmer="inverted" open={this.state.showModal}>
        <Modal.Header content="Confirm Reservation" />
        <Modal.Content>
          Confirm reservation for {this.state.selectedRoom} from {this.props.timeFrom} to {this.props.timeTo}?

        </Modal.Content>
        <Modal.Actions>
          <Button 
            content="Yes" 
            onClick={this.updateAppData}
            as={Link} 
            to="/confirm" 
            style={{color: 'white', backgroundColor: 'green'}}
          />
          <Button 
            content="No" 
            onClick={() => this.setState({showModal: false})}
            style={{color: 'white', backgroundColor: 'red'}} 
          />
        </Modal.Actions>
      </Modal>,
      <Container style={{ marginTop: "30px" }}>
        <Segment textAlign="center"> 
          <LibraryHeader />
          <Header as="h5" style={{marginTop: '0px', color: "grey"}}>
            {this.props.date} | {this.props.timeFrom} - {this.props.timeTo}
          </Header>
          <Link to="/criteria" style={{color: "blueviolet"}}>
            <Button 
              fluid 
              compact 
              content="Back To Options" 
              style={{backgroundColor: "blueviolet", color: "white"}}/>
          </Link>
        </Segment>
        <Grid container centered>
          <Rooms />
        </Grid>
      </Container>
    ])
  }
}

export default RoomsPage