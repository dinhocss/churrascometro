/*
Carne - 400gr por pessoa / Mais de 6 horas - 650gr
Cerveja - 1200ml por pessoa / Mais de 6 horas - 2000mL
Refrigerante - 1000ml / Mais de 6 horas 1500mL

OBS: Crianças valem por 0.5
*/

let inputAdultos = document.querySelector(".adultos");
let inputCriancas = document.querySelector(".criancas");
let inputDuracao = document.querySelector(".duracao"); 

let resultado = document.querySelector(".resultado");


function calculo(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    if(duracao>=6){
        let qtdTotalCarne = 650*adultos + ((650/2)*criancas);
        let qtdTotalCerveja = 2000*adultos;
        let qtdTotalRefrigerante = 1500*adultos + ((1500/2)*criancas);    
        console.log(qtdTotalCarne + "g de carne");
        console.log(qtdTotalCerveja + "mL de cerveja");
        console.log(qtdTotalRefrigerante + "mL de refrigerante");
        resultado.innerHTML = `<p>${qtdTotalCarne/1000}kg de carne.`;
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/350)} latas de cerveja.`;
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalRefrigerante/2000)} garrafas de bebidas.`;
    }
    else{
        let qtdTotalCarne = 400*adultos + ((400/2)*criancas);
        let qtdTotalCerveja = 1200*adultos;
        let qtdTotalRefrigerante = 1000*adultos + ((1000/2)*criancas)
        console.log(qtdTotalCarne + "g de carne");
        console.log(qtdTotalCerveja + "mL de cerveja");
        console.log(qtdTotalRefrigerante + "mL de refrigerante");
        resultado.innerHTML = `<p>${qtdTotalCarne/1000}kg de carne.`;
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja/350)} latas de cerveja.`;
        resultado.innerHTML += `<p>${Math.ceil(qtdTotalRefrigerante/2000)} garrafas de bebidas.`;
    }


}
