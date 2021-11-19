const alias = document.getElementById('name');
const email = document.getElementById('mail');
const pwd = document.getElementById('pass');
const button = document.getElementById('submit');

button.addEventListener ('click', () => {
const nombre = alias.value
const mail = email.value;
const password = pass.value;

const bodyObjects = {
    nombre,
    mail,
    password
}

if(nombre && mail && password) {
    fetch("http://localhost:1000/auth/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(bodyObjects)
    }).then ((res) => {
        return res.json;
    }).then ((response) => {
        if (!response.error) {
            localStorage.setItem('token', response.token);
            alert("Welcome");

        }
    });
} else {
    alert('complete todos los campos')
}

});