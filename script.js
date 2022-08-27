const txtMensagem = document.querySelector("#txtMensagem");
const txtResultado = document.querySelector("#txtResultado");
const btnCriptografar = document.querySelector("#criptografar");
const btnDescriptografar = document.querySelector("#descriptografar");
const btnCopiar = document.querySelector("#btnCopiar");
const matriz = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
let textoDigitado;
let textoEncriptado;

btnCriptografar.addEventListener("click", criptografar);
btnDescriptografar.addEventListener("click", descriptografar);
btnCopiar.addEventListener("click", copiarTexto);


function criptografar() {
    textoDigitado = txtMensagem.value;
    for(let i = 0; i < matriz.length; i++){
        if(textoDigitado.includes(matriz[i][0])){
            textoDigitado = textoDigitado.replaceAll(matriz[i][0], matriz[i][1]);
        }
    }
    txtResultado.value = textoDigitado;
    apagarImg();
    mostrarBotaoCopiar();
}

function descriptografar() {
    textoDigitado = txtMensagem.value;
    for(let i = 0; i < matriz.length; i++){
        if(textoDigitado.includes(matriz[i][1])){
            textoDigitado = textoDigitado.replaceAll(matriz[i][1], matriz[i][0]);
        }
    }
    txtResultado.value = textoDigitado;
    apagarImg();
    mostrarBotaoCopiar();
}

function apagarImg() {
        txtResultado.style.backgroundImage = "none";
}

function mostrarBotaoCopiar() {
    document.querySelector(".div-btncopiar").style.display = "block";
}

function copiarTexto() {
    txtResultado.select();
    navigator.clipboard.writeText(txtResultado.value);
}