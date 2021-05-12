// Ejercicio 1

let a = 12
let b = 24
let c = 64

let num_list  = [a,b,c];
    maximo = 0;

for(var i=0,len=num_list .length;i<len;i++){
    if(maximo < num_list [i]){
        maximo = num_list [i];
    }
}
console.log(maximo);
