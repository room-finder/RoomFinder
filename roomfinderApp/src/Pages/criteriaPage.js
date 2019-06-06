import React, { Component } from 'react'
import { Segment, Header, Container, Grid, Form, Button, Message } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { DateInput } from 'semantic-ui-calendar-react'

const libraries = [
  { key: 'mudd', text: 'Mudd', value: 'mudd'},
  { key: 'main', text: 'Main', value: 'main'}
]

/*** Code for Time Input *******************************/
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
/******************************************************/

class CriteriaPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      library: '',
      timeFrom: '',
      timeTo: '',
      formError: false,
      people: ''
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e, {name, value}) => {
    this.setState({ [name]: value })
  }

  triggerError = () => {
    if (this.state.library === '' || this.state.date === '' 
    || this.state.timeFrom === '' || this.state.timeTo === '') {
      return true 
    }
    return false
  }

  handleSubmit = () => {
    this.updateAppData()
    if (this.triggerError()) {
      this.setState({ formError: true})
    }
    else {
      this.setState({ formError: false })
    }
  }

  updateAppData = () => {
    var criteria = {
     library: this.state.library,
     date: this.state.date,
     timeFrom: this.state.timeFrom,
     timeTo: this.state.timeTo,
     people: this.state.people
    }
    this.props.updateApp(criteria)
  }

  render () {
    const FormError = () => {
      if (this.state.formError) {
        return (
          <Message 
            visible 
            error
            header="Please complete all fields"
          />
        )
      } else return null
    }

    const SubmitButton = () => {
      if (!this.triggerError()) {
        return (
          <Link to="/rooms">
              <Button 
                onClick={this.handleSubmit}
                content="Next" 
                style={{ backgroundColor: "blueviolet", color: "white" }}
              />
          </Link>
        )
      }
      else {
        return (
          <Button 
            content="Next" 
            style={{ backgroundColor: "blueviolet", color: "white" }}
          />
        )
      }
    }

    /*** Code for Time Input ********************************************************************/
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
      if (this.state.timeFrom !== '') {
        let index = fromTimes.map((obj) => { return obj.value; }).indexOf(this.state.timeFrom);
        const selectTimes = []
        let eleven30 = { key: "49", text: "11:30 PM", value: "11:30 PM"}
        let midnight = { key: "50", text: "12:00 AM", value: "12:00 AM"}
        if (fromTimes[index].text === "11:00 PM") {
          selectTimes.push(eleven30, midnight)
        } 
        else if (fromTimes[index].text === "11:30 PM") {
          selectTimes.push(midnight)
        }
        else { 
          let start = parseInt(fromTimes[index].key) + 1
          if (parseInt(fromTimes[index].text) >=  9 && fromTimes[index].text.includes("PM")
          && parseInt(fromTimes[index].text) !== 12) {
            let n = fromTimes.length - 1
            let end = parseInt(fromTimes[n].key)
            for(let i = start; i < end; i++) {
              selectTimes.push(fromTimes[i])
            }
            selectTimes.push(eleven30, midnight)
          }
          else {
            let end = start + 6
            for(let i = start; i < end; i++) {
              selectTimes.push(fromTimes[i])
            }
          }
        }
        return selectTimes
      } else return null
    }
    const toTimes = timeToOptions()
    /************************************************************************************/

    return ([
      <Segment style={{borderRadius: '0px', height: "60px"}}>
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
      <Container style={{marginTop: "30px"}}>
        <Grid centered>
          <Segment>
          <Grid.Row>
            <Header
              as="h3"
              content="Pick a Library, Date, and Time"
              style={{marginBottom: "0px"}}
            />
            <i style={{marginTop: "0px", color: "mediumpurple"}}>
              Note:  Max time window = 3 hours.
            </i>
          </Grid.Row>
          <br/>
          <Grid.Row>
            <Form size="small" onSubmit={this.handleSubmit}>
              <FormError /> 
              <Form.Select 
                label="Library"
                options={libraries}
                name="library"
                placeholder="Library"
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
                duration={0}
                closable
                minDate={moment().toDate()}
                hideMobileKeyboard
                popupPosition='bottom center'
              />
              <Form.Select 
                placeholder="0:00"
                label="From: "
                name="timeFrom"
                options={fromTimes}
                value={this.state.timeFrom}
                onChange={this.handleChange}
              />
              <Form.Select 
                placeholder="0:00"
                label="To: "
                name="timeTo"
                options={toTimes}
                value={this.state.timeTo}
                onChange={this.handleChange}
              />
              <Form.Input 
                placeholder="0"
                label="Number of People"
                name="people"
                value={this.state.people}
                onChange={this.handleChange}
                type="number"
              />
              <SubmitButton />
            </Form>
          </Grid.Row>
          </Segment>
        </Grid>
      </Container>
    ])
  }
}

export default CriteriaPage