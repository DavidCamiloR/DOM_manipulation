
const h1 = document.querySelector('h1');
const input1 = document.querySelector('#calculo1')
const input2 = document.querySelector('#calculo2')
const btn = document.querySelector('#btnCalcular')
const result = document.querySelector('#resultado')
var resultado;
btn.addEventListener('click', btnOnClick)

function btnOnClick(){
    console.log('boton presionado');
    resultado = Number(input1.value)+Number(input2.value)       ;
    result.innerText="Resltado: " + resultado;
}