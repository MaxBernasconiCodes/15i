class Usuario {
    constructor(email, pass)
    {
        this.email = email;
        this.pass = pass;
    }

    login(usuario, pass) // funciones dentro de clases no necesitan el "function por delante" (metodos)
    {
        if(pass == this.pass && usuario ==this.email )
        {
            return true;
        }
        else{
            return false;
        }
    }
}

let email = document.getElementById('email');
let pass = document.getElementById('pass');

function registrar()
{
    if(validacion())
    {
        let emailNuevo = email.value;
        let passNuevo = pass.value;
        let usuarioNuevo = new Usuario(emailNuevo,passNuevo);
        agregarALocalStorage(usuarioNuevo);
    }
}

function validacion(){
    if(email.value == '' || email.value == null || typeof email.value == 'undefined')
    {
        email.style.border = 'red solid 2px'
        return false;
    }
    else{
        email.style.border = 'black solid 1px';
        return true;
    }
}

function agregarALocalStorage(nuevoUsuario){
    let listadoUsuariosDelLocalStorage = localStorage.getItem('ListaUsuarios');
    
    if(listadoUsuariosDelLocalStorage)
    {
        let listadoComoArray = JSON.parse(listadoUsuariosDelLocalStorage);//creamos el array a partir del string del localstorage
        listadoComoArray.push(nuevoUsuario);//sumamos el nuevo usuario al array

        let listadoNuevosUsuarios = JSON.stringify(listadoComoArray);// lo volvemos a hacer string
        localStorage.setItem('ListaUsuarios', listadoNuevosUsuarios);//lo volvemos a subir al localStorage
    }
    else{
        listadousuarios = JSON.stringify([nuevoUsuario]);
        localStorage.setItem('ListaUsuarios', listadousuarios);
    }

}



