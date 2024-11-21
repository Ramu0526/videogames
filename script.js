document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error');

    const users = JSON.parse(localStorage.getItem('users')) || [];

    const userExists = users.some(user => user.email === email && user.password === password);

    if (!userExists) {
        errorDiv.textContent = 'Correo electrónico o contraseña incorrectos. Por favor, intenta nuevamente o regístrate.';
    } else {
        errorDiv.textContent = '';
        alert('Inicio de sesión exitoso');
        window.location.href = 'eleccion.html';
    }
});

document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const registerErrorDiv = document.getElementById('registerError');

    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        registerErrorDiv.textContent = 'Por favor, completa todos los campos.';
        return;
    }

    if (password !== confirmPassword) {
        registerErrorDiv.textContent = 'Las contraseñas no coinciden.';
        return;
    }
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        registerErrorDiv.textContent = 'El correo electrónico ya está registrado.';
        return;
    }

    users.push({ firstName, lastName, email, password });
    localStorage.setItem('users', JSON.stringify(users));
    registerErrorDiv.textContent = '';
    alert('Registro exitoso. Ahora puedes iniciar sesión.');
    window.location.href = 'index.html';
});