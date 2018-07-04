export const checkDistance = value => {
  const numeric = parseFloat(value)
  if (isNaN(numeric)) {
    return false
  }
  return numeric > 0
}

export const checkDurationValue = value => (
  value === '' || !(isNaN(parseInt(value)))
)

export const checkTotalDuration = (h, m, s) => {
  if (!checkDurationValue(h) ||
    !checkDurationValue(m) ||
    !checkDurationValue(s)) {
    return false
  }
  const total = h + m + s
  return total > 0
}

export const durationValueError = type => (
  `${type} must be a whole number.`
)
