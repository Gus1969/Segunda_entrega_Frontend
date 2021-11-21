
const email = document.getElementById('mail');
const pwd = document.getElementById('password');
const button = document.getElementById('submit');

button.addEventListener ('click', () => {

const mail = email.value;
const password = pwd.value;

const bodyObjects = {
   
    mail,
    password
}

if(email && password) {
    fetch("http://localhost:3000/auth/login", {
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