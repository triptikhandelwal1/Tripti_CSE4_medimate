
function scheduleReminder() {
  const time = document.getElementById('reminder-time').value;
  const message = document.getElementById('reminder-msg').value;
  fetch('http://localhost:5001/add_reminder', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ time, message })
  }).then(res => res.json()).then(data => {
    alert('Reminder set!');
  });
}
