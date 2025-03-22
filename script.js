document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();
  
    // Simple validation
    if (name === "" || email === "" || message === "") {
      alert("Please fill out all fields.");
      return;
    }
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    // If validation passes
    alert("Form submitted successfully!");
    document.getElementById("contactForm").reset(); // Clear the form
  });
  
  // Function to validate email
  function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  }const themeToggle = document.getElementById("themeToggle");

  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    if (document.body.classList.contains("dark-mode")) {
      themeToggle.textContent = "Toggle Light Mode";
    } else {
      themeToggle.textContent = "Toggle Dark Mode";
    }
  });
  document.getElementById("newsletterForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
  
    const email = this.querySelector("input[type='email']").value.trim();
  
    if (email === "") {
      alert("Please enter your email.");
      return;
    }
  
    if (!validateEmail(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    alert("Thank you for subscribing!");
    this.reset(); // Clear the form
  });