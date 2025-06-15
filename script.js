document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();
  document.getElementById("responseMsg").textContent = "Thanks! I'll get back to you soon.";
});
