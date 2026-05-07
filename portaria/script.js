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
    if(age>=18){
        res.textContent= "Over 18, Entry ✅  "
        clientAge.textContent= age
        document.getElementById('v1').style.display='block'
        document.getElementById('v2').style.display='none'
    }else{
        res.textContent= "under 18,    NOT ALLOWED🔞 "
        clientAge.textContent= age
        document.getElementById('v2').style.display='block'
        document.getElementById('v1').style.display='none'

    }
}