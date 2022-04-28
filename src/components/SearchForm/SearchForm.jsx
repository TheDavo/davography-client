/*
  IMAGES SHOULD BE SEARCHABLE BY

  Participant Number
    Type: Comma separated numbers
  Event Genre
    Type: Enum String
  Event Organizer
    Type: Multi-select String
  Event Location
    Type: String
  Date From
  Date To
  Tags
    Type: Comma separated strings

*/

import {useState} from 'react'
import "./SearchForm.css"

function SearchForm() {

  const currentDate = (new Date()).toISOString().split('T')[0];

  const [participantNumbers, setParticipantNumbers] = useState('');
  const [eventGenre, setEventGenre] = useState('');
  const [eventOrganizer, setEventOrganizer] = useState('');
  const [dateFrom, setDateFrom] = useState(null);
  const [dateTo, setDateTo] = useState(currentDate);

  const handleParticipantNumbersChange = (event) => {
    setParticipantNumbers(event.target.value);
  }

  const handleEventGenreChange = (event) => {
    setEventGenre(event.target.value);
  }

  const handleEventOrganizerChange = (event) => {
    setEventOrganizer(event.target.value);
  }

  const handleDateFromChange = (event) => {
    setDateFrom(event.target.value);
  }

  const handleDateToChange = (event) => {
    setDateTo(event.target.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const participants = [...participantNumbers.split(',')]
      .map(x => parseInt(x));
    for(let participant of participants) {
      console.log(participant);
    }
  }

  return (
    <>
      <form className="searchForm" onSubmit={handleSubmit}>
        <label htmlFor="participantNumbers">Participant Numbers:</label>
          <input type="text" 
          name="participantNumbers"
          value={participantNumbers}
          onChange={handleParticipantNumbersChange}
          placeholder="Ex: 123, 456, 789" />
          
        <label htmlFor="eventGenre">Event Genre:</label>
            <select name="eventGenre" 
              onChange={handleEventGenreChange}
              value={eventGenre}>
                <option value="autocross">Autocross</option>
                <option value="drifting">Drifting</option>
                <option value="rallycross">Rallycross</option>
            </select>
        <label htmlFor="eventOrganizer">Event Organizer:</label>
          <select name="eventOrganizer" 
            onChange={handleEventOrganizerChange}
            value={eventOrganizer}>
              <option value="sccnh">SCCNH</option>
              <option value="nedco">North East Drift Coalition</option>
          </select>
        <label htmlFor="dateFrom">Date From:</label>
        <input type="date"
          onChange={handleDateFromChange}
          max={dateTo}/>

        <label htmlFor="dateTo">Date To:</label>
          <input type="date"
          onChange={handleDateToChange}
          min={dateFrom}
          value={dateTo}
          max={currentDate}/>
        <input type="submit" value="Find Your Moment"/>
      </form>
    </>
  )
}

export default SearchForm