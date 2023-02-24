// Ex 1

let augusto = {
    nome: "Augusto",
    idade: 16,
    matriculado: true
}

// Ex 2

let Pessoa = {
    nome: "Leandro",
    mostrar: () => {
        console.log(Pessoa.nome);       
    }
}

// Ex 3

let Pessoa1 = {
    nome: "Maria",
    idade: 17
}

let Pessoa2 = {
    nome: "Joao",
    idade: 16
}

const older = () => {
    if (Pessoa1.idade > Pessoa2.idade) {
        console.log(`Pessoa mais velha: ${Pessoa1.nome}`)
    } else if (Pessoa2.idade > Pessoa1.idade) {
        console.log(`Pessoa mais velha: ${Pessoa2.nome}`)
    } else {
        console.log('Mesma idade.')
    }
}

older()

// Ex 4

let Fun1 = {
    nome: "Carlos Silva",
    salario: 6300
}

let Fun2 = {
    nome: "Ana Marques",
    salario: 67000
}

console.log((Fun1.salario + Fun2.salario) / 2)

// Ex 5

let retangulo = {
    largura: 3,
    altura: 4,
    area: () => {
        retangulo.largura * retangulo.altura
    },
    perimetro: () => {
        2*(retangulo.largura + retangulo.altura)
    },
    diagonal: () => {
        Math.sqrt(Math.pow(retangulo.largura, 2) + Math.pow(retangulo.altura, 2))
    }    
}