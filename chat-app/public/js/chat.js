const socket = io()

// Elements
const $messageForm = document.querySelector('#message-form')
const $messageFormInput = $messageForm.querySelector('input')
const $messageFormButton = $messageForm.querySelector('button')
const $sendLocation = document.querySelector('#send-location')
const $messages = document.querySelector('#messages')

// template
const messageTemplate = document.querySelector('#message-template').innerHTML
const locationMessageTemplate = document.querySelector('#location-message-template').innerHTML

// options
const {username, room} = Qs.parse(location.search, { ignoreQueryPrefix: true})

socket.on('wlcmMsg', (msg) => {
  console.log(msg);
})
document.querySelector('#message-form').addEventListener('submit', (e) => {
  e.preventDefault();

$messageFormButton.setAttribute('disabled', 'disabled')
  // disable
  const message = document.querySelector('input').value
  socket.emit('sendMessage',message, (error) => {
    $messageFormButton.removeAttribute('disabled')
    $messageFormInput.value = ''
    $messageFormInput.focus()
    // enable
    if(error){
      return console.log(error);
    }
    console.log('The message was delivered',message);
  })

})
// here I am sending the messsage
socket.on('f',(msg) => {
  console.log(msg);
  const html = Mustache.render(messageTemplate, {
    messages: msg
  })
  $messages.insertAdjacentHTML('beforeend', html)
})


socket.on('welcome', (msg) => {
  console.log(msg);
})

document.querySelector('#send-location').addEventListener('click', () => {
if(!navigator.geolocation) {
  console.log('It is not supported');
}
$sendLocation.setAttribute('disabled','disabled')
// disable the send location button
navigator.geolocation.getCurrentPosition((pos) => {
socket.emit('sendLocation', {Latitude: pos.coords.latitude, Longitude: pos.coords.longitude}, () => {
  console.log('Yep it is working');

  // enabled the sendLocation
 $sendLocation.removeAttribute('disabled')
})
console.log(pos);

})
})


socket.on('a', (url) => {
  console.log(url);
  const html = Mustache.render(locationMessageTemplate, {
    url
  })
  $messages.insertAdjacentHTML('beforeend',html)
})

socket.emit('abc', {username, room})
