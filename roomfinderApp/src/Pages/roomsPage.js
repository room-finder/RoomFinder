import React, { Component } from 'react'
import { Menu, Segment, Header, Container, Grid, Button} from 'semantic-ui-react'
import { Link } from 'react-router-dom'

class RoomsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedRoom: '',
    }
  }

  handleItemClick = (e, { name }) => this.setState({ selectedRoom: name })


  render() {
    const { selectedRoom } = this.state

    const Rooms = () => {
      if (this.props.lib==="mudd") {
        return ([
          <Grid.Row>
            <Menu fluid vertical style={{textAlign: "left"}}>
              <Menu.Item style={{backgroundColor: "lavender"}}>
                <Header 
                  as="h4" 
                  inverted
                  content="Group Study Rooms" 
                  style={{textAlign: "center", color: "blueviolet"}}
                />
              </Menu.Item>
              <Menu.Item 
                name="Mudd 2142" 
                active={selectedRoom === "Mudd 2142"}
                onClick={this.handleItemClick}
              >
                <Header style={{marginBottom: "0px"}} as="h5" content="Mudd 2142" />
                <p style={{color: "grey"}}>60" Display | 1 Large Table | 6 Chairs</p>
              </Menu.Item>
              <Menu.Item 
                name="Mudd 2146" 
                active={selectedRoom === "Mudd 2146"}
                onClick={this.handleItemClick}
              >
                <Header style={{marginBottom: "0px"}} as="h5" content="Mudd 2146" />
                <p style={{color: "grey"}}>60" Display | 1 Large Table | 2 Bench Seats</p>
              </Menu.Item>
              <Menu.Item 
                name="Mudd 2148" 
                active={selectedRoom === "Mudd 2148"}
                onClick={this.handleItemClick}
              >
                <Header style={{marginBottom: "0px"}} as="h5" content="Mudd 2148" />
                <p style={{color: "grey"}}>60" Display | 1 Large Table | 6 chairs</p>
              </Menu.Item>
              <Menu.Item 
                name="Mudd 2151" 
                active={selectedRoom === "Mudd 2151"}
                onClick={this.handleItemClick}
              >
                <Header style={{marginBottom: "0px"}} as="h5" content="Mudd 2151" />
                <p style={{color: "grey"}}>60" Display | 3 Small Tables | 2 Soft Chairs</p>
              </Menu.Item>
            </Menu>
          </Grid.Row>,
          <Grid.Row>
            <Menu fluid vertical style={{textAlign: "left"}}>
              <Menu.Item style={{backgroundColor: "lavender"}}>
                <Header 
                  as="h4" 
                  inverted
                  content="Large Study Rooms" 
                  style={{textAlign: "center", color: "blueviolet"}}
                />
              </Menu.Item>
              <Menu.Item 
                name="Mudd 2174" 
                active={selectedRoom === "Mudd 2174"}
                onClick={this.handleItemClick}
              >
                <Header style={{marginBottom: "0px"}} as="h5" content="Mudd 2174" />
                <p style={{color: "grey"}}>80" Display | 1 Table | 12 chairs</p>
              </Menu.Item>
              <Menu.Item 
                name="Mudd 2176" 
                active={selectedRoom === "Mudd 2176"}
                onClick={this.handleItemClick}
              >
                <Header style={{marginBottom: "0px"}} as="h5" content="Mudd 2176" />
                <p style={{color: "grey"}}>80" Display | 2 Tables | Bench Seat | 4 Chairs</p>
              </Menu.Item>
            </Menu>
          </Grid.Row>
        ])
      } else if (this.props.lib==="main") {
        return ([
          <Grid.Row>
            <Menu fluid vertical style={{textAlign: "left"}}>
              <Menu.Item style={{backgroundColor: "lavender"}}>
                <Header 
                  as="h4" 
                  inverted
                  content="Core Study Rooms" 
                  style={{textAlign: "center", color: "blueviolet"}}
                />
              </Menu.Item>
              <Menu.Item 
                name="Core B" 
                active={selectedRoom === "Core B"}
                onClick={this.handleItemClick}
              >
                <Header style={{marginBottom: "0px"}} as="h5" content="Core B" />
                <p style={{color: "grey"}}>1 Whiteboard | 1 Table | 4 Chairs</p>
              </Menu.Item>
              <Menu.Item 
                name="Core C" 
                active={selectedRoom === "Core C"}
                onClick={this.handleItemClick}
              >
                <Header style={{marginBottom: "0px"}} as="h5" content="Core C" />
                <p style={{color: "grey"}}>1 Whiteboard | 1 Table | 4 Chairs</p>
              </Menu.Item>
              <Menu.Item 
                name="Core D" 
                active={selectedRoom === "Core D"}
                onClick={this.handleItemClick}
              >
                <Header style={{marginBottom: "0px"}} as="h5" content="Core D" />
                <p style={{color: "grey"}}>1 Whiteboard | 1 Table | 4 Chairs</p>
              </Menu.Item>
            </Menu>
          </Grid.Row>,
          <Grid.Row>
            <Menu fluid vertical style={{textAlign: "left"}}>
              <Menu.Item style={{backgroundColor: "lavender"}}>
                <Header 
                  as="h4" 
                  content="Project Rooms" 
                  style={{textAlign: "center", color: "blueviolet"}}
                />
              </Menu.Item>
              <Menu.Item 
                name="1South A" 
                active={selectedRoom === "1South A"}
                onClick={this.handleItemClick}
              >
                <Header style={{marginBottom: "0px"}} as="h5" content="1South Project Room A" />
                <p style={{color: "grey"}}>3 Tables | 10 Chairs | Movable Furniture</p>
              </Menu.Item>
              <Menu.Item 
                name="1South B" 
                active={selectedRoom === "1South B"}
                onClick={this.handleItemClick}
              >
                <Header style={{marginBottom: "0px"}} as="h5" content="1South Project Room B" />
                <p style={{color: "grey"}}>2 Tables | 10 Chairs | Movable Furniture</p>
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