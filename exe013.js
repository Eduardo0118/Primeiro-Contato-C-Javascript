var agora = new Date()
var horas = agora.getHours()
console.log (`Agora são exatamente ${horas} horas.`)
if (horas <= 12 && horas > 6) {
    console.log ("Bom dia!")
} else if (horas >= 13 && horas <= 18) {
    console.log ("Boa tarde!")
} else if (horas >= 19 && horas <= 23){
    console.log ("Boa noite!")
} else {
    console.log ("Boa madrugada!")
}