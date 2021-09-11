let desserts = ["Chocolate Mousse", "Vanila Cake", "Ice Cream Sandwich"]

let desserts2 = ["Strawberry Cake", "Apple Pie"]

let allDesserts = [...desserts, ...desserts2]

console.log(allDesserts)

// com arrays.



let pessoa = {
    nome: "Leonardo",
    idade: 18
}

let infoPessoal = {
    numeroDeTelefone: 11 - 96393 - 0155,
    email: "leonmigu2@gmail.com",
    ...pessoa
}

let pessoaCompleta = {
    endereco: "Rua ...",
    ...infoPessoal
}
console.log(infoPessoal)

// com objeto literal

function letras(...paramns){
console.log(paramns)
}

letras("a", "b")

