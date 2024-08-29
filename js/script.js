var qntClique = 0
var zerar = false

function clique() {
    if (!zerar) {
        qntClique++
        document.getElementById('contador').innerText = 'o contador está em ' + qntClique
    }
}

function zera(){
    zerar = true
    qntClique = 0
    window.location.reload(true)
}

