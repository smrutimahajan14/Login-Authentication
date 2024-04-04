const users = [];
let currentUser = null;

// Render function
function render(component) {
    document.getElementById('content').innerHTML = component;
}

// Registration function
function register() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;
    
    

    if (password !== confirmPassword) {
        alert('Passwords do not match.');
        return;
    }

    const user = {
        username,
        password
    };

    users.push(user);
    alert('Registration successful. Please log in.');
    render('<h2>Login</h2><br/><input type="text" id="login-username" placeholder="Username"/><br/><input type="password" id="login-password" placeholder="Password"/><br/><button onclick="login()">Login</button>');
}

// Login function
function login() {
    const username = document.getElementById('login-username').value;
    const password = document.getElementById('login-password').value;
    
    

    for (let user of users) {
        if (user.username === username && user.password === password) {
            currentUser = user;
            alert('Login successful.');
            render('<h2>Welcome, ' + currentUser.username + '!</h2><br/><button onclick="restrictedPage()">Access Secured Page</button>');
            return;
        }
    }

    alert('Invalid username or password.');
}

// Accessing a restricted page
function restrictedPage() {
    if (currentUser === null) {
        alert('Please log in to access the restricted page.');
    } else {
        render('<h2>Restricted Page</h2><br/><p>Welcome to the restricted page, ' + currentUser.username + '!</p>');
    }
}

// Initial rendering
render('<h2>Registration</h2><br/><input type="text" id="username" placeholder="Username"/><br/><input type="password" id="password" placeholder="Password"/><br/><input type="password" id="confirm-password" placeholder="Confirm Password"/><br/><button onclick="register()">Register</button>');