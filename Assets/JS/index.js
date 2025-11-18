const botaoRolar = document.getElementById("botaoRandom")
const botaod6 = document.getElementById("botaoD6")
const botaod20 = document.getElementById("botaoD20")
const botaod4 = document.getElementById("botaoD4")
const inputPergunta = document.getElementById("perguntaComparar")
const resposta = document.getElementById("resposta")
const dados = document.querySelector(".dados")

// Funções de rolagem
function rolarDado20(){
    const random = Math.random() * (21 - 1) + 1;
    return parseInt(random)
}
function rolarDado6(){
    const random = Math.random() * (7 - 1) + 1;
    return parseInt(random)
}
function rolarDado4(){
    const random = Math.random() * (5 - 1) + 1;
    return parseInt(random)
}
// Caso nenhum dado seja escolhido, o container dos dados estará escondido

dados.style = "display:none"

// Eventos para os butões
botaod6.addEventListener("click", () => {
    dados.style = "display:flex"
    document.querySelector(".imagemDado").src = `Assets/IMGS/dice 6/dice6.png`
    botaoRolar.addEventListener("click", () =>{
        let numeroSorteado = rolarDado6()
        document.querySelector(".imagemDado").src = `Assets/IMGS/dice 6/dice${numeroSorteado}.png`
        if(inputPergunta.value >= numeroSorteado){
            resposta.innerHTML = "Você conseguiu!"
        }else{
            resposta.innerHTML = "Você não conseguiu :/"
        }
    })
})
botaod20.addEventListener("click", () => {
    dados.style = "display:flex"
    document.querySelector(".imagemDado").src = `Assets/IMGS/d20/D20 - 20.png`
    botaoRolar.addEventListener("click", () =>{
        let numeroSorteado = rolarDado20()
        document.querySelector(".imagemDado").src = `Assets/IMGS/d20/D20 - ${numeroSorteado}.png`
        if(inputPergunta.value >= numeroSorteado){
            resposta.innerHTML = "Você conseguiu!"
        }else{
            resposta.innerHTML = "Você não conseguiu :/"
        }
    
})})
botaod4.addEventListener("click", () => {
    dados.style = "display:flex"
    document.querySelector(".imagemDado").src = `Assets/IMGS/dice 4/dice4.png`
    botaoRolar.addEventListener("click", () =>{
        let numeroSorteado = rolarDado4()
        document.querySelector(".imagemDado").src = `Assets/IMGS/dice 4/dice${numeroSorteado}.png`
        if(inputPergunta.value >= numeroSorteado){
            resposta.innerHTML = "Você conseguiu!"
        }else{
            resposta.innerHTML = "Você não conseguiu :/"
        }
})})
