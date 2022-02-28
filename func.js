var btn = document.getElementById('btn')
var valor=document.getElementById('vargaso')
var litros=document.getElementById('qtdl')
var total = document.getElementById('result')

btn.onclick=()=>{
    calcular()
}

function calcular() {
    result=parseFloat(valor.value)*parseFloat(litros.value)
    total.value=result
}