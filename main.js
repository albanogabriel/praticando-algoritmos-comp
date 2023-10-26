/* 
    01 - Algorítmo - Perímetro e Área do Quadrado:

    Objetivo do algoritmo: calcular o perímetro e a área de um quadrado.

    Entrada: para calcular o perímetro e a área, precisamos saber qual o com- primento do lado do quadrado, ou seja, temos que saber o valor de L.

    Processamento:cálculodoperímetroedaárea.Operímetro(P) é a soma dos quatro lados, pode ser representado por P = 4 * L. A área (A) é dada por A = L * L.
    
    Saída: informar o valor do perímetro (P) e o valor da área (A).
*/

const l = document.getElementById('square-input')
const sideSquareButton = document.getElementById('square-button')
const answer01Div = document.querySelector('.answer-01')

console.log(l)
console.log(sideSquareButton)

sideSquareButton.addEventListener('click', () => {

    const lValue = Number(l.value)

    if(isNaN(lValue)) {
        alert('apenas números são permitidos')
    } else {
       
        const perimetro = lValue * 4
        const area = lValue * 2 

        const result = document.createElement('p')
        result.innerHTML = `A área do quadrado é ${area} e o Perímetro é ${perimetro}`
        l.value = ''
        answer01Div.appendChild(result)
    }
})


/* 02 - Algoritmo INSS

■ Objetivo do algoritmo: apresentar o valor do salário bruto, do salário líquido, do INSS e FGTS.
■ Entrada: para calcular o salário bruto do funcionário, precisamos obter o número de horas, o número de horas extras e o valor da hora trabalhada.
■ Processamento: calcular salário bruto, INSS, FGTS e salário líquido.
■ Saída: informar salário bruto, salário líquido, INSS e FGTS.

*/

// let calcButton = document.getElementById('calcButton')

// const pHoraExtra = 100

// const answer02Div = document.getElementById('answer-02')

// calcButton.addEventListener('click', () => {
//     let horasTrabalhadasInput = document.getElementById('horasTrabalhadasInput')
//     let horasTrabalhadasInputValue = parseFloat(horasTrabalhadasInput.value)
    
//     let horasExtras = document.getElementById('horasExtrasInput')
//     let horasExtrasValue = parseFloat(horasExtras.value)

//     let valorHora = document.getElementById('valorHoraInput')
//     let valorHorasValue = parseFloat(valorHora.value)

//     let salarioBruto = (horasTrabalhadasInputValue + horasExtrasValue * (1 + (pHoraExtra / 100))) * valorHorasValue
//     let inss = salarioBruto * (9/100)
//     let FGTS = salarioBruto * (8/100)

//     const result = document.createElement('p')
//     result.innerHTML = `O Salário bruto é de ${salarioBruto}, o inss é de ${inss} e o FGTS é de ${FGTS}`
//     answer02Div.appendChild(result)
// })

const calcButton = document.getElementById('calcButton')
const answer02Div = document.querySelector('.answers-02')
console.log(answer02Div)

const pHoraExtra = 100

calcButton.addEventListener('click', () => {
    let horasTrabalhadasInput = parseFloat(document.getElementById('horasTrabalhadasInput').value);
    let horasExtras = parseFloat(document.getElementById('horasExtrasInput').value);
    let valorHora = parseFloat(document.getElementById('valorHoraInput').value);

    if (isNaN(horasTrabalhadasInput) || isNaN(horasExtras) || isNaN(valorHora)) {
        alert('Por favor, insira valores numéricos válidos.');
    } else {
        let salarioBruto = (horasTrabalhadasInput + horasExtras * (1 + (pHoraExtra / 100))) * valorHora;
        let inss = salarioBruto * (9/100);
        let salarioLiquido = salarioBruto - inss
        let FGTS = salarioBruto * (8/100);

        const result = document.createElement('p');
        result.innerHTML = `O Salário bruto é de ${salarioBruto}, o salário líquido é de ${salarioLiquido} o inss é de ${inss} e o FGTS é de ${FGTS}`;
        answer02Div.appendChild(result);
    }
});

/* Algoritmo Parímpar - Testando algumas condicionais */

const answer03Div = document.querySelector('.answer-03')
let numeroInput = document.querySelector('.answer-03 input')
let numeroButton = document.querySelector('.answer-03 button')

numeroButton.addEventListener('click', () => {

    let numeroInputValue = numeroInput.value

    if(Number(numeroInputValue)) {
        if (numeroInputValue % 2 === 0) {
            console.log(`o número ${numeroInputValue} é par`)
        } else {
            console.log(`o número ${numeroInputValue} é ímpar`)
        }
    } else {
        alert('digite um número válido')
    }
})

/* Bora pra disney ? Verificando se você pode ir para disney ou para outro lugar ou ficar em casa */

const div04 = document.querySelector('.answer-04')
const input = document.querySelector('.answer-04 input')
const button04 = document.querySelector('.answer-04 button')

button04.addEventListener('click', () => {
    const inputValue = Number(input.value)

    // if(inputValue >= 8500) {
    //     console.log('vamos para disney')
    // } else if(inputValue >= 5000){
    //     if(inputValue >= 8000){
    //         console.log('você pode viajar para cuiabá, se juntar um pouco mais, pode ir para disney')
    //     } else {
    //         console.log('você pode ir para cuiabá')
    //     }
    // } else {
    //     console.log('vamos ter que ficar em casa')
    // }

    switch (true) {
        case inputValue >= 8500:
            console.log('vamos para disney')
            break;

        case inputValue >= 8000:
            console.log('você pode viajar para cuiabá, se juntar um pouco mais, pode ir para disney')
            break;

        case inputValue >= 5000:
            console.log('você pode viajar para cuiabá')
            break;

        case inputValue >= 1500:
            console.log('Você não pode viajar, se juntar um pouco mais pode ir para cuiabá')
            break;
    
        default:
            console.log('vamos ter que ficar em casa')
            break;
    }
})


/* Salário X Dependentes */

const div05 = document.querySelector('.answer-05')
const depInput = document.getElementById('depInput')
const salInput = document.getElementById('salInput')
const button05 = document.querySelector('.answer-05 button')

button05.addEventListener('click', () => {
    const depInputValue = Number(depInput.value)
    const salInputValue = Number(salInput.value)
    let valorSal = 0

    switch(true) {
        case depInputValue === 0:
            valorSal = salInputValue + (salInputValue * 5/100 )
            break

        case depInputValue === 1 || depInputValue === 2 || depInputValue === 3:
            valorSal = salInputValue + (salInputValue * 10/100)
            break

        case depInputValue === 4 || depInputValue === 5 || depInputValue === 6:
            valorSal = salInputValue + (salInputValue * 15/100)
            break

        default:
            valorSal = salInputValue + (salInputValue * 18/100)
            break
    }
    
    console.log(`Você tem o direito de ganhar R$ ${valorSal},00`)
})


/* 06 - Incrementar contagem do valor que usuário quiser */

const div06 = document.querySelector('.answer-06')
const input06 = document.getElementById('input06')
const button06 = document.getElementById('button06')

button06.addEventListener('click', () => {
    let input06Value = parseInt(input06.value)
    let soma = input06Value
    let i = 0 
    
    while (i < 10) {
        soma += 1
        i += 1
        console.log(soma)
    }
    
})

/* Variavéis Compostas, JavaScript / For(incialização ; teste lógico ; incremento) */

// let cars = ['volvo', 'ferrari', 'fiat', 'chevrolet', 'volkswagen', 'renault', 'nissan', 'bugatti', 'audi', 'porsche', 'toyota', 'hyundai', 'honda'];

// for(i = 0; i <= cars.length; i++) {
//     console.log(cars[i])
// }

const div07 = document.querySelector('.answer-07')
const input07 = document.getElementById('input07')
const button07 = document.getElementById('button07')
const btnRenderize = document.getElementById('renderize')
let cars = []

button07.addEventListener('click', () => {
    let input07Value = String(input07.value)
    cars.push(input07Value)

    console.log(cars)
})

btnRenderize.addEventListener('click', () => {
    for(i = 0; i <= cars.length; i++){
        const pCar = document.createElement('p')
        pCar.innerHTML = cars[i]
        div07.appendChild(pCar)

    }

    // cars.forEach(element => {
    //     const pCar = document.createElement('p')
    //     pCar.innerHTML = element
    //     div07.appendChild(pCar)
    // });
})

