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
      <h1>Find Your Moment</h1>
      <form className="searchForm" onSubmit={handleSubmit}>
        <label htmlFor="participantNumbers">
          <p>Participant Numbers:</p>
          <input type="text" 
          name="participantNumbers"
          value={participantNumbers}
          onChange={handleParticipantNumbersChange}
          placeholder="Ex: 123, 456, 789" />
        </label>

        <label htmlFor="eventGenre">
          <p>Event Genre:</p>
            <select name="eventGenre" 
              onChange={handleEventGenreChange}
              value={eventGenre}>
                <option value="autocross">Autocross</option>
                <option value="drifting">Drifting</option>
                <option value="rallycross">Rallycross</option>
            </select>
        </label>

        <label htmlFor="eventOrganizer">
          <p>Event Organizer:</p>
            <select name="eventOrganizer" 
              onChange={handleEventOrganizerChange}
              value={eventOrganizer}>
                <option value="sccnh">SCCNH</option>
                <option value="nedco">North East Drift Coalition</option>
            </select>
        </label>


          <label htmlFor="dateFrom">
            <p>Date From:</p>
            <input type="date"
            onChange={handleDateFromChange}
            max={dateTo}/>
          </label>

          <label htmlFor="dateTo">
            <p>Date To:</p>
            <input type="date"
            onChange={handleDateToChange}
            min={dateFrom}
            value={dateTo}
            max={currentDate}/>
          </label>


        <input type="submit" />
      </form>
    </>
  )
}

export default SearchForm