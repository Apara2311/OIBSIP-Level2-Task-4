// Track if current mode is login or register
let isLogin = true;

// Toggle between Login and Register modes
document.getElementById("toggleForm").addEventListener("click", function(e) {
  e.preventDefault();
  
  // Switch mode
  isLogin = !isLogin;

  // Update button and link text
  document.getElementById("submitBtn").innerText = isLogin ? "Login" : "Register";
  this.innerText = isLogin ? "Create an account" : "Login instead";
});

// Handle submit button click
document.getElementById("submitBtn").addEventListener("click", function() {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  // Validate inputs
  if (!username || !password) {
    alert("Please fill in all fields.");
    return;
  }

  if (isLogin) {
    // Handle login
    const storedUser = localStorage.getItem(username);

    if (storedUser && JSON.parse(storedUser).password === password) {
      // Store current session
      localStorage.setItem("currentUser", username);

      // Redirect to success page
      window.location.href = "success.html";
    } else {
      alert("Invalid credentials. Try again or register.");
    }
  } else {
    // Handle registration
    if (localStorage.getItem(username)) {
      alert("Username already exists.");
    } else {
      // Save new user
      localStorage.setItem(username, JSON.stringify({ password }));

      alert("Registration successful! Please login.");
      
      // Switch to login mode
      isLogin = true;
      document.getElementById("submitBtn").innerText = "Login";
      document.getElementById("toggleForm").innerText = "Create an account";
    }
  }
});
