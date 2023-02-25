let res = window.document.getElementById("resultado");

function insert(num){
    
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}

function clean(){
    res.innerHTML = ''
}
function back(){
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero.substring(0, numero.length -1);
}
function cal(){
    var res = document.getElementById('resultado').innerHTML;
    if(res){
        document.getElementById('resultado').innerHTML = eval(res)
    }
}

