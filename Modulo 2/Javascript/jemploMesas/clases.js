let usuarios = [];
let Mesas  = [];

class Usuario{
    constructor(id){
        this.id = id;
    }
}

class Mesa{
constructor(id){
    this.id = id;
    this.items = items;
    }

    addItem(id, nombre, precio){
        let item = new item(id, nombre, precio)
        this.items.push(item);
    }
}

class Item{
    constructor(id, nombre, precio){
     this.id = id;
     this.nombre = nombre;
     this.precio = precio;
    }
}