function check(){
    var wasBorn= parseInt(document.getElementById('birth').value)
    var res=document.getElementById('result')
    var clientAge=document.getElementById('age')
    if(isNaN(wasBorn)){
        res.textContent='type only number'
        res.style.color="red"
        return
    }

    const thisyear= new Date().getFullYear()
    const age=thisyear- wasBorn
}