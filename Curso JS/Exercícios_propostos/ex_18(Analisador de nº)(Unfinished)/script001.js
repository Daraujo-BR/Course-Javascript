/* OBSERVAÇÕES
ALERTAS:
se o valor NÃO estiver entre 1 e 100 = alert('Valor inválido ou já está na lista)
se a caixa de valor estiver vazia = alert('Valor inválido ou já está na lista)
se o valor já estiver lá = alert('Valor inválido ou já está na lista)
se não tiver valor antes de finalizar = alert('Adicione valores antes de finalizar')
AÇÕES:
clicando em adicionar = adiciona o seguinte na section ('Valor x adicionado) fazendo dnv coloca o mesmo texto embaixo
clicando em finalizar = aparecerá a seguinte sequencia a baixo de tudo
                        ao todo temos x números cadastrados
                        o maior valor informado é y
                        o menor valor informado é z
                        somando todos os valores, temos a 
                        a média dos valores digitados é b 
se um novo valor for adicionado, apagara o testo escrito e acumulara na section
*/
let num = document.querySelector('input#txtnum')
let lista = document.querySelector('select#lista')
let res = document.querySelector('div#res')
let valores = []

function isnumber(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    } else{
        return false
    }
}

function inlist(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true 
    } else{
        return false
    }
}

function adicionar(){
    if (isnumber(num.value) && !inlist(num.value,valores)){
        alert('tudo ok')
    } else {
        alert('Valor inválido ou já está na lista')
    }
}