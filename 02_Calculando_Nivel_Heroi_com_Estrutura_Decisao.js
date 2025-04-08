// Usando Laço de Repetição

nomeHeroi = "Arqueiro Falcão"
quantidadeXP = 6.200
nivelHeroi = "Indefinido"

for(let i = 0; nivelHeroi === "Indefinido"; i++){
    switch(true) {
        case quantidadeXP < 1.000:
            nivelHeroi = "Ferro"
            break

            case quantidadeXP <= 2.000:
            nivelHeroi = "Bronze"
            break

            case quantidadeXP <= 5.000:
            nivelHeroi = "Prata"
            break

            case quantidadeXP <= 6.000:
            nivelHeroi = "Ouro"
            break

            case quantidadeXP <= 8.000:
            nivelHeroi = "Platina / Diamante"
            break

            case quantidadeXP <= 9.000:
            nivelHeroi = "Ascendente"
            break

            case quantidadeXP > 9.000:
            nivelHeroi = "Imortal"
            break

    }
}

console.log("O herói conhecido por " + nomeHeroi + " alcançou o nível de " + nivelHeroi + " . Entretanto, ainda falta algumas etapas em sua jornada até o topo.")
