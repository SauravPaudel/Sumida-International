const scriptURL = 'https://script.google.com/macros/s/AKfycbz-7APugn8D_HH_g7RSvZLzeIh4uns9rsK4m8BXT82Z6JTEwxeUwuNIS7aC31ojezAK/exec'

const form = document.forms['contact-form']

document.getElementById("submit").addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
  .then(response => alert("Thank you! your form is submitted successfully." ))
  .then(() => { window.location.reload(); })
  .catch(error => console.error('Error!', error.message))
})