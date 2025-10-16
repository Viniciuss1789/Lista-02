const btnEx01 = document.querySelector("#ex01")
const btnEx02 = document.querySelector("#ex02")
const btnEx03 = document.querySelector("#ex03")
const btnEx04 = document.querySelector("#ex04")
const btnEx05 = document.querySelector("#ex05")
const btnEx06 = document.querySelector("#ex06")
const btnEx07 = document.querySelector("#ex07")
const btnEx08 = document.querySelector("#ex08")
const btnEx09 = document.querySelector("#ex09")
const btnEx10 = document.querySelector("#ex10")
const btnEx11 = document.querySelector("#ex11")
const btnEx12 = document.querySelector("#ex12")
const btnEx13 = document.querySelector("#ex13")
const btnEx14 = document.querySelector("#ex14")
const btnEx15 = document.querySelector("#ex15")
const btnEx16 = document.querySelector("#ex16")
const btnEx17 = document.querySelector("#ex17")
const btnEx18 = document.querySelector("#ex18")
const btnEx19 = document.querySelector("#ex19")
const btnEx20 = document.querySelector("#ex20")

function ex01() {
    let idade = parseInt(prompt("Digite sua Idade : "));
    if (idade >= 18) {
        alert("Você é maior de Idade")
    } else {
        alert("Você é menor de Idade")
    }
}
btnEx01.addEventListener('click', ex01)

function ex02() {
    let nome = prompt("Digite seu Nome: ")
    let idade = parseInt(prompt("Digite sua idade " + nome + " : "))

    let nome02 = prompt("Digite seu Nome: ")
    let idade02 = parseInt(prompt("Digite sua idade " + nome02 + " : "))

    if (idade > idade02) {
        alert(nome + " é a pessoa mais velha.")
    } else if (idade02 > idade) {
        alert(nome02 + " é a pessoa mais velha.")
    } else {
        alert("As duas pessoas tem a mesma idade. ")
    }
}
btnEx02.addEventListener('click', ex02)

function ex03() {
    let numero = parseInt(prompt("Digite um número : "))

    if (numero > 0) {
        alert(numero + " O número é positivo ")
    } else if (numero < 0) {
        alert(numero + " O número é negativo ")
    } else {
        alert(numero + " O número é Zero ")
    }
}
btnEx03.addEventListener('click', ex03)

function ex04() {
    let idade = parseInt(prompt("Digite sua idade : "))

    if (idade <= 10) {
        alert(idade + " você é uma criança ")
    } else if (idade <= 18) {
        alert(idade + " você é um adolecente ")
    } else if (idade <= 59) {
        alert(idade + " você é um adulto ")
    } else {
        alert(idade + " você é um idoso ")
    }
}
btnEx04.addEventListener('click', ex04)

function ex05() {
    let numero = parseInt(prompt("Digite um número : "))
    let numero02 = parseInt(prompt("Digite um número : "))

    if (numero > numero02) {
        alert(" O " + numero + " é o maior número ")
    } else if (numero02 > numero) {
        alert(" O " + numero02 + " é o maior número ")
    } else {
        alert(" Os número são iguais ")
    }
}
btnEx05.addEventListener('click', ex05)

function ex06() {
    let nota = parseInt(prompt("Digite a sua primeira nota : "))
    let nota02 = parseInt(prompt("Digite a sua segunda nota : "))
    let nota03 = parseInt(prompt("Digite a sua terceira nota : "))

    let media = (nota + nota02 + nota03) / 3

    if (media >= 7) {
        alert(media + " você foi aprovado. ")
    } else {
        alert(media + " você foi reprovado. ")
    }
}
btnEx06.addEventListener('click', ex06)

function ex07() {
    let numero = parseInt(prompt("Digite um número"))

    if (numero % 2 == 0) {
        alert(numero + " o número digitado é par")
    } else {
        alert(numero + " o número digitado é impar")
    }
}
btnEx07.addEventListener('click', ex07)

function ex08() {
    let salario = parseFloat(prompt("Digite o salário do funcionário: "))

    let bonus;

    if (salario > 2000) {
        bonus = salario * 0.10
    } else {
        bonus = salario * 0.05;
    }

    alert("O bônus do funcionário é de: R$" + bonus)
}
btnEx08.addEventListener('click', ex08)

function ex09() {

    const meses = {
        janeiro: 31,
        fevereiro: 28,
        março: 31,
        abril: 30,
        maio: 31,
        junho: 30,
        julho: 31,
        agosto: 31,
        setembro: 30,
        outubro: 31,
        novembro: 30,
        dezembro: 31
    };

    const mes = prompt("Digite o nome do mês:").toLowerCase().trim();

    if (meses.hasOwnProperty(mes)) {
        alert(`O mês de ${mes.charAt(0).toUpperCase() + mes.slice(1)} tem ${meses[mes]} dias.`);
    } else {
        alert("Mês inválido.");
    }


}
btnEx09.addEventListener('click', ex09)

function ex10() {
    let numero = parseInt(prompt("Digite um número : "))
    let numero02 = parseInt(prompt("Digite um outro número : "))
    let numero03 = parseInt(prompt("Digite mais um número : "))

    let numeros = [numero, numero02, numero03];

    numeros.sort(function (a, b) {
        return a - b;
    });

    alert("Números em ordem crescente: " + numeros.join(", "));
}
btnEx10.addEventListener('click', ex10)

function ex11() {
    let faltas = parseInt(prompt("Digite o número de faltas do aluno"))

    if (faltas > 15) {
        alert("aluno reprovado por faltas")
    } else {
        alert("aluno aprovado quanto as faltas")
    }
}
btnEx11.addEventListener('click', ex11)

function ex12() {
    const precos = {
        1: 10.00,
        2: 2.50,
        3: 5.00,
        4: 27.80
    };

    let codigo = parseInt(prompt("Digite o codigo do produto : "))
    let quantidade = parseInt(promt("Digite a quantidade dos produtos"))

    if (precos[codigo] !== undefined) {
        let total = precos[codigo] * quantidade;
        alert(`Valor total a pagar: R$ ${total.toFixed(2)}`);
    } else {
        alert("Código de produto inválido.");
    }
}
btnEx12.addEventListener('click', ex12)

function ex13() {
    let idade = parseInt(prompt("Digite sua idade:"));
    let sexo = prompt("Digite seu sexo (M para masculino ou F para feminino):");
    sexo = sexo.toUpperCase();

    if (sexo === "M") {
        if (idade >= 65) {
            alert("Você pode se aposentar.");
        } else {
            alert("Você ainda não pode se aposentar.");
        }
    } else if (sexo === "F") {
        if (idade >= 60) {
            alert("Você pode se aposentar.");
        } else {
            alert("Você ainda não pode se aposentar.");
        }
    } else {
        alert("Sexo inválido. Digite 'M' para masculino ou 'F' para feminino.");
    }
}
btnEx13.addEventListener('click', ex13)

function ex14() {
    let peso = parseFloat(prompt("Digite seu peso : "))
    let altura = parseFloat(prompt("Digite a sua altura : "))

    let imc = peso / (altura * altura)

    if (imc < 18.5) {
        classificacao = "Abaixo do peso";
    } else if (imc < 25) {
        classificacao = "Peso normal";
    } else if (imc < 30) {
        classificacao = "Sobrepeso";
    } else if (imc < 35) {
        classificacao = "Obesidade grau I";
    } else if (imc < 40) {
        classificacao = "Obesidade grau II";
    } else {
        classificacao = "Obesidade grau III";
    }

    alert(`Seu IMC é ${imc.toFixed(2)}\nClassificação: ${classificacao}`);
}
btnEx14.addEventListener('click', ex14)

function ex15() {
    const nome = prompt("Digite o nome do aluno:");
    const nota = parseFloat(prompt("Digite a nota do aluno:"));

    if (nota >= 7) {
        alert("Está APROVADO!");
    } else {
        alert("Está em RECUPERAÇÃO!");
    }
}
btnEx15.addEventListener('click', ex15)

function ex16() {
    const quantidade = parseInt(prompt("Digite o número de maçãs compradas:"));
    let precoPorMaca;

    if (quantidade < 12) {
        precoPorMaca = 0.50;
    } else {
        precoPorMaca = 0.40;
    }

    const total = quantidade * precoPorMaca;

    alert("Total a pagar: " + total);

}
btnEx16.addEventListener('click', ex16)

function ex17() {
    const salarioMinimo = parseFloat(prompt("Digite o valor do salário mínimo (R$):"));
    const salarioFuncionario = parseFloat(prompt("Digite o salário do funcionário (R$):"));

    const quantidade = salarioFuncionario / salarioMinimo;

    alert("O funcionário recebe: " + quantidade);
}
btnEx17.addEventListener('click', ex17)

function ex18() {
    const nome = prompt("Digite o nome do aluno:");
    const turno = prompt("Digite o turno (M para Matutino ou V para Vespertino):")

    if (turno === "M") {
        alert("Bom dia, " + nome);
    } else if (turno === "V") {
        alert("Boa tarde, " + nome);
    }
}
btnEx18.addEventListener('click', ex18)

function ex19() {
    const idade = parseInt(prompt("Digite sua idade:"));

    if (idade >= 18 && idade <= 70) {
        alert("O voto é OBRIGATÓRIO.");
    } else if ((idade >= 16 && idade < 18) || idade > 70) {
        alert("O voto é FACULTATIVO.");
    } else {
        alert("Você AINDA NÃO PODE votar.");
    }
}
btnEx19.addEventListener('click', ex19)

function ex20() {
    const num1 = parseInt(prompt("Digite o primeiro número:"));
    const num2 = parseInt(prompt("Digite o segundo número:"));
    const num3 = parseInt(prompt("Digite o terceiro número:"));

    const media = (num1 + num2 + num3) / 3;

    if (media >= 7) {
        alert("Situação: Aprovado" + media);
    } else {
        alert("nSituação: Reprovado" + media);
    }
}
btnEx20.addEventListener('click', ex20)