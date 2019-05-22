import React, { Component } from 'react'
import { Menu, Segment, Header, Container, Grid, Icon, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

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
            <Menu vertical style={{textAlign: "left"}}>
              <Menu.Item style={{backgroundColor: "blueviolet"}}>
                <Header 
                  as="h4" 
                  inverted
                  content="Group Study Rooms" 
                  style={{textAlign: "center"}}
                />
              </Menu.Item>
              <Menu.Item name="Mudd 2142">
                <Header style={{marginBottom: "0px"}} as="h5" content="Mudd 2144" />
                <strong style={{color: "grey"}}>Information</strong>
              </Menu.Item>
              <Menu.Item name="Mudd 2146">
                <Header style={{marginBottom: "0px"}} as="h5" content="Mudd 2146" />
                <strong style={{color: "grey"}}>Information</strong>
              </Menu.Item>
              <Menu.Item name="Mudd 2148">
                <Header style={{marginBottom: "0px"}} as="h5" content="Mudd 2148" />
                <strong style={{color: "grey"}}>Information</strong>
              </Menu.Item>
              <Menu.Item name="Mudd 2150">
                <Header style={{marginBottom: "0px"}} as="h5" content="Mudd 2142" />
                <strong style={{color: "grey"}}>Information</strong>
              </Menu.Item>
            </Menu>
          </Grid.Row>,
          <Grid.Row>
            <Menu vertical style={{textAlign: "left"}}>
              <Menu.Item style={{backgroundColor: "blueviolet"}}>
                <Header 
                  as="h4" 
                  inverted
                  content="Large Study Rooms" 
                  style={{textAlign: "center"}}
                />
              </Menu.Item>
              <Menu.Item name="Mudd 2174">
                <Header style={{marginBottom: "0px"}} as="h5" content="Mudd 2144" />
                <strong style={{color: "grey"}}>Information</strong>
              </Menu.Item>
              <Menu.Item name="Mudd 2176">
                <Header style={{marginBottom: "0px"}} as="h5" content="Mudd 2146" />
                <strong style={{color: "grey"}}>Information</strong>
              </Menu.Item>
            </Menu>
          </Grid.Row>
        ])
      } else if (this.props.lib==="main") {
        return ([
          <Grid.Row>
            <Menu vertical style={{textAlign: "left"}}>
              <Menu.Item style={{backgroundColor: "blueviolet"}}>
                <Header 
                  as="h4" 
                  inverted
                  content="Core Study Rooms" 
                  style={{textAlign: "center"}}
                />
              </Menu.Item>
              <Menu.Item name="Mudd 2148">
                <Header style={{marginBottom: "0px"}} as="h5" content="Core B" />
                <strong style={{color: "grey"}}>Information</strong>
              </Menu.Item>
              <Menu.Item name="Mudd 2148">
                <Header style={{marginBottom: "0px"}} as="h5" content="Core C" />
                <strong style={{color: "grey"}}>Information</strong>
              </Menu.Item>
              <Menu.Item name="Mudd 2148">
                <Header style={{marginBottom: "0px"}} as="h5" content="Core D" />
                <strong style={{color: "grey"}}>Information</strong>
              </Menu.Item>
            </Menu>
          </Grid.Row>,
          <Grid.Row>
            <Menu vertical style={{textAlign: "left"}}>
              <Menu.Item style={{backgroundColor: "blueviolet"}}>
                <Header 
                  as="h4" 
                  inverted
                  content="Project Rooms" 
                  style={{textAlign: "center"}}
                />
              </Menu.Item>
              <Menu.Item name="Mudd 2174">
                <Header style={{marginBottom: "0px"}} as="h5" content="1South Project Room A" />
                <strong style={{color: "grey"}}>Information</strong>
              </Menu.Item>
              <Menu.Item name="Mudd 2176">
                <Header style={{marginBottom: "0px"}} as="h5" content="1South Project Room B" />
                <strong style={{color: "grey"}}>Information</strong>
              </Menu.Item>
            </Menu>
          </Grid.Row>
        ])
      } else return null
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
      <Container style={{ marginTop: "30px" }}>
        <Grid centered>
          <Segment> 
            <LibraryHeader />
            <Header as="h5" style={{marginTop: '0px', color: "grey"}}>
              {this.props.date} | {this.props.timeFrom} - {this.props.timeTo}
            </Header>
            <Link to="/criteria" style={{color: "blueviolet"}} style={{marginBottom: "0px"}}>
              <Button 
                fluid 
                compact 
                content="Back To Options" 
                style={{backgroundColor: "blueviolet", color: "white"}}/>
            </Link>
          </Segment>
          <Rooms />
        </Grid>
      </Container>
    ])
  }
}

export default RoomsPage