//1. Написати функцију која враћа максимум од 3 броја (уносе се 3 броја)
function maxOf3Numbers(a,b,c) {
    if(a>b && a>c) {
        return a
    }else if (b>a && b>c) {return b
    } else //if(c>a && c>b)
    {
        return c
    }
   }
   console.log(maxOf3Numbers(11,6633,22));


//2. Написати функцију која израчунава цену пице по квадратном центиметру (уносе се цена и полупречник)


function Pricepercm2(cena,radius) {
    let povrsina=3.14*(radius*radius)
    let x=cena/povrsina;
    return x
}
console.log(Pricepercm2(1000,16));


