function media(){
    var nota1 = parseFloat(document.getElementById('n1').value)
    var nota2 = parseFloat(document.getElementById('n2').value)
    var nota3 = parseFloat(document.getElementById('n3').value)
    var res = document.getElementById('res')
    var media = (nota1 + nota2 + nota3) / 3
    res.textContent = media.toFixed(2)

    if (media >= 70){
        res.textContent = `${media.toFixed(2)} - PASSOU DE ANO 😎` 
    }else{
        res.textContent = `${media.toFixed(2)} - REPROVOU DE ANO 😫`
    }    

}