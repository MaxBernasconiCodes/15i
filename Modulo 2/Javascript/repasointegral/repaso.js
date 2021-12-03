var variable = 0; //variable global
let otraVariable = 15; //es afectada por scope y no redeclarable
const constante = 0; //es afectada por scope y no redeclarable y no reasignable
const otraConstante = [1, 2, 3, 4, "texto", true];

variable = "modificacor de asignacion =";
variable += "este es un operador de suma y concatenacion";

//operadores aritmeticos
variable = 0;
variable += 25;
variable -= 3;
variable *= -3;
variable /= -3;
variable = variable % 3; //este es modulo, devuelve el resto de la division

//operadores de comparacion
console.log(variable == constante); //comparacion de igualdad
console.log(variable != constante); //comparacion de diferencia
console.log(variable <= constante); //menor o igual
console.log(variable >= constante); //mayor o igual
console.log(0 === "0"); //comparacion de igualdad y de tipo de variable

//Metodos de Math y String

let numeroRandom = Math.random();
variable = Math.floor(99.45345345); //redondeo hacia abajo
variable = Math.ceil(99.45345345); //redondeo hacia abajo
variable = Math.round(99.65345345); //redondeo hacia el numero entero mas cercano
let numeroRandomEntero = Math.floor(Math.random() * 100);
console.log("math pow: " + Math.pow(2, 5));

let texto = "este";
console.log(texto.toUpperCase());
console.log(texto.toLowerCase());
console.log("el texto tiene: " + texto.length + " caracteres");
console.log(texto[0]); //los textos tienen ciertos coportamientos y metodos de arrays

//Estruicturas de control o Condicionlaes

// Condicional if()
variable = 95;
if (variable < 90) {
  //recibe de parametro una comparacion
  console.log("Entró al If");
} else if (variable > 110) {
  console.log("Entró al else If");
} else {
  console.log("Entró al Else");
}

switch (
  variable //lee el parametro y usa el case que corresponda con su valor.
) {
  case 90:
    console.log("Variable es 90");
    break;
  case 100:
    console.log("Variable es 95");
    break;
  default:
    console.log("Variable no es ninguno de los valores descriptos");
    break;
}

// Loops o Bucles son el while y el for

let contador = 0; //variable inicial

while (contador <= 50) {
  //evalua si es verdadero o falso para seguir ejecutando el codigo de su bloque
  console.log("Estoy iterando por " + contador + " vez");
  contador++; //modificador de variable inicial
}

for (
  let i = 0;
  i <= texto.length;
  i++ //ciclo for para cuando sabemos que hay una definicion de la cantidad de vueltas que necesitamos , pro mas que esta sea variable.
) {
  console.log("Estoy en ciclo for por " + i + " vez");
}

console.log(numeroRandomEntero);
console.log(variable);
console.log(otraVariable);
console.logconstante;
console.log(otraConstante);

//Arrays son colecciones de datos, con indice que empieza desde 0
let array1 = [1, 2, 3, 4, 5, 6, 7];
let array2 = ["texto", false, 12, ["otro", "array"], array1, texto];

console.log(array1);
for (let i = 0; i < array1.length; i++) {
  array1[i]--;
}
console.log(array1);

array1.forEach((numero) => {
  if (numero % 2 == 0) {
    console.log(numero);
  }
});

//metodos de arrays

array1.push(7); //agregar un elemento al array en su ultima posicion
console.log(array1)
array1.pop(); //quita un elemento al array en su ultima posicion
console.log(array1)

array1.unshift(7); //agregar un elemento al array en su primera posicion
console.log(array1)
array1.shift(); //quita un elemento al array en su primera posicion
console.log(array1)


console.log(array1)
array1 = array1.slice(0,6); // corta el array desde la posicion indicada hasta anterior a la indicada despues
array1 = array1.splice(1,4); // corta el array desde la posicion indicada una cantidad de casillas como indicadas despues.
console.log(array1)


//Funciones
//declaracion de la funcion
function nombreDeLaFuncion(/*parametros*/texto){ 
    // let display = prompt('Escriba un texto');
    console.log(texto);
}
nombreDeLaFuncion('el texto aqui'); // invocacion de la funcion
console.clear();

function operacion (operando ,a, b)
{
    if(operando == '+'){
        return a + b;
    }
    else if(operando == '-'){
        return a - b;
    }
    else{
        return 0;
    }
}

let operado = operacion('-',321, 99);
console.log(operado);

function ingresar(){
let nombre = document.getElementById('nombre');
let password = document.getElementById('password');
let login = document.getElementsByName('login');
let traibles = document.getElementsByClassName('traible');


let nuevoElemento = document.createElement('div');
let lista = document.createElement('ul');
let item = document.createElement('li');
item.classList.add('boton'); //agrega una clase
item.classList.toggle('traible'); //quita una clase si la tiene o la agrega si no
item.classList.remove('traible');//quita una clase
item.style.color = "blue";
password.setAttribute('type','text');
item.append('Soy un Item');
lista.append(item);
nuevoElemento.append(lista);
document.body.append(nuevoElemento);
}