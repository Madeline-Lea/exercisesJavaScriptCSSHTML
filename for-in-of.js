let carro = {
    nome: "Civic",
    ano: 2002
}

for(let propriedade in carro){
    console.log(carro[propriedade])
}
//for-in

let jogos = ["Celeste", "Terraria", "Hotline Miami", "GTA San Andreas"]

for(let valor of jogos ){
    console.log(valor)
}

 // for-of