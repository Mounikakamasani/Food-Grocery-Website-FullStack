document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Login Successful');
});

document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password === confirmPassword) {
        alert('Sign Up Successful');
    } else {
        alert('Passwords do not match');
    }
});
