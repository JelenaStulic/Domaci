// Zadatak 5:

var cena=120;
var prečnik=32;
var radius=prečnik/2;
var površina=Math.pow(radius,2)*Math.PI;
var cenapocm2=cena/površina;
console.log(`Cena pizze po cm² je ${cenapocm2} dinara.`);
 
//Zadatak 6:

for(var i=0;i<=100;i++) {    
    if((i % 3 ==0) && (i % 5 == 0)) 
        {console.log(`FizzBuzz`);}
    if((i % 3 == 0) && (i % 5 != 0))
         {console.log(`Fizz`);}
    if((i % 3 != 0) && (i % 5 == 0)) 
        {console.log(`Buzz`);}
    if((i % 3 != 0) && (i % 5 != 0)) 
        {console.log(i);}
}

//Zadatak 7:

var n=5;
for(i=1;i<=n;i++){  
    console.log('#'.repeat(i));
}

// Zadatak 8:
var n = 5;
for (var i = 1; i <= n; i++) {
    var str = '';
    
    for (var j = 1; j <= (n- i); j++) {
      str += ' ';
    }
    
    for (var k = 1; k <= i; k++) {
      str += '#';
    }
    
    console.log(str);
  }

  //Zadatak 9

var n = 5;
for (var i = 1; i <= n; i++) {
    var str = '';
    
    for (var j = 1; j <= (n- i); j++) {
      str += ' ';
    }
    
    for (var k = 1; k <= i; k++) {
      str += '#';
    }
    str +=' ';
    for (var k = 1; k <= i; k++) {
        str += '#';
      }
    
    console.log(str);
  }