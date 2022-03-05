let s = "ola mundo"


const removeSpaces = (string) => {
    return string.replace(/\s/g,'')
}
//a função removeSpaces utiliza o metódo de strings replace que dada uma funcao reg. exp retorna uma nova string com todas as correspondencias do padrao substituídas

const calcGridSize = (string) => {
    return Math.ceil(Math.sqrt(string.length))
}
//a função calcGridSize utiliza a função nativa(js) Math.sqrt e retorna a raiz quadrada de um número, foi utilizada também a função nativa Math.ceil que retorna o menor numero inteiro maior ou igual ao numero fornecido
const allocateStrInGrid = (str) => {
    let gridSize = calcGridSize(stringWithoutSpaces)
    let inicialIndex = 0
    let finalIndex = gridSize
    let stringsGrid = []

    for(let i = 0; i < gridSize; i++){
        newStr = stringWithoutSpaces.substring(inicialIndex, finalIndex)
        stringsGrid.push(newStr)
        inicialIndex += gridSize
        finalIndex += gridSize
    }
    return stringsGrid
}
//a funcao allocateStrInGrid percorre o array e quebra as strings, utilizando o metodo nativo substr(), de acordo com os parametros passados relativos ao tamanho do grid e as aloca em um novo array

const encryptMessage = () => {
    let stringsGrid = allocateStrInGrid(stringWithoutSpaces)
    let encryptedString = ''

    for(let row = 0; row  < stringsGrid.length; row++){
        for(let col = 0; col < stringsGrid.length; col++){
            if(stringsGrid[col][row])
            encryptedString += stringsGrid[col][row]
        
        }
        encryptedString += ' '
    }
    return encryptedString
}
//a funcao encryptMessage percorre o grid de substrings formando uma nova string(utilizando sempre a primeira coluna de cada linha do grid para isso) a cada iteraçao e retorna a mensagem encriptada

let stringWithoutSpaces = removeSpaces(s)
let encryptedMessage = encryptMessage()

console.log(encryptedMessage)