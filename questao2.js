/*# Questão 02
    Dado um vetor de inteiros n e um inteiro qualquer x. Construa um algoritmo que determine o número de elementos pares do vetor que tem uma diferença igual ao valor de x.
*/

let n = [1, 5, 3, 4, 2]
let x = 2
let qttPairs = 0


for(let i = 0; i < n.length; i++){
    for(let j = 0; j < n.length ; j++){
        let diff = n[i] - n[j]
        if(diff === x){
            qttPairs++
        }
    }
}

// foi utilizado duas iteraçoes for para que o mesmo indice de array pudesse ser comparado, depois e feita a diferença entre os dois numeros e verifcado se a diferenca destes é igual ao valor de x caso seja verdadeiro a quantidade de pares é aumentada


console.log(qttPairs)