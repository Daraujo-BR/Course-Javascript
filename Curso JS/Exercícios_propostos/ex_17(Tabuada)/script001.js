function clicar(){
    let num = document.getElementById('txtnum').value
    let tab = document.getElementById('seltab')
    let nums = num.toString()
    if(nums.length == 0){ 
        window.alert('Por favor, digite um número!')
    } else{ 
        let c = 1
        tab.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${c} X ${num} = ${c*num}`
            item.value = `tab${c}`
            tab.appendChild(item)
            c++  
        }  
    } 
}
