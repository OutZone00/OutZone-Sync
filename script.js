document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('error-message');

    loginForm.addEventListener('submit', (event) => {
        // Prevent the form from submitting the default way
        event.preventDefault();

        // Get user input
        const username = loginForm.username.value.trim();
        const password = loginForm.password.value.trim();

        // --- IMPORTANT ---
        // In a real application, you would send these values to a server
        // for validation. Never store actual passwords in frontend code.
        const correctUsername = 'admin';
        const correctPassword = 'password123';

        if (username === correctUsername && password === correctPassword) {
            // Successful login
            errorMessage.textContent = '';
            alert('Login successful! Redirecting to the admin dashboard...');
            // window.location.href = '/dashboard.html'; // Uncomment to redirect
        } else {
            // Failed login
            errorMessage.textContent = 'Invalid username or password.';
            
            // Add shake animation to the form
            loginForm.classList.add('shake');
            
            // Remove the shake class after the animation ends
            setTimeout(() => {
                loginForm.classList.remove('shake');
            }, 500); // Duration matches the CSS animation
        }
    });
});