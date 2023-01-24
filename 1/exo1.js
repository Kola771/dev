
// let noms, nomss, nomh, nomt, pnoms, pnomss, pnomt, pnomh;
// let nom = window.prompt("Entrez votre nom");
// let prenom = window.prompt("Entrez vos prénoms");
// let n = nom.length;
// let p = prenom.length;

// nomh = nom.trim();
// pnomh = prenom.trim();
// nomt = nomh.toLowerCase();
// pnomt = pnomh.toLowerCase();
// noms = nomt.slice(0, 1).toUpperCase();
// nomss = nomt.slice(1, n);
// pnoms = pnomt.slice(0, 1).toUpperCase();
// pnomss = pnomt.slice(1, p);

// let all = (noms + nomss) + " " + (pnoms + pnomss);
// let alls = noms + pnoms;

// document.write(all + "<br>" + alls);

let array = [1, 22, 50, 74, 3, 5, 7, 11, 13, 17, 19, 23];

function double(arr) {
    let newArray = [];
    for (let i = 0; i < arr.length; i++) {
        newArray.push(arr[i] * 2);
    }
    return newArray;
}

function filter(tableau) {
    let newArrays = [];
    for (let i = 0; i < tableau.length; i++) {
        if(tableau[i]%2 === 0) {
            newArrays.push(tableau[i]);
        };
    }
    return newArrays;
}

let filtrer = (tableau) => {
    let newArrays = [];
    for (let i = 0; i < tableau.length; i++) {
        if (tableau[i] % 2 === 0) {
            newArrays.push(tableau[i]);
        };
    }
    return newArrays;
}
console.log("function map()", array.map(valeurs => valeurs * 2))
console.log(filter(array));
console.log("function flèchée", filtrer(array));;

// array.splice(0, 0, 'koladé');
console.log(double(array));

let mutiply = nbre => nbre**2;
console.log(mutiply(5));

let add = (num1, num2) => num1 + num2;
console.log(add(5, 6));

let table = ["john", "ali", "muhammad"];

let transform = (array1) => {
    let newArrays = [];
    for (let i = 0; i < array1.length; i++) {
        newArrays.push(array1[i].toUpperCase());
    }
    return newArrays;
}
console.log(transform(table));
console.log("Function map()", table.map(values => values.toUpperCase()));


let table1 = [1, 2, 4, 7];

let transform1 = (array2) => {
    let newArrays = 0;
    for (let i = 0; i < array2.length; i++) {
        newArrays += array2[i];
    }
    return newArrays;
}

console.log(transform1(table1))

let somme = table1.reduce((x,y) => x + y, 0);
console.log("function reduce", somme)
