
/**
    * formats elapsed time in milliseconds to 00:00:00.00 format.
    * should return 00:00:00 for invalid input,
    * should return 00:00.00 format if elapsed time is less than 1 hour
    * @param {Number} elapsedMilliseconds - elapsed time in milliseconds
    * @returns {String} = formatted string representing elapsed time.
**/
module.exports = function formatElapsedTime (elapsedMilliseconds) {
  if (typeof elapsedMilliseconds !== 'number') {
    return '00:00:00'
  }
  const elapsedTime = Math.abs(elapsedMilliseconds)
  let hours = 0
  let seconds = ((elapsedTime / 1000) % 60).toFixed(2)
  if (+seconds < 10) {
    seconds = '0' + seconds
  }
  let minutes = Math.floor((elapsedTime / 1000) / 60)
  if (minutes > 59) {
    hours = Math.floor((minutes / 60))
    minutes = minutes % 60
  }
  if (minutes < 10) {
    minutes = '0' + minutes
  }
  if (!hours) {
    return minutes + ':' + seconds
  }
  if (hours < 10) {
    hours = '0' + hours
  }
  return hours + ':' + minutes + ':' + seconds
}
