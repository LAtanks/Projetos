let res = window.document.getElementById("resultado");

function clean(){
    res.innerHTML = 0
}
function back(){

}
function insert(num){
    
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
}
