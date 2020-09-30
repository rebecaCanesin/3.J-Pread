const nomeUsuario = prompt("Digite seu nome para começar");

let mensagem = document.getElementById("mensagemBoasVindas");

mensagem.innerHTML = "Olá, " + nomeUsuario

const inicio = prompt("Deseja começar? Use o número correspondente a sua resposta 1) Sim 2) Não");

let certo1 = 0
let certo2 = 0
let certo3 = 0
let errado1 = 0
let errado2 = 0
let errado3 = 0

if(inicio == 2){
    alert ("Até a próxima!")
} else {
        let resposta1 = prompt("Pergunta 1: O HTML é uma liguaguem de:    1) Programação  2) Marcação  3) Estilização") //resposta 2 certa
        if(resposta1 == 2){
        certo1 = certo1 + 1
        } else {
        errado1 = errado1 + 1
        } 

    let resposta2 = prompt("Pergunta 2: Sobre o Javascript:   1) É uma linguagem de programação fracamente tipada.   2) É uma linguagem de programação fortemente tipada. 3) É uma linguagem de marcação fracamente tipada") //resposta 1 certa
    if(resposta2 == 1){
        certo2 = certo2 + 1 
    }else {
        errado2 = errado2 + 1
    }
    let resposta3 = prompt("Pergunta 3: Qual dessas opções abaixo corresponde a estilização de uma página Web?  1) CSS  2) HTML 3) Javascript") //resposta 1 certa
    if(resposta3 == 1){
        certo3 = certo3 + 1
    } else {
        errado3 = errado3 + 1
    } 
}
 //--------------------TELA DE RESPOSTA

 
   let certas1 = document.getElementById("respostasCertas1");
   let certas2 = document.getElementById("respostasCertas2");
   let certas3 = document.getElementById("respostasCertas3");
   let erradas1 = document.getElementById("respostasErradas1");
   let erradas2 = document.getElementById("respostasErradas2");
   let erradas3 = document.getElementById("respostasErradas3");

if(certo1 == 0){
    erradas1.innerHTML = "Pergunta 1 errada" ;
}else{
    certas1.innerHTML = "Pergunta 1 certa";
}

if(certo2 == 0){
    erradas2.innerHTML = "Pergunta 2 errada";
}else{
    certas2.innerHTML = "Pergunta 2 certa";
}    

if(certo3 == 0){
    erradas3.innerHTML = "Pergunta 3 errada";
}else{
    certas3.innerHTML = "Pergunta 3 certa";
}