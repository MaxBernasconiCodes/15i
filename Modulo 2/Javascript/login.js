function ingresar(){
    let nombreUsuario = document.getElementById('user');
    let nombrePassword = document.getElementById('pass');
    usuarios.forEach(user => {
        if(user.getUsuarioByName(nombreUsuario.value) != null && user.comparePass(usuarioAIngresar.nombrePassword))
       {

       }
        
    });
}