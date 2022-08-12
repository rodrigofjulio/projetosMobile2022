var salario = 2000.00;
var aumento = 0.15;
var inflacao = 0.07;

var novoSalario = salario + (aumento * salario);
//no periodo a inflação foi de 7%. Faça o cálculo abaixo para verificar a perda;

var novoSalarioInflacao = novoSalario - (inflacao * novoSalario);
//apresente a saída com console log para "novoSalario" "novoSalarioInflacao";

console.log(novoSalario);

console.log(novoSalarioInflacao);