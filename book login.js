document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('login-form'); 

    if (loginForm) {
        loginForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            alert('Login successful!');
            window.location.href = 'index.html'; 
        });
    }
});

document.getElementById("login-form").addEventListener("submit", function (e) {
    e.preventDefault(); // stop form submission

    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();
    const errorMessage = document.getElementById("error-message");

    errorMessage.style.display = "none";
    errorMessage.innerHTML = "";

    // Email regex pattern
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Validation checks
    if (!emailPattern.test(email)) {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Please enter a valid email address.";
        return;
    }

    if (password.length < 6) {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Password must be at least 6 characters long.";
        return;
    }

    // Optional: stronger password rule
    const strongPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
    if (!strongPassword.test(password)) {
        errorMessage.style.display = "block";
        errorMessage.innerHTML = "Password must contain letters and numbers.";
        return;
    }

    // If all validations pass
    alert("Login successful!");
    
    // Submit form manually
    this.submit();
});