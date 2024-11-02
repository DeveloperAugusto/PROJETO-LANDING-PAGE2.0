var Bruna = window.document.getElementById("Bruna")
var Leonardo = window.document.getElementById("Leonardo")
var Samantha = window.document.getElementById("Samantha")
var SetaDireita = window.document.getElementById("seta-direita")
var SetaEsquerda = window.document.getElementById("seta-esquerda")

function RolarParaDireita(){
    Bruna.style = "display:none"
    Samantha.style = "display:flex"
    Leonardo.style = "display:flex; margin-left: 0px"
    SetaDireita.style = "display:none"
    SetaEsquerda.style = "display:flex; margin-top:120px; margin-left:200px"
}

function RolarParaEsquerda(){
    Leonardo.style = "display:none"
    Bruna.style = "display:flex"
    Samantha.style = "display:flex"
    SetaDireita.style = "display:flex"
    SetaEsquerda.style = "display:none"
}
