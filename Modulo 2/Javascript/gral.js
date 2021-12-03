class Usuario {
    constructor(nombre, pass)
    {
        this.nombre = nombre;
        this.pass = pass;
        this.suspendido = false;
        this.eliminado = false;
    }
    getUsuarioByName(name)
    {
        usuarios.forEach(user => {
            if(user.name == name && user.suspendido != true && user.eliminado != true)
            {
                return user;
            }
        })
    }
    comparePass(pass)
    {
        return  pass == this.pass;  
    }
}

let usuarios = [];

let admin = new Usuario('admin', 'admin');

usuarios.push(admin);