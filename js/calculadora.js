const botonNumeros = document.getElementsByName('numero');

const operaciones=document.getElementsByName('operacion');

const igual=document.getElementsByName('igual')[0];

const clear=document.getElementsByClassName('clear')[0];

var result = document.getElementsByName('resultado')[0];

var opActual = '';
var opAnterior ='';
var operacion='undefined';

botonNumeros.forEach(function(boton){
    boton.addEventListener('click', function(){
      agregarNumero(boton.innerText);  
    })
});

operaciones.forEach(function(boton){
    boton.addEventListener('click', function(){
       selecOperacion(boton.innerText);
    })
});

igual.addEventListener('click', () =>{
    calcular();
    actualizarPantalla();
});

clear.addEventListener('click', () =>{
    limpiar();
    actualizarPantalla();
});


 var agregarNumero = (num) =>{
    opActual = opActual.toString() + num.toString();
    actualizarPantalla();
}

var actualizarPantalla = () => result.value = opActual;

var limpiar =() =>{
    opActual = '';
    opAnterior = '';
    operacion = undefined;
}

var selecOperacion = (op) =>{
    if(opActual == '') return;
    if(opAnterior != ''){
        calcular()
    }
    operacion = op.toString();
    opAnterior =opActual;
    opActual = '';
}

var calcular =() =>{
    var calculo;
    const anterior = parseFloat(opAnterior);
    const actual = parseFloat(opActual);
    if(isNaN(anterior) || isNaN(actual)) return;
    switch(operacion){
        case '+':
            calculo = anterior + actual;
        break;
        case '-':
            calculo = anterior - actual;
        break;
        case '*':
            calculo= anterior * actual;
        break;
        case '/':
            calculo= anterior / actual;
        break;
        default:
            return;
    }
    opActual=calculo;
    operacion = undefined;
    opAnterior = '';
}

limpiar();
