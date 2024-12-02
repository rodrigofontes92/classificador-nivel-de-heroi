var heroName = ""
var heroExp = 0
var heroLevel

if (heroExp >= 0 && heroExp <= 1000) {
    heroName = "Ferrugem, o Medíocre,"
    heroLevel = "Ferro"
    console.log("O Herói de nome " + heroName + " está no nível de " + heroLevel)
} else if (heroExp >= 1001 && heroExp <= 2000) {
    heroName = "Jaime Coxa de Frango"
    heroLevel = "Bronze"
    console.log("O Herói de nome " + heroName + " está no nível de " + heroLevel)
} else if (heroExp >= 2001 && heroExp <= 5000) {
    heroName = "Escudeiro Peter Parker"
    heroLevel = "Prata"
    console.log("O Herói de nome " + heroName + " está no nível de " + heroLevel)
}   else if (heroExp >= 5001 && heroExp <= 7000) {
    heroName = "Boromir, Não Aquele,"
    heroLevel = "Ouro"
    console.log("O Herói de nome " + heroName + " está no nível de " + heroLevel)
}   else if (heroExp >= 7001 && heroExp <= 8000) {
    heroName = "Passonormal, irmão menos famoso de Passolargo"
    heroLevel = "Platina"
    console.log("O Herói de nome " + heroName + " está no nível de " + heroLevel)
}   else if (heroExp >= 8001 && heroExp <= 9000) {
    heroName = "Sir Lancelot de Oliveira"
    heroLevel = "Ascendente"
    console.log("O Herói de nome " + heroName + " está no nível de " + heroLevel)
}   else if (heroExp >= 9001 && heroExp <= 10000) {
    heroName = "Morre Praga"
    heroLevel = "Imortal"
    console.log("O Herói de nome " + heroName + " está no nível de " + heroLevel)
}   else if (heroExp < 0) {
    console.log("Valor inválido")
}   else {
    heroName = "Rogério Ceni"
    heroLevel = "Radiante"
    console.log("O Herói de nome " + heroName + " está no nível de " + heroLevel)
};