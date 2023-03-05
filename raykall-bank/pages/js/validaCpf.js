export default function ehUmCpf (campo) {
    const cpf = campo.value.replace(/\.|-/g, "");
    if(validaNumerosRepetidos(cpf) || validaPrimeiroDigito(cpf) || validaSegundoDigito(cpf)){
     campo.setCustomValidity("esse cpf nao é valido") // setCustomValidity = a explicação foi tao bosta que fiquei sem entender como ele pega o setCustomValidity e faz um referencia a const mensagens = CustomError
    }
}


function validaNumerosRepetidos(cpf) {
    const numerosRepetidos = [
    '00000000000',
    '11111111111',
    '22222222222',
    '33333333333',
    '44444444444',
    '55555555555',
    '66666666666',
    '77777777777',
    '88888888888',
    '99999999999'
    ]

    return numerosRepetidos.includes(cpf)
}

function validaPrimeiroDigito(cpf){ // formula para verificar se o cpf vai ser verdadeiro
   let soma = 0;
   let multiplicador = 10;

   for(let tamanho = 0;tamanho < 9; tamanho++){
    soma += cpf[tamanho] * multiplicador;
    multiplicador--;
   }
   soma = (soma * 10) % 11; // % 11 -> é o modulo

   if(soma == 10 || soma == 11) {
    soma = 0;
   }

   return soma != cpf[9];
}

function validaSegundoDigito(cpf){
    let soma = 0;
    let multiplicador = 11;
 
    for(let tamanho = 0;tamanho < 10; tamanho++){
     soma += cpf[tamanho] * multiplicador;
     multiplicador--;
    }
    soma = (soma * 10) % 11; // % 11 -> é o modulo
 
    if(soma == 10 || soma == 11) {
     soma = 0;
    }
 
    return soma != cpf[10];
 }