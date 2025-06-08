document.getElementById("medicine-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("med-name").value;
  const time = document.getElementById("med-time").value;
  addReminder(name, time);
});

function addReminder(name, time) {
  const list = document.getElementById("reminder-list");

  const li = document.createElement("li");
  li.textContent = `${name} at ${time}`;
  list.appendChild(li);

  // Save and notify
  const reminderTime = new Date();
  const [hours, minutes] = time.split(":");
  reminderTime.setHours(hours);
  reminderTime.setMinutes(minutes);
  reminderTime.setSeconds(0);

  const delay = reminderTime.getTime() - Date.now();
  if (delay > 0) {
    setTimeout(() => {
      notify(`Time to take your medicine: ${name}`);
    }, delay);
  } else {
    alert("Time is already past!");
  }
}

// Notification Permission and Logic
function notify(message) {
  if (Notification.permission === "granted") {
    new Notification(message);
  } else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(permission => {
      if (permission === "granted") {
        new Notification(message);
      }
    });
  }
}