let activities = [
  "Go for a run",
  "Read a book",
  "Watch a film",
  "Cook a new recipe",
  "Try a new hobby",
];

function selectRandomActivity() {
  const randomIndex = Math.floor(Math.random() * activities.length);
  document.getElementById("activity").innerText = activities[randomIndex];
}

function addActivity() {
  const newActivity = document.getElementById("newActivity").value.trim();
  if (newActivity) {
    activities.push(newActivity);
    document.getElementById("newActivity").value = "";
    alert("Activity added!");
  }
}
