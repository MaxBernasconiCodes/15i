class Tarjeta {
    constructor(titulo, cuerpo, imagen)
    {
        this.titulo = titulo;
        this.cuerpo = cuerpo;
        this.imagen = imagen;
    }
    construirTarjeta(){
        let tarjetaNueva = 
        '<div class="card" style="width: 18rem;">'+
        '<img  style="max-heigt:100px" src="'+
        this.imagen + 
        '" class="card-img-top" alt="imagen '+
        this.titulo +
        '">' +
        '<div class="card-body"'+ '>'+
        '<h5 class="card-title">' + this.titulo + '</h5' + '>' +' <p class="card-text">' + this.cuerpo +'</p' + '>' + '<a href="#" class="btn btn-primary">Mas</a' + '>'+'</div> </div>'
      return tarjetaNueva;
    }

    mostrarTarjeta(){
        let lista = document.getElementById('empleados');
        let empleado = document.createElement('li');       
        empleado.innerHTML = this.construirTarjeta();
        lista.append(empleado);
    }
}
class Empleado extends Tarjeta{
    constructor(titulo, cuerpo, imagen, habilidades){
        super(titulo, cuerpo, imagen);
        this.habilidades =habilidades;
    }
    setHabilidades(habilidades){
        this.habilidades = habilidades;
    }
    agregarHabilidadesAlCuerpo(){
        this.cuerpo += '<div>';
        this.cuerpo += this.habilidades;
        this.cuerpo += '</div>';
    }
}
class Cliente extends Tarjeta{
    constructor(titulo, cuerpo, imagen,direccion){
        super(titulo, cuerpo, imagen);
        this.direccion =direccion;
    }
    construirTarjeta(){
        let tarjetaNueva = 
        '<div class="card" style="width: 18rem;">'+
        '<div class="card-body"'+ '>'+
        '<h5 class="card-title">' + this.titulo + '</h5' + '>' +' <p class="card-text">' + this.cuerpo +'</p' + '>' 
        + '<p>'+ this.direccion +'</p>'
        + '<a href="#" class="btn btn-primary">Mas</a' + '>'+'</div> </div>'
      return tarjetaNueva;
    }
    setHabilidades(habilidades){
        this.habilidades = habilidades;
    }
    agregarHabilidadesAlCuerpo(){
        this.cuerpo = this.cuerpo + '<div>';
        this.cuerpo += this.habilidades;
        this.cuerpo += '</div>';
    }
}

//Tarjeta 
let nuevaTarjeta = new Tarjeta('Empleado1', 'Nuevo empleado de ejemplo', 'https://previews.123rf.com/images/kentoh/kentoh1706/kentoh170600362/80556578-problema-de-empleo-de-empleado-gen%C3%A9rico-y-problemas-en-el-lugar-de-trabajo.jpg')

nuevaTarjeta.mostrarTarjeta();

//Empleado
let patricia = new Empleado('Patricia Martinez', 'Desarrolladora Web en Rolling Code School', 'patri.png', ['HTML', 'CSS', 'Javascript']);
patricia.agregarHabilidadesAlCuerpo();
patricia.mostrarTarjeta();


//Cliente
let cleinte1 = new Cliente('Jesus Palma', 'Cliente nuevo que come pizza', '', 'Ayacucho 4500');

let cleinte2 = new Cliente('Diana Abascal', 'Anime Lover', '', 'Ayacucho 4502');

cleinte1.mostrarTarjeta();
cleinte2.mostrarTarjeta();


