
let button = document.querySelector(".btn-naranja");
button.addEventListener('click', (e) => {
    e.preventDefault()
    let password = document.getElementById("password").value;
    let usuario = document.getElementById("usuario").value;
    if (usuario == "Admin" && password == "Kuepa2022") {
        window.setTimeout(() => { window.location.href = "dashboard.html" }, 1000);
    } else {
        /* alert("Error en las credenciales");*/
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Error en las credenciales',
        })
    }
})


