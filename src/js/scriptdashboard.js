let button = document.getElementById("buscar");
button.addEventListener('click', (e) => {
    e.preventDefault()
    let usuario = document.getElementById("usuario").value;
    switch (usuario) {
        case "52368795":
            Swal.fire({
                background: '#ffffff',
                html: '<img src ="../utils/img/0. logoforja.png" width="200"><h3>DOSIS 1</h3><p>Vacuna: SINOVAC</p><p>Fecha de aplicación: 14/07/2021</p>'
            })
            window.setTimeout(() => { window.location.href = "vacunacion.html" }, 3000);

            break;
        case "1001235478":
            Swal.fire({
                background: '#ffffff',
                html: '<img src ="../utils/img/0. logoforja.png" width="200"><h3>DOSIS 1</h3><p>Vacuna: SINOVAC</p><p>Fecha de aplicación: 20/11/2021</p><h3>DOSIS 2</h3><p>Vacuna: SINOVAC</p><p>Fecha de aplicación: 21/12/2021</p>'
            })
            window.setTimeout(() => { window.location.href = "vacunacion.html" }, 3000);

            break;
        case "25413574":
            Swal.fire({
                background: '#ffffff',
                html: '<img src ="../utils/img/0. logoforja.png" width="200"><h2>Esquema de vacunación completo</h2><h3>DOSIS 1</h3><p>Vacuna: PFIZER</p><p>Fecha de aplicación: 1/08/2021</p><h3>DOSIS 2</h3><p>Vacuna: PFIZER</p><p>Fecha de aplicación: 22/08/2021</p><h3>DOSIS 3</h3><p>Vacuna: PFIZER</p><p>Fecha de aplicación: 23/03/2022</p'
            })
            break;
        case "1007203506":
            Swal.fire({
                background: '#ffffff',
                html: '<img src ="../utils/img/0. logoforja.png" width="200"><h3>No se tiene registro de Vacunación?</h3>'
            })
            window.setTimeout(() => { window.location.href = "vacunacion.html" }, 1000);
            break;
        default:
            Swal.fire({
                html: '<img src ="../utils/img/0. logoforja.png" width="200"><h3>Usuario no registrado, desea realizar el registro?</h3>',
                showCancelButton: true,
                confirmButtonColor: '#F3610E',
                cancelButtonColor: '#1D1B45',
                confirmButtonText: 'Si, gracias!'
            }).then((result) => {
                if (result.isConfirmed) {
                    window.setTimeout(() => { window.location.href = "usuarionuevo.html" }, 1000);
                }
            })
            break;
    }
})
