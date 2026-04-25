const visor = document.querySelector("#visor");
const botoes = document.querySelectorAll("#numero");
const c = document.querySelector("#apagar");
const btn7 = document.querySelector("#btn7");
const btn8 = document.querySelector("#btn8");
const btn9 = document.querySelector("#btn9");
const btn4 = document.querySelector("#btn4");
const btn5 = document.querySelector("#btn5");
const btn6 = document.querySelector("#btn6");
const btn1 = document.querySelector("#btn1");
const btn2 = document.querySelector("#btn2");
const btn3 = document.querySelector("#btn3");
const btn0 = document.querySelector("#btn0");
const adicao = document.querySelector("#adicao");
const subtracao = document.querySelector("#subtracao")
const multiplicacao = document.querySelector("#multiplicacao")
const divisao = document.querySelector("#divisao")
const ponto = document.querySelector("#ponto");
const igual = document.querySelector("#igual")
const deletar = document.querySelector("#deletar")


btn7.addEventListener("click",function(){
    visor.value += "7"
})

btn8.addEventListener("click",function(){
    visor.value += "8"
})

btn9.addEventListener("click",function(){
    visor.value += "9"
})

btn4.addEventListener("click",function(){
    visor.value += "4"
})

btn5.addEventListener("click",function(){
    visor.value += "5"
})

btn6.addEventListener("click",function(){
    visor.value += "6"
})

btn1.addEventListener("click",function(){
    visor.value += "1"
    
})

btn2.addEventListener("click",function(){
    visor.value += "2"
})

btn3.addEventListener("click",function(){
    visor.value += "3"
})

btn0.addEventListener("click",function(){
    visor.value += "0"
})


c.addEventListener("click", function(){
    visor.value = "";
});

adicao.addEventListener("click", function(){
    visor.value += "+";
})

subtracao.addEventListener("click", function(){
    visor.value += "-";
})

multiplicacao.addEventListener("click", function(){
    visor.value += "x";
})

ponto.addEventListener("click", function(){
    visor.value += ".";
})


divisao.addEventListener("click", function(){
    visor.value += "\u00F7";
})

deletar.addEventListener("click", function () {
    visor.value = visor.value.slice(0, -1);
})

igual.addEventListener("click", function(){
    let conta = visor.value
        .replace(/÷/g, "/")
        .replace(/x/g, "*");
    visor.value = eval (conta)
})




console.log("conectado!")
