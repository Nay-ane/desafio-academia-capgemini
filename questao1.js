/*A mediana de uma lista de números é basicamente o elemento que se encontra no meio da lista após a ordenação. Dada uma lista de números com um número ímpar de elementos, desenvolva um algoritmo que encontre a mediana.*/

let arr = [9,2,1,4,6]


const medianArr = (arr) => {
    arr.sort((a,b) => {
        return a - b 
    })
    let medianIndex = Number.parseInt(arr.length / 2)
    return arr[medianIndex]
}

// a funçao medianArr primeiramente ordena o array utilizando o metodo nativo sort o qual passada uma função callback retorna o array ordenado, 
// depois é calculada a media do array utilizando o metodo length divido por 2 e utiliza o metodo parseInt para retornar somente a parte inteira da divisão
//o valor resultante é atribuido com o indice do array para mostrar a mediana

let median = medianArr(arr)
console.log(median)