/* Media alunos */
let alunos = []
let n1 = []
let n2 = []
let m = []

const aluno01Input = document.getElementById('aluno01')
const aluno01nota01 = document.getElementById('n01a01')
const aluno01nota02 = document.getElementById('n02a01')
const saveButton01 = document.getElementById('salvar01')

const aluno02Input = document.getElementById('aluno02')
const aluno02nota01 = document.getElementById('n01a02')
const aluno02nota02 = document.getElementById('n02a02')
const saveButton02 = document.getElementById('salvar02')

const calcMedia = document.getElementById('calcmedia')

const div08 = document.querySelector('.answer-08')

saveButton01.addEventListener('click', () => {
    alunos.push(aluno01Input.value)
    n1.push(parseFloat(aluno01nota01.value))
    n2.push(parseFloat(aluno01nota02.value))
    console.log(alunos, n1)
})

saveButton02.addEventListener('click', () => {
    alunos.push(aluno02Input.value)
    n1.push(parseFloat(aluno02nota01.value))
    n2.push(parseFloat(aluno02nota02.value))
    console.log(n2)
})

calcMedia.addEventListener('click', () => {
    for (let i = 0; i < n1.length; i++) {
        m.push((n1[i] + n2[i]) / 2);
    }

    for (let j = 0; j < alunos.length; j++) {
        const p = document.createElement('p')
        p.innerHTML = `O aluno ${alunos[j]} teve a média de ${m[j]}`
        div08.appendChild(p)

        // console.log(`O aluno ${alunos[j]} teve a média de ${m[j]}`);
    }

    console.log(alunos, n1, n2, m)
})



/* 09 - Filtrar elementos */


/*

//A função includes() é um método de string e array em JavaScript que verifica se uma string ou 
um elemento está presente em uma string ou array, respectivamente. Ela retorna um valor booleano (true ou false) 
com base na presença ou ausência do elemento ou da string.


Para strings: 

const frase = "Olá, mundo!";
const contemMundo = frase.includes("mundo"); // Retorna true
const contemOla = frase.includes("Olá"); // Retorna true
const contemTchau = frase.includes("Tchau"); // Retorna false

Para arrays:

const numeros = [1, 2, 3, 4, 5];
const contemTres = numeros.includes(3); // Retorna true
const contemSeis = numeros.includes(6); // Retorna false

*/

const renderizaLista = document.querySelector('.renderizaLista')
const input09 = document.getElementById('input09')
const filter09 = document.getElementById('filter09')
const button09 = document.getElementById('save09')

let nomes = []

button09.addEventListener('click', () => {
    nomes.push(input09.value)
    
    while (renderizaLista.firstChild) {
        renderizaLista.removeChild(renderizaLista.firstChild);
    }

    nomes.forEach(nomes => {
        const p = document.createElement('p')
        p.innerHTML = nomes
        renderizaLista.appendChild(p)
    })
})

filter09.addEventListener('change', () => {
    while (renderizaLista.firstChild) {
        renderizaLista.removeChild(renderizaLista.firstChild);
    } // ou renderizaLista.innerHTML = ''


    nomes.forEach(nomes => {
        const filtro = filter09.value.toLowerCase()

        if(nomes.toLowerCase().includes(filtro)){
            const p = document.createElement('p');
                p.innerHTML = nomes;
                renderizaLista.appendChild(p)
        }
    })
})

/* 10 - Organizar elementos dentro de um array */

const ordenarNumeros = []

for(i = 0; i <= 3; i++){
    const numeroDigitado = parseInt(window.prompt(`${i} - digite um número Inteiro`))

    if(isNaN(numeroDigitado)){
        window.alert('apenas números inteiros')
        i--
    } else {
        ordenarNumeros.push(numeroDigitado)
    }
}

for (i = 0; i < ordenarNumeros.length - 1; i++){
    for (j = i + 1; j <= ordenarNumeros.length ; j++){
        if(ordenarNumeros[i] > ordenarNumeros[j]){
            let aux = ordenarNumeros[i]
            ordenarNumeros[i] = ordenarNumeros[j]
            ordenarNumeros[j] = aux
        }
    }
}



console.log(ordenarNumeros)

















