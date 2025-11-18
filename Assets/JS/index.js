const botaoRolar = document.getElementById("botaoRandom")


function rolarDado(){
    const random = Math.random() * (20 - 1) + 1;
    return parseInt(random)
}

botaoRolar.addEventListener("click", () =>{
    document.querySelector(".imagemDado").src = `Assets/IMGS/d20/D20 - ${rolarDado()}.png`
})