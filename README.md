# 🔐 Simple Login & Registration System
A responsive and easy-to-use web-based authentication system using HTML, CSS, and Vanilla JavaScript, allowing users to register, log in, and access a secured page with their username displayed.<br>
# 🌟 Features<br>
🔄 Toggle between Login and Register with a single button.
<br>
🔐 Securely stores user credentials in browser's localStorage.
<br>
🧠 Remembers and displays the currently logged-in user on the secured page.
<br>
❌ Prevents registration of duplicate usernames.
<br>
✅ Simple client-side validation (non-empty username & password).
<br>
💡 Clean UI with modern CSS and form feedback.
<br>
# 📁 File Structure<br>
**login-auth-system/**<br>
│<br>
├── **index.html**<br>
│   ├── Loads the login and registration form layout<br>
│   ├── Contains inputs for username and password<br>
│   ├── Contains a dynamic button (Login/Register)<br>
│   └── Links to style.css for styling and script.js for functionality<br>
│<br>
├── **style.css**<br>
│   ├── Styles the form container and input fields<br>
│   ├── Adds responsive layout and modern UI design<br>
│   └── Includes hover effects for buttons and links<br>
│<br>
├── **script.js**<br>
│   ├── Handles toggle between login and register modes<br>
│   ├── Validates input fields for username and password<br>
│   ├── Stores user data in localStorage (registration)<br>
│   ├── Authenticates user data from localStorage (login)<br>
│   ├── Saves the currently logged-in user to localStorage<br>
│   └── Redirects to success.html on successful login<br>
│<br>
└── success.html<br>
    ├── Displays a welcome message after successful login<br>
    ├── Shows the current logged-in username dynamicall<br>
    └── Redirects to index.html if accessed without logging in




    
