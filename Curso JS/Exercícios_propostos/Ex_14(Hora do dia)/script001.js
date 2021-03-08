var msg = document.querySelector("div#msg")
var img = document.createElement('img')
img.setAttribute('id', 'foto')
var data = new Date()
var horas = data.getHours()
msg.style.textAlign = 'center'
msg.innerHTML = `Agora são ${horas} horas`
if (horas >=0 && horas < 12){
    img.setAttribute('src', 'fotodia.png')
    document.body.style.background = 'yellow'
} else if (horas<18){
    img.setAttribute('src', 'fototarde.png')
    document.body.style.background = 'blue'
} else{
    img.setAttribute('src', 'fotonoite.png')
    document.body.style.background = 'black'
}
res.style.textAlign = 'center'
res.style.padding =  '10px'
res.appendChild(img)