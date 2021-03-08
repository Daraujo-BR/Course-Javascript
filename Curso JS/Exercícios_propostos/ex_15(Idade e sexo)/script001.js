function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.querySelector('input#txtano')
    var res = document.querySelector('div#res')
    if(fano.value.length == 0 || Number(fano.value) > ano){
        alert('Erro, verifique os dados')
    } else {
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'boy_baby.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'boy_teen.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'boy_adult.png')
            } else {
                //idoso
                img.setAttribute('src', 'boy_old.png')
            }
        } else {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10){
                //criança
                img.setAttribute('src', 'girl_baby.png')
            } else if (idade < 21){
                //jovem
                img.setAttribute('src', 'girl_teen.png')
            } else if (idade < 50){
                //adulto
                img.setAttribute('src', 'girl_adult.png')
            } else {
                //idoso
                img.setAttribute('src', 'girl_old.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 
}