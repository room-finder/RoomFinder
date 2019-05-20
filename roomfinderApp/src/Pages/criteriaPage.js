import React, { Component } from 'react'
import { Segment, Header, Container, Grid, Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { DateInput } from 'semantic-ui-calendar-react'
import moment from 'moment'


const libraries = [
  { key: 'mudd', text: 'Mudd', value: 'mudd'},
  { key: 'main', text: 'Main', value: 'main'}
]

class CriteriaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      library: '',
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e, {name, value}) => {
    this.setState({ [name]: value })
  }

  updateAppData = () => {
    const library = this.state.library
    this.props.updateApp(library)
  }

  render () {
    return ([
      <Segment textAlign='center' style={{borderRadius: '0px'}}>
        <Header 
          as="h2"
          style={{ color: "blueviolet" }}
          content="RoomFinder" />
      </Segment>,
      <Container style={{marginTop: "30px"}}>
        <Grid centered>
          <Grid.Row>
            <Header
              as="h2"
              content="Pick a Library and Date"
              inverted
            />
          </Grid.Row>
          <Grid.Row>
            <Form inverted onSubmit={this.handleSubmit}>
              <Form.Select 
                options={libraries}
                placeholder="Library"
                name="library"
                value={this.state.library}
                onChange={this.handleChange}
              />
              <DateInput
                inline
                name="date"
                placeholder="Date"
                value={this.state.date}
                onChange={this.handleChange}
                popupPosition="bottom center"
                duration="0"
                hideMobileKeyboard
                closable
                dateFormat="MM-DD-YYYY"
                minDate={moment().toDate()}
              />
              <Link to="/rooms">
                <Button 
                  onClick={this.updateAppData}
                  content="Next" 
                  style={{ backgroundColor: "lavender", color: "blueviolet" }}
                />
              </Link>
            </Form>
          </Grid.Row>
        </Grid>
      </Container>
    ])
  }
}

export default CriteriaPage