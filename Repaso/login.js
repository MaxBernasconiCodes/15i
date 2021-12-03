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

function getUsuarios()
{
    let listadoUsuariosDelLocalStorage = localStorage.getItem('ListaUsuarios');
    if(listadoUsuariosDelLocalStorage)
    {
        let listadoComoArray = JSON.parse(listadoUsuariosDelLocalStorage);//creamos el array a partir del string del localstorage

        console.log(listadoComoArray);
        return listadoComoArray.map(item => {
            let paseAUsuario = new Usuario(item.email, item.pass);
            return paseAUsuario;
        })
    }
}
const usuarios = getUsuarios()
console.log(usuarios);
function ingresar(){
    let user = document.getElementById('usuario').value;
    let password = document.getElementById('password').value;
    var ingreso = false;

    usuarios.forEach(usuario => {
        if(usuario.login(user,password))
        {
            window.location.assign('./index.html');
            ingreso = true;
        }
    });

    if(!ingreso)
    {
        alert('Usuario y contraseña no coinciden'); 
    }
    
}