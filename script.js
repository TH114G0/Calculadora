function insert(num) {
    var numero = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = numero + num;
}
function clean() {
    document.getElementById('Resultado').innerHTML = '';
}

function back() {
    var Resultado = document.getElementById('Resultado').innerHTML;
    document.getElementById('Resultado').innerHTML = Resultado.substring(0, Resultado.length -1);
}

function Calcular() {
    var Resultado = document.getElementById('Resultado').innerHTML;
    if(Resultado) {
        document.getElementById('Resultado').innerHTML = eval(Resultado);
    }
    else {
        document.getElementById('Resultado').innerHTML = ":)";
    }
}