document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("medicine-form");
  const list = document.getElementById("reminder-list");
  const sound = document.getElementById("alert-sound");

  let reminders = JSON.parse(localStorage.getItem("reminders")) || [];

  function displayReminders() {
    list.innerHTML = "";
    reminders.sort((a, b) => a.time.localeCompare(b.time));

    reminders.forEach((r, index) => {
      const li = document.createElement("li");
      li.innerHTML = `
        ${r.name} at ${r.time} ${r.repeat ? "🔁" : ""}
        <button class="delete-btn" data-index="${index}">✖</button>
      `;
      list.appendChild(li);
    });
  }

  function scheduleReminder({ name, time, repeat }) {
    const [h, m] = time.split(":").map(Number);
    const now = new Date();
    const reminderTime = new Date();
    reminderTime.setHours(h, m, 0, 0);

    let delay = reminderTime - now;
    if (delay < 0) delay += 86400000; // schedule for next day

    setTimeout(() => {
      notify(name);
      if (repeat) scheduleReminder({ name, time, repeat });
    }, delay);
  }

  function notify(name) {
    sound.play();
    if (Notification.permission === "granted") {
      new Notification(`💊 Time to take your medicine: ${name}`);
    }
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const name = document.getElementById("med-name").value;
    const time = document.getElementById("med-time").value;
    const repeat = document.getElementById("daily-repeat").checked;

    const reminder = { name, time, repeat };
    reminders.push(reminder);
    localStorage.setItem("reminders", JSON.stringify(reminders));

    scheduleReminder(reminder);
    displayReminders();
    form.reset();
  });

  list.addEventListener("click", (e) => {
    if (e.target.classList.contains("delete-btn")) {
      const index = e.target.getAttribute("data-index");
      reminders.splice(index, 1);
      localStorage.setItem("reminders", JSON.stringify(reminders));
      displayReminders();
    }
  });

  // Request notification permission
  if (Notification.permission !== "granted") {
    Notification.requestPermission();
  }

  // Initialize
  reminders.forEach(scheduleReminder);
  displayReminders();
});