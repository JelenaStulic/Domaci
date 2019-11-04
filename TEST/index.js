/*1. Napisati program koji racuna vrednost sledeceg izraza:


2. Napisati program koji racuna prosek brojeva deljivih sa 7 u intervalu od M do N uključujući M i N
3.
        *
     *     *
  *           *
*                *
  *           * 
     *      *
         *
Za N=4
Alternativno:
   Do pola slike.
4.Koliko zadati mesec ima dana, Postoji boolean koji govori da li je godina prestupna.
*/

// zadatak 4
let month = "April";
var godina = 2019;
switch (month){
    case 1: month="January";
        break;
    case 2: month="February";
        break;
    case 3: month= "March";
        break;
    case 4: month= "April";
        break;
    case 5: month= "May";
        break;
    case 6: month= "June"; 
        break;
    case 7: month= "July";
        break;
    case 8: month= "August";
        break;
    case 9: month= "September";
        break;
    case 10: month= "October";
        break;
    case 11: month= "November";
    break;
        case 12: month= "December";
            break;
        }

if((month==4) && (godina%400===0)){

    console.log(`Zadati mesec je ${month}`);
}



// zadatak 2
var m = 10;
var n = 20;
var sum=0;

for (counter=m; counter<=n; counter++) {
 if (counter%7==0) {
     sum= sum+ counter*counter;
 }
     avg = sum / 11;
 console.log(avg);
}

//zadatak 3:

x=4;
for ( i=1; i<=x; i++) { // razmak
var str= '';
for ( j=1; j<x-i; j++) {
    str = str + ' ';
}
while (k != (2*x -1)) {
    if (k==0 || k==2*x-2) {
    str += '*';
    }else{var str = str + ' ';
    k++;
}
k=0; // sl red
}
}
x--;

for (i=x; i>=1; i--) {
var str = ' ';    //razmak
    for (j=0; j<=n-i; j++) {
        str=str + ' ';
    }
    //konz
    k=0;
    while (k!=(2*i-1)) {
        if (k==0 || k==2*i-1)
        str += '*'
    else 
    var str = str + ' ';
    k++;
    }
    console.log(str);
    }
