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
const adicao = document.querySelector("#adicao");
const igual = document.querySelector("#igual")

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
    if (visor.value==""){
        visor.value += "Eu"
    } else if (visor.value=="Eu+"){
        visor.value += "Você"
    } else{
        visor.value += "Eu"
    }
    
})

btn2.addEventListener("click",function(){
    visor.value += "2"
})

btn3.addEventListener("click",function(){
    visor.value += "3"
})


c.addEventListener("click", function(){
    visor.value = "";
});

adicao.addEventListener("click", function(){
    visor.value += "+";
})

igual.addEventListener("click", function(){
    if (visor.value == "Eu+Você"){
        visor.value = "";
        visor.value += "Kennedy e Emilly = Amor eterno <3";
    } else{ 
        visor.value += none
    }
})





console.log("conectado!")
console.log(btn1)