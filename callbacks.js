const somar = (numeroA, numeroB) => numeroA + numeroB

const calculadora = (numeroA, numeroB, operacao) => operacao(numeroA, numeroB)

console.log(calculadora(10, 20, somar))

const menos = (numeroC, numeroD) => numeroC - numeroD

const calculadoraMenos = (numeroC, numeroD, operacao) => operacao(numeroC, numeroD)

console.log(calculadoraMenos( 10, 30, menos))

const vezes = (numeroE, numeroF) => numeroE * numeroF

const calculadoraVezes = (numeroE, numeroF, operacao) => operacao(numeroE, numeroF)

console.log(calculadoraVezes(9, 2, vezes))

const divisao = (numeroG, numeroH) => numeroG / numeroH

const calculadoradivisao = (numeroG, numeroH, operacao) => operacao(numeroG, numeroH)

console.log(calculadoraVezes(9, 2, divisao))

