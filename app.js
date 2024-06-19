const form = document.getElementById("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const pais = document.getElementById("pais").value;
    const message = document.getElementById("message").value;
    console.log(name, email, password, pais, message);
    alert(
      `Formulario enviado con los siguientes datos:\nNombre: ${name}\nEmail: ${email}\nPassword: ${password}\nPais: ${pais}\nComentario: ${message}`
    );
})