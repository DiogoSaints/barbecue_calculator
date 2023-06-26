let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular() {
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let carnePorAdulto = carnePorPessoa(duracao);
    let carneTotal = adultos * carnePorAdulto + (carnePorAdulto / 2) * criancas;

    let cervejaPorAdulto = cervejaPorPessoa(duracao);
    let cervejaTotal = adultos * cervejaPorAdulto;

    let bebidasPorAdulto = bebidasPorPessoa(duracao);
    let bebidasTotal = adultos * bebidasPorAdulto + (bebidasPorAdulto / 2) * criancas;

    resultado.innerHTML = `<p>${carneTotal/1000} Kg Carne</p>`
                        + `<p>${Math.ceil(cervejaTotal/350)} Latas Cerveja</p>`
                        + `<p>${Math.ceil(bebidasTotal/2000)} Garrafas Bebidas</p>`;
}

function carnePorPessoa(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400;
    }
}

function cervejaPorPessoa(duracao) {
    if (duracao >= 6) {
        return 2000;
    } else {
        return 1200;
    }
}

function bebidasPorPessoa(duracao) {
    if (duracao >= 6) {
        return 1500;
    } else {
        return 1100;
    }
}
