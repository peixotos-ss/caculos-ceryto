function somar(){
    var numero1 = document.getElementById('n1').valueAsNumber
    var numero2 = document.getElementById('n2').valueAsNumber
    var resposta = document.getElementById('resposta_adicao')
    resposta.textContent = numero1 + numero2
}

function subtrair(){
    var numero1 = document.getElementById('n3').valueAsNumber
    var numero2 = document.getElementById('n4').valueAsNumber
    var resposta = document.getElementById('resposta_subtracao')
    resposta.textContent = numero1 - numero2
}

function dividir(){
    var numero1 = parseFloat(document.getElementById('n5').value)
    var numero2 = parseFloat(document.getElementById('n6').value)
    var resposta = document.getElementById('resposta_divisao')

    if (numero2 === 0){
        resposta.textContent = 'Não se Divide por 0'
    }
    else{
        resposta.textContent = (numero1 / numero2).toFixed(2)
    }
}

function mult(){
    var numero1 = document.getElementById('n7').valueAsNumber
    var numero2 = document.getElementById('n8').valueAsNumber
    var resposta = document.getElementById('resposta_mult')
    resposta.textContent = numero1 * numero2
}