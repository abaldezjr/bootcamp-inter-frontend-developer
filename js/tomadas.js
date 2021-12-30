let lines = gets().split("\n");
let line = lines.shift().split(' ');

//escreva aqui o seu código
let total = 0;
for(let i = 0; i < 4; i++){
  total += parseInt(line[i]);
}

console.log(total - 3);