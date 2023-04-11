const date = document.querySelector('.date')
const time = document.querySelector('.time')
const moths = [
    'January',
     'February',
     'March',
     'April',
      'May', 
      'June', 
      'July', 
      'August', 
      'September', 
      'October', 
      'November', 
      'December'
]

setInterval(()=> {
    const localTime = new Date()
const day = localTime.getDate() < 10 ? '0' + localTime.getDate() : localTime.getDate()
const moth = localTime.getMonth()
const year = localTime.getFullYear()
const hour = localTime.getHours() < 10 ? '0' + localTime.getHours() : localTime.getHours()
const minute = localTime.getMinutes() < 10 ? '0' + localTime.getMinutes() : localTime.getMinutes()
const second = localTime.getSeconds() < 10 ? '0' + localTime.getSeconds() : localTime.getSeconds()

date.innerHTML = `${day}, ${moths[moth]}, ${year}`

time.innerHTML = `${hour}:${minute}:${second}`
}, 1000)