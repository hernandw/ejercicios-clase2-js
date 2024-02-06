//haz un programa que imprima la tabla del 6

/* let table = 9


for (let i = 1; i <= 10; i++) {
  console.log(`${table} x  ${i}  =  ${table*i}`);
} */


/* 6 x 1 = 6
6 x 2 = 12 */


//imprimir los numeros pares del 0 al 20


let num = 0


/* while (num <= 20) {
    console.log(num)
  num = num + 2
  debugger
} */


//hacer un programa que te indique cuantos numeros pares hay entre 0 y 10
/* let contador = 0

for (let i = 0; i <= 20; i++){
  if (i % 2 === 0) {
    contador++
  }
}
console.log(`Hay ${contador} numeros pares entre 0 y 20`) */



// haz un programa en JS que permita sumar numeros impares e indicar la cantidad de numeros impares comprendido entre 0 y 50
/* let contador = 0 */

/* let acumulador = 0

for (let i = 0; i <= 50; i++){
  if (i % 2 != 0) {
    contador++
  }
}

console.log(`Hay ${contador} numeros impares entre 0 y 50`) */

function sumaXdos(a, b) {
  let suma = a + b
  
  return suma
 
}

console.log(sumaXdos(10, 15));

console.log(sumaXdos(7, 13));


function saludar(name) {
  let saludo = 'Como  estas ' + name 
  return saludo
}


console.log(saludar('Williams'))