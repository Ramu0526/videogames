// Función para manejar el inicio de sesión
document.getElementById('loginForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const errorDiv = document.getElementById('error');

    // Obtener usuarios del localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Comprobar si el usuario existe
    const userExists = users.some(user => user.email === email && user.password === password);

    if (!userExists) {
        errorDiv.textContent = 'Correo electrónico o contraseña incorrectos. Por favor, intenta nuevamente o regístrate.';
    } else {
        errorDiv.textContent = ''; // Limpiar el mensaje de error
        alert('Inicio de sesión exitoso'); // Simulación de inicio de sesión exitoso
        window.location.href = 'eleccion.html'; // Redirigir a la página de elección
    }
});

// Función para manejar el registro
document.getElementById('registerForm')?.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario

    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    const registerErrorDiv = document.getElementById('registerError');

    // Validar que todos los campos estén llenos
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        registerErrorDiv.textContent = 'Por favor, completa todos los campos.';
        return;
    }

    // Validar que las contraseñas coincidan
    if (password !== confirmPassword) {
        registerErrorDiv.textContent = 'Las contraseñas no coinciden.';
        return;
    }

    // Obtener usuarios del localStorage
    const users = JSON.parse(localStorage.getItem('users')) || [];

    // Comprobar si el usuario ya existe
    const userExists = users.some(user => user.email === email);
    if (userExists) {
        registerErrorDiv.textContent = 'El correo electrónico ya está registrado.';
        return;
    }

    // Agregar el nuevo usuario al array
    users.push({ firstName, lastName, email, password });
    localStorage.setItem('users', JSON.stringify(users)); // Guardar usuarios en localStorage
    registerErrorDiv.textContent = ''; // Limpiar el mensaje de error
    alert('Registro exitoso. Ahora puedes iniciar sesión.'); // Mensaje de éxito
    window.location.href = 'index.html'; // Redirigir a la página de inicio de sesión
});