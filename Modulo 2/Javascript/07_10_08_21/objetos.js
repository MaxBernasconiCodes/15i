function persona(nombre, email, pass)
{
    this.nombre = nombre;
    this.email = email;
    this.pass = pass;
}

let inpNombre = document.getElementById('nombre');
let inpEmail = document.getElementById('email');
let inpPass = document.getElementById('pass');

function generar()
{
    let personanueva = new persona(inpNombre.value,inpEmail.value ,inpPass.value)
    return personanueva;
}