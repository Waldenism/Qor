import moment from 'moment'
import axios from 'axios'

// returns timestamp for beginning of month given a date
const getStartOfMonth = dateValue => {
  const monthStart = moment(dateValue)
  .startOf('month')
  .format()
  return monthStart
}

// returns timestamp for end of month given a date
export const getEndOfMonth = dateValue => {
  const monthEnd = moment(dateValue)
  .endOf('month')
  .format()
  return monthEnd
}

export const loadMonthlyWorkouts = (userId, dateValue) => {
  return new Promise((resolve, reject) => {
    const start = getStartOfMonth(dateValue)
    const end = getEndOfMonth(dateValue)
    axios.get(`http://localhost:3001/api/allWorkoutsRange?id=${userId}
      &startDate=${start}
      &endDate=${end}`)
    .then(response => {
      resolve(response.data)
    })
    .catch(err => reject(err))
  })
}
