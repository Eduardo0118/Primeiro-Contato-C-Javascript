function calculate() {
    var input = value.toUpperCase();
    var result = "";

    for(var i = 0; i<input.length; i++){ //Passa por cada caracter do input

        var posicaoDaLetraNoAlfabeto = input.charCodeAt(i)-64; //Identifica qual letra é do alfabeto
        var letraComDeslocamento = (posicaoDaLetraNoAlfabeto + key) % 26; //Faz o deslocamento de César e mantém dentro do alfabeto (26 letras)
        letraComDeslocamento = letraComDeslocamento == 0 ? 26 : letraComDeslocamento; //MOD retornar 0 caso o resultado seja 26, tem que tratar isso
        result += values[letraComDeslocamento-1]; //Faz -1 porque a letra 1 (A) está no índice 0 do teu array.
    }

    return result;
}

console.log(calculate())