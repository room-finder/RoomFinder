import React, { Component } from 'react'
import { Segment, Header, Container, Grid, Form, Button } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { DateInput, TimeInput } from 'semantic-ui-calendar-react'
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
      timeFrom: '',
      timeTo: ''
    }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (e, {name, value}) => {
    this.setState({ [name]: value })
  }

  updateAppData = () => {
    var criteria = {
     library: this.state.library,
     date: this.state.date,
     timeFrom: this.state.timeFrom,
     timeTo: this.state.timeTo
    }
    this.props.updateApp(criteria)
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
          <Segment>
          <Grid.Row>
            <Header
              as="h3"
              content="Pick a Library, Date, and Time"
            />
          </Grid.Row>
          <br/>
          <Grid.Row>
            <Form size="small" onSubmit={this.handleSubmit}>
              <Form.Select 
                label="Library"
                options={libraries}
                placeholder="Library"
                name="library"
                value={this.state.library}
                onChange={this.handleChange}
              />
              <DateInput
                label="Date"
                name="date"
                placeholder="MM/DD/YYYY"
                value={this.state.date}
                onChange={this.handleChange}
                popupPosition="bottom center"
                duration="0"
                hideMobileKeyboard
                closable
                dateFormat="MM-DD-YYYY"
                minDate={moment().toDate()}
              />
              <TimeInput 
                label="From:"
                name="timeFrom"
                placeholder="00:00"
                value={this.state.timeFrom}
                onChange={this.handleChange}
                duration="0"
                closable
                popupPosition="bottom center"
                timeFormat="AMPM"
                hideMobileKeyboard
              />
              <TimeInput 
                label="To:"
                name="timeTo"
                placeholder="00:00"
                value={this.state.timeTo}
                onChange={this.handleChange}
                duration="0"
                closable
                popupPosition="bottom center"
                timeFormat="AMPM"
                hideMobileKeyboard
              />
              <Link to="/rooms">
                <Button 
                  onClick={this.updateAppData}
                  content="Next" 
                  style={{ backgroundColor: "blueviolet", color: "white" }}
                />
              </Link>
            </Form>
          </Grid.Row>
          </Segment>
        </Grid>
      </Container>
    ])
  }
}

export default CriteriaPage

