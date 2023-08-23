function calcularIMC(){
    let peso = document.getElementById("peso").value;
    let altura = String(document.getElementById("altura").value);

    // Checar se tem vírgula e trocá-la.
    for(i = 0; i <= altura.length; i++){
        if(altura[i] == ","){
            altura = altura.replace(",", ".");
        }
    }

    // Checar se pôs em cm
    let emM = altura.includes(".");

    altura = Number(altura);
    if(emM == false){
        altura = altura / 100;
    }

    var resultStyle = document.getElementById("resultadoID");

    console.log("O peso é: "+peso +"kg");
    console.log("A altura é: "+altura +"m");
    console.log(typeof altura)

    let imc = peso / (altura*altura);

    console.log("O imc é: "+imc);

    if(imc < 18.5){
        document.getElementById("resultadoID").innerHTML = "Abaixo do Peso  Seu IMC é: " +Math.round(imc, -1);
        resultStyle.style.color = "#ff0000";
    }
    else if(imc >= 18.5 && imc <= 24.9){
        document.getElementById("resultadoID").innerHTML = "Peso Normal  Seu IMC é: " +Math.round(imc, -1);
        resultStyle.style.color = "#008000";
    }
    else if(imc >= 25 && imc <= 29.9){
        document.getElementById("resultadoID").innerHTML = "Acima do Peso  Seu IMC é: " +Math.round(imc, -1);
        resultStyle.style.color = "#ffa500";
    }
    else if(imc >= 30 && imc <= 34.9){
        document.getElementById("resultadoID").innerHTML = "Obesidade grau I – Seu IMC é: " +Math.round(imc, -1);
        resultStyle.style.color = "#a56b00";
    }
    else if(imc >= 35 && imc <= 39.9){
        document.getElementById("resultadoID").innerHTML = "Obesidade grau II – Seu IMC é: " +Math.round(imc, -1);
        resultStyle.style.color = "#664200";
    }
    else if(imc >= 40){
        document.getElementById("resultadoID").innerHTML = "Obesidade grau III – Seu IMC é: " +Math.round(imc, -1);
        resultStyle.style.color = "#352200";
    }
}