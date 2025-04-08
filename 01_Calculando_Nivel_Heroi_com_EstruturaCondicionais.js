
let nomeHeroi = "Guerreiro Ascendente"
let quantidadeXP = 8.500
let nivelHeroi;

if(quantidadeXP < 1.000){
    nivelHeroi = "Ferro"
}
else if (quantidadeXP >= 1.001 && quantidadeXP <= 2.000){
nivelHeroi = "Bronze"
}
else if(quantidadeXP >= 2.001 && quantidadeXP <= 5.000){
    nivelHeroi = "Prata"
}
else if(quantidadeXP >= 5.001 && quantidadeXP <= 6.000){
    nivelHeroi = "Ouro"
}
else if(quantidadeXP >= 6.001 && quantidadeXP <= 8.000){
    nivelHeroi = "Platina / Diamante"
}
else if(quantidadeXP >= 8.001 && quantidadeXP <= 9.000){
    nivelHeroi = "Ascendente"
}
else{ quantidadeXP > 9.000
    nivelHeroi = "Imortal"
}

console.log("O Herói nomeado de " + nomeHeroi + " alcançou o nivel de " + nivelHeroi + ". Ele está há um passo de se tornar o 'Imortal' deste mundo!")
console.log(" ")
