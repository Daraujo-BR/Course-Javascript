function contar() {
    let ini = document.getElementById('txti').value
    let fim = document.getElementById('txtf').value
    let passo = document.getElementById('txtp').value
    let res = document.getElementById('res')

    //PASSAGEM DE NÚMEROS PARA STRING
    let sini = ini.toString() 
    let sfim = fim.toString()
    let spasso = passo.toString()

    //PASSADOS PARA STRING, É CAPAZ DE CONTAR QUANTAS LETRAS TEM
    if (sini.length == 0 || sfim.length == 0 || spasso.length == 0){
        res.innerHTML = 'Impossível contar!'
        //alert('Dados inválido! Revise suas informações')
    } else {
        res.innerHTML = 'Contando: <br>'
        let i = Number(ini)
        let f = Number(fim)
        let p = Number(passo)
        if (p <= 0){
            window.alert('Passo inválido! Considerando PASSO 1!')
            p = 1
        }
        if(i < f){
            //contagem crescente
            for (let c = i; c <= f; c += p){
            res.innerHTML += ` ${c} \u{1F449}`
            }
        } else {
            //contagem regressiva
            for(let c = i; c >= f; c -= p){
            res.innerHTML += ` ${c} \u{1F449}`
        }
        }
        res.innerHTML += `\u{1F942}`
    }
}