import React, { Component } from 'react'
import { Segment, Header, Container, Grid, Form, Button, Input } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { DateInput, TimeInput } from 'semantic-ui-calendar-react'

const libraries = [
  { key: 'mudd', text: 'Mudd', value: 'mudd'},
  { key: 'main', text: 'Main', value: 'main'}
]

const addTimes = (nextHr, ampm, selectTimes) => {
  if (ampm === ' AM') {
    for (let i = nextHr; i <= 11; i++) {
      selectTimes.push(i.toString() + ':00' + ' AM')
      selectTimes.push(i + ':30' + ' AM')
    } 
    selectTimes.push('12:00 PM')
    selectTimes.push('12:30 PM')
    for (let j = 1; j <= 11; j++) {
      selectTimes.push(j + ':00' + ' PM')
      selectTimes.push(j + ':30' + ' PM')
    }
  } else {
    for (let i = nextHr; i <= 11; i++) {
      selectTimes.push(i + ':00' + ampm)
      selectTimes.push(i + ':30' + ampm)
    }
  }
}

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
    const timeFromOptions = () => {
      let currTime = moment().format('LT')
      let n = currTime.indexOf(':') + 1
      let currHour = parseInt(currTime.substring(0,n))
      let nextHour = (currHour === 12) ? 1 : currHour + 1
      let currMin = parseInt(currTime.substring(n)) 
      var selectTimes= []

      if (this.state.date === '') {
        selectTimes = []
      } 
      else if (this.state.date === moment().format('MM-DD-YYYY'))  {
        if (currTime.includes('PM')) {
          if (currMin < 30) 
            selectTimes.push(currHour + ":30 PM")
          addTimes(nextHour, ' PM', selectTimes)
        }
        else if (currTime.includes('AM')) {
          if (currMin < 30) 
            selectTimes.push(currHour + ":30 AM")
          addTimes(nextHour, ' AM', selectTimes)
        } 
      } 
      else {
        selectTimes.push('12:00 AM')
        selectTimes.push('12:30 AM')
        addTimes(1, ' AM', selectTimes)
      }
    
      let startTimeObjects = []
      for (let i = 0; i < selectTimes.length; i++) {
        startTimeObjects.push(
          { key: i.toString(), text: selectTimes[i], value: selectTimes[i]}
        )
      }
      return startTimeObjects
    }
    const fromTimes = timeFromOptions() 

    const timeToOptions = () => {
      const val = this.state.timeFrom
      if (this.state.timeFrom !== '') {
        let index = fromTimes.map((obj) => { return obj.text; }).indexOf(val);
        let start = parseInt(fromTimes[index].key) + 1
        let end = start + 6
        const selectTimes = []
        for (let i = start; i < end; i++) {
          selectTimes.push(fromTimes[i])
        }
        return selectTimes
      } else return null 
    }
    const toTimes = timeToOptions()
    console.log(toTimes)

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
                pickerWidth="12px;"
                label="Date"
                name="date"
                placeholder="MM/DD/YYYY"
                value={this.state.date}
                onChange={this.handleChange}
                dateFormat="MM-DD-YYYY"
                durati  on={0}
                closable
                minDate={moment().toDate()}
                hideMobileKeyboard
                popupPosition="bottom center"
              />
              <Form.Select 
                label="From: "
                name="timeFrom"
                options={fromTimes}
                value={this.state.timeFrom}
                onChange={this.handleChange}
              />
              <Form.Select 
                label="To: "
                name="timeTo"
                options={toTimes}
                value={this.state.timeTo}
                onChange={this.handleChange}
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

