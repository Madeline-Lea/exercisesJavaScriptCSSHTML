let numeroPares = [2,4,6,8,10]

let numeroParesDobro = numeroPares.map(function(valor){
return valor *2
})
console.log(numeroParesDobro)
//map

let numerosFiltrados = numeroPares.filter(function(valor){
return valor < 6
 })

 console.log(numerosFiltrados)
 //filter

 let somaPares = numeroPares.reduce(function(acum, valor){
return acum + valor
 })

 console.log(somaPares)
 //reduce

 numeroPares.forEach(function(valor, indice){
 console.log("O indice é " + indice + " tem valor: " + valor)
 })
 //forEach
 