let intake = localStorage.getItem("intakeToday") || 0;
const goal = 8;

document.getElementById("count").innerText = `${intake}/${goal} glasses`;
showRandomFact();

function addGlass() {
  intake++;
  if (intake > goal) intake = goal;
  document.getElementById("count").innerText = `${intake}/${goal} glasses`;
  localStorage.setItem("intakeToday", intake);
}

function notifyUser() {
  if (Notification.permission === "granted") {
    new Notification("Time to drink water!", {
      body: "Hydration is key to good health.",
      icon: "https://cdn-icons-png.flaticon.com/512/728/728093.png"
    });
    document.getElementById("notifySound").play();
  }
}

function setReminder() {
  if (Notification.permission !== "granted") {
    Notification.requestPermission().then(perm => {
      if (perm === "granted") {
        scheduleReminder();
      }
    });
  } else {
    scheduleReminder();
  }
}

function scheduleReminder() {
  setInterval(() => {
    notifyUser();
    showRandomFact();
  }, 60 * 60 * 1000); // every 1 hour
  alert("Reminder set every hour!");
}

function showRandomFact() {
  const facts = [
    "Your brain is 75% water.",
    "Water boosts energy and reduces fatigue.",
    "Drinking water helps with weight loss.",
    "Water helps regulate body temperature.",
    "Hydration improves skin health."
  ];
  const fact = facts[Math.floor(Math.random() * facts.length)];
  document.getElementById("healthFact").innerText = fact;
}