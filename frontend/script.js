// Handle registration form submit
const form = document.getElementById("registerForm");
const messageEl = document.getElementById("formMessage");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  messageEl.textContent = "Submitting...";
  messageEl.style.color = "#dddddd";

  const formData = new FormData(form);
  const payload = {
    name: formData.get("name"),
    email: formData.get("email"),
    branch: formData.get("branch"),
  };

  try {
    const res = await fetch("/api/register", {

      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const data = await res.json();

    if (data.success) {
      messageEl.textContent = data.message;
      messageEl.style.color = "#4ade80"; // green
      form.reset();
    } else {
      messageEl.textContent = "Something went wrong, please try again.";
      messageEl.style.color = "#f97373";
    }
  } catch (err) {
    console.error(err);
    messageEl.textContent = "Cannot reach server. Is backend running?";
    messageEl.style.color = "#f97373";
  }
});