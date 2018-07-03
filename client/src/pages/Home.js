import React from 'react'
import Calendar from 'react-calendar'
import CalendarViewSelect from '../components/CalendarViewSelect'
import Modal from '../components/Modal'
import NewRunEntry from '../components/NewRunEntry'
import { MONTH } from '../constants'

const Home = ({
  date,
  calendarView,
  modal,
  changeView,
  changeDate,
  closeModal
}) => (
  <div style={homeStyle}>
    <CalendarViewSelect
      selected={calendarView}
      handler={changeView} />
    {
      calendarView === MONTH
        ? <Calendar
          className='calendar'
          tileClassName='calendar-tile'
          showNeighboringMonth={false}
          value={date}
          onChange={changeDate} />
        : 'Week View'
    }
    {
      modal &&
      <Modal
        handleClose={closeModal}>
        <NewRunEntry
          runDate={date} />
      </Modal>

    }
  </div>
)

const homeStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

export default Home
