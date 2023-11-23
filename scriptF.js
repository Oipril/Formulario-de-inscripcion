function validateForm() {
    var apellido = document.forms["myForm"]["nombre"].value;
    var nombre = document.forms["myForm"]["Apellidos"].value;
    var telefono = document.forms["myForm"]["telefono"].value;
    var correo = document.forms["myForm"]["correo"].value;
    var direccion = document.forms["myForm"]["direccion"].value;

    // Validar solo números en el campo de teléfono
    if (!/^\d+$/.test(telefono)) {
        alert("Ingrese solo números en el campo de teléfono.");
        return false;
    }

    // Validar solo letras en los campos de nombre y apellido
    if (!/^[a-zA-Z]+$/.test(apellido) || !/^[a-zA-Z]+$/.test(nombre)) {
        alert("Ingrese solo letras en los campos de nombre y apellido.");
        return false;
    }

    // Validar otros campos según sea necesario

    // Resto de tu lógica de validación

    return true;
}


function handleFormSubmit(event) {
    // Aca se puede agregar el código para manejar el envío del formulario

    event.preventDefault(); // Esto evita el envío predeterminado del formulario
}
resetForm(); // Restablecer el formulario después de enviarlo

function resetForm() {
    document.getElementById("miFormulario").reset();
}
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    var enviarBtn = document.querySelector('.btn[type="submit"]');

    enviarBtn.addEventListener('click', function() {
        var action = form.getAttribute('action');
        var mailtoLink = 'mailto:' + action;
        window.location.href = mailtoLink;
    });
});

//enviar

document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('form');
    var enviarBtn = document.querySelector('.btn[type="submit"]');

    enviarBtn.addEventListener('click', function() {
        var action = form.getAttribute('action');
        var mailtoLink = 'mailto:' + action;
        window.location.href = mailtoLink;
    });
});
