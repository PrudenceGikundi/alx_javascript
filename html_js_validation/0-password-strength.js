function validatePassword() {
  const password = document.getElementById('password').value;
  const error = document.getElementById('error');

  // Regular expression to check for all required conditions
  const conditionss = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

  // Check if password matches the regular expression
  if (!password.match(conditionss)) {
    if (password.length < 8) {
      error.textContent = "Password must be at least 8 characters long.";
    } else if (!/[A-Z]/.test(password)) {
      error.textContent = "Password must contain at least one uppercase letter.";
    } else if (!/[a-z]/.test(password)) {
      error.textContent = "Password must contain at least one lowercase letter.";
    } else if (!/[0-9]/.test(password)) {
      error.textContent = "Password must contain at least one numeric digit.";
    } else if (!/[@$!%*?&]/.test(password)) {
      error.textContent = "Password must contain at least one special character (e.g., !@#$%^&*).";
    }
    return false;
  }

  // If password matches the regular expression, clear the error message and return true
  error.textContent = "";
  return true;
}

// Add event listener to form submission
document.getElementById('passwordForm').addEventListener('submit', function(event) {
  if (!validatePassword()) {
    event.preventDefault();
  }
});