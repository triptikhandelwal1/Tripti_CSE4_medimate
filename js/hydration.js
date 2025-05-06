
function hydrationReminder() {
  const times = ['09:00', '12:00', '15:00', '18:00', '21:00'];
  times.forEach(t => {
    fetch('http://localhost:5001/add_reminder', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ time: t, message: 'Time to hydrate!' })
    });
  });
  alert('Hydration reminders scheduled!');
}
