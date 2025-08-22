// homepage.js

function goToBranchPage() {
  const selected = document.getElementById("branch-select").value;
  if (selected) {
    window.location.href = "aiml.html";
  }
}
// Set greeting based on time
const hour = new Date().getHours();
let message = "Welcome";

if (hour < 12) {
  message = "Good Morning";
} else if (hour < 17) {
  message = "Good Afternoon";
} else {
  message = "Good Evening";
}

document.getElementById("greetingText").innerText = `${message}, Abhas! 👋`;
