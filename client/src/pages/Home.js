import React from 'react'
import Calendar from 'react-calendar'
import CalendarViewSelect from '../components/CalendarViewSelect'
import Modal from '../components/Modal'
import NewRunEntry from '../components/NewRunEntry'
import CalendarTile from '../components/CalendarTile'
import moment from 'moment'
import { MONTH } from '../constants'

const Home = ({
  date,
  activeStartDate,
  calendarView,
  modal,
  changeView,
  changeDate,
  changeMonth,
  closeModal,
  saveWorkout,
  workouts
}) => {
  console.log(workouts)
  return (
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
            tileContent={({date}) => <CalendarTile values={workouts.filter(w => {
              return moment(w.workout_date).isSame(moment(date), 'day')
            })}/>}
            onChange={changeDate}
            onActiveDateChange={changeMonth}
            activeStartDate={activeStartDate} />
          : 'Week View'
      }
      {
        modal &&
        <Modal
          handleClose={closeModal}>
          <NewRunEntry
            runDate={date}
            handler={saveWorkout} />
        </Modal>

      }
    </div>
  )
}

const homeStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center'
}

export default Home
