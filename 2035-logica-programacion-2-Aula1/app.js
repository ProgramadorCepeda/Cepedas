let intentos = 1;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function generarNumeroSecreto(){
    let num = Math.floor(Math.random()*numeroMaximo)+1;
    if (listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p', 'Ya se sortearon todos los numeros posibles');
    }
    else{
        if(listaNumerosSorteados.includes(num)){
            return generarNumeroSecreto();
        }else{
            listaNumerosSorteados.push(num);
            console.log(listaNumerosSorteados);
            return num;
        }
    }
}

let numeroSecreto = generarNumeroSecreto();
console.log(numeroSecreto);
function verificarIntento() {
    let numeroUsuario = parseInt(document.getElementById('numeroUsuario').value);
   
    console.log(numeroSecreto == numeroUsuario);
    if( numeroSecreto == numeroUsuario){
        asignarTextoElemento('p', `Adivinaste el numero en ${intentos} ${(intentos === 1)?  'vez' : 'veces' }`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else{
        if ( numeroUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero secreto es menor');
        } else {
            asignarTextoElemento('p','El numero secreto es mayor');
        }
        intentos++;
        limpiarCaja();
    }
    return numeroUsuario;

}

function mensajesIniciales(){
    asignarTextoElemento('h1', 'Juego del numero secreto');
    asignarTextoElemento('p', `Indica un numero del 1 al ${numeroMaximo}`);
}

function asignarTextoElemento(e, texto){
    let elementoHTML= document.querySelector(e);
    elementoHTML.innerHTML = texto;
}

function limpiarCaja(){
    let caja = document.getElementById('numeroUsuario');
    caja.value = '';
} 

function reiniciarJuego(){
    mensajesIniciales();
    numeroSecreto = generarNumeroSecreto();
    limpiarCaja();
    intentos = 1;
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}





//Ejercicios
/* 
function hola(){
    console.log('Hola');
}

function hola2(nombre){
    console.log(`Hola ${nombre}`);
}

function dobleNumero(num){
    return num*2;
}

function prom(num1,num2,num3){
    return (num1,num2,num3)/3;
}

function mayor(num1,num2){
    if (num1 > num2){
        return num1;
    } else if ( num2 >  num1 ){
        return num2;
    } else{
        return 'Los numeros son iguales';
    }
}

function elevado(num){
    return num*num;
}


//Ejercicios 2

function calcularIMC(altura,peso){
    return peso/altura;
}

function factorial(numero){
    let suma = 1;
    if (numero == 0 ){
        return 1;
    }
    for (let i = 1; i<= numero; i++){
         suma *= i;
    }
    console.log(suma);
    return suma;

}

factorial(5);


function transformarValor(dolares){
    return dolares*4.80;
}

function medidas(radio){
    let area = (radio**2) * (Math.PI);
    let parametro = radio * ((Math.PI)*2);
    alert(`El area de la sala circular es ${area} y su perimetro es ${perimetro}`);
}

function tablaMultiplicar(num){
    for (let i = 0; i <= 10; i++){
        alert(num*i);
    }
}
*/

/* 
//Ejercicios
let listaGenerica = [];

let lenguajesDeProgramacion = ['JavaScript',  'C','C++', 'Kotlin' , 'Python'];
//console.log(lenguajesDeProgramacion);
lenguajesDeProgramacion.push('ruby','Java','GoLang');
//console.log(lenguajesDeProgramacion);

function listaInversa(lista){
    let orden = lista.length -1;
    while(orden >= 0){
        console.log(lista[orden]);
        orden--
    }
}

//listaInversa(lenguajesDeProgramacion);

function promLista(lista) {
    let suma = 0;
    for (let i = 0; i <= lista.length-1 ; i++){
        suma+= lista[i];
    }
    return suma/lista.length ;
}

let lista1 = [2,2,2]
let resultado1 = promLista(lista1);
//console.log(resultado1);

function suma(lista) {
    let suma = 0;
    for (let i = 0; i <= lista.length-1 ; i++){
        suma+= lista[i];
    }
    return suma ;
}


function buscar(elemento,lista){
    for (let i = 0 ; i <= lista.length-1; i++){
        if (lista[i] == elemento){
            return i;
        }
    }
    return -1;
}

function sumarListas(lista1,lista2){
    let lista3 = [];
    let suma = 0;
    for(let i = 0; i<lista1.length; i++){
        suma = lista1[i] + lista2[i];
        lista3.push(suma);

    }
    return lista3;
}

let lista2 = [1,1,1];
let resultado2 = []
resultado2 = sumarListas(lista1,lista2);
console.log(resultado2); 

function cuadradoNumero(lista){
    let lista2 = [];
    for(let i = 0; i < lista.length; i++){
        lista2.push(lista[i]*2);
    }
    return lista2;
}

resultado2 = cuadradoNumero(lista1);
console.log(resultado2)

*/