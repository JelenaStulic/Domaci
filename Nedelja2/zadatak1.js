// Zadatak 1:

var a = 3;
var b = 4;
​
var zbir = a + b;
var razlika = a - b;
var proizvod = a * b;
var kolicnik = a / b;
var ostatak = a % b;
var stepen = Math.pow(a, b);
​
console.log( `Rezultati ${a} i ${b}: 
--zbir je: ${zbir}
--razilika je: ${razlika}
--proizvod je: ${proizvod}
--kolicnik je: ${kolicnik},
--ostatak pri deljenju je: ${ostatak}
--stepen a^b je: ${stepen}`);

//zadatak 3
var n = 20;
​
if(n % 3 == 0) {
    console.log(`broj ${n} je deljiv sa 3`);
}
else {
    console.log(`broj ${n} nije deljiv sa 3`);
}

//zadatak 4
var x = 1000; //prvih n brojeva deljivih sa 5
var y = 5; //sa kojim brojem je deljivo
var brojac = 0; //broji svaki broj koji je deljiv sa 5
console.log(`Prvih ${x} brojeva deljivih sa ${y}: `)
​
for(var a=0;brojac<x;) {
    if(x % y == 0) {
        console.log(x);
        brojac++;
    }
    a++;    
} 












