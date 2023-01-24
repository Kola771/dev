
// let caractere = "kola";
 
// function reverse(caractere) {
//    let arr = []; 
//    let length = caractere.length - 1;
//    for (let i = 0; i < caractere.length; i++) {
//     arr.push(caractere[length]);
//     length--;
//    }
//    return arr.join("");
// }
// console.log(reverse(caractere));

// function reverse(caractere) {
//    let arr = []; 
//    for (let i = caractere.length - 1; i >= 0; i--) {
//     arr.push(caractere[i]);
//    }
//    return arr.join("");
// }
// console.log(reverse(caractere));

// function reverse(caractere) {
//    let arr = ""; 
//    for (let i = caractere.length - 1; i >= 0; i--) {
//     arr += caractere[i];
//    }
//    return arr;
// }
// console.log(reverse(caractere));

// function reverse(caractere) {
//   return caractere.split('').reverse().join('');
// }
// console.log(reverse(caractere));

// let renverser = caractere => caractere.split('').reverse().join('');
// console.log(renverser(caractere));


function firstUppercase(phrase) {
let tableau = phrase.split(" ");
let art = [];
for (let i = 0; i < tableau.length; i++) {
  art.push(tableau[i].charAt(0).toUpperCase() + tableau[i].slice(1).toLowerCase());
}
return art.join(" ");
}
console.log(firstUppercase("kola kola"));


let firstUppercase1 = (phrase1) => phrase1.toLowerCase().split(" ").map((valeur) => valeur.charAt(0).toUpperCase() + valeur.slice(1)).join(" ");

console.log(firstUppercase1("kola kola"));

console.log("=============================");

function longestWord(string) {
let tab = string.split(" ");
let taille = 0;
for (let i = 0; i < tab.length; i++) {
  if(taille < tab[i].length) {
    taille = tab[i].length;
  } 
}
return taille;
}
console.log("Taille du plus grand caractère", longestWord("Bonjour tout le monde"));
console.log("=============================");


let azerty = [20, 32, 97];
function largestnumber(string) {
let taille = 0;
for (let i = 0; i <string.length; i++) {
  if(taille < string[i]) {
    taille = string[i];
  } 
}
return taille;
}
console.log("Le plus grand nombre", largestnumber(azerty));


let largestnumber1 = (arr) => Math.max(...arr);
console.log("Autre méthode", largestnumber1(azerty));


let largestnumber2 = (arr) => arr.sort((a, b) => a - b)[arr.length - 1];
console.log("Une autre méthode", largestnumber2(azerty));
console.log("=============================");


let confirmEnd = (string, end) => {
  let repeter = string.split("").reverse();
   if(repeter[0] === end) {
    return true;
   }
   return false;
}
console.log("Pas trop free", confirmEnd("bonjour", "r"));


let confirmEnd2 = (string, end) => string.endsWith(end);
console.log("Autre méthode", confirmEnd2("bonjour", "our"));


let confirmEnd3 = (string, end) => string.slice(-end.length) === end;
console.log("Une autre méthode", confirmEnd3("bonjour", "jour"));
console.log("=============================");


let truncate1 = (str, num) => {if(str.length>num){return str.slice(0, num).concat("...");} return str; };
console.log(truncate1("bonjour à tous", 5));
console.log("=============================");


num = [1, 3, 5, 8, 9, 10];
let filter = (num) => {
  let newArrays = [];
  for (let i = 0; i < num.length; i++) {
      if(num[i]%2 === 0) {
          newArrays.push(num[i]);
      };
  }
  return newArrays[0];
}
console.log("Modulo", filter(num));

let findElement = (arr,callback) => arr.filter(callback)[0]
console.log("Autre méthode", findElement([1, 3, 5, 8, 9, 10], function(num) { return num % 2 === 0; }));
console.log("=============================");


function repeat (repeat, nbre) {
    let repeter = ""
    for (let i = 0; i < nbre; i++) {
       repeter += repeat;
    }
    return repeter;
}
console.log(repeat("kola", 5));


let repeat1 = (str, num) => str.repeat(num);
console.log(repeat1("Bonjour", 5))
console.log("=============================");


// let factorial = (number) => {
//     if (number <= 1) {
//       return 1;
//     } else {
//       return number * factorial(number - 1);
//     }
//   };
// console.log(factorial(5));

let facto = (num) => {
  let tabb = 1;
  for (let i = 1; i <= num; i++) {
    tabb = tabb * i;
  }
  return tabb;
}
console.log("Autre méthode", facto(5));


let facteur = (num) => Array.from({length : num}, (el, i) => i + 1).reduce((a, b) => a * b);
console.log("Une autre méthode", facteur(5))
console.log("=============================");;


  let array3 = [1, 2, 3];
  let array4 = [4, 5];
  function frankenSplice(arr1, arr2, index) {
    let newArray = [];
    for (let i = 0; i < arr2.length; i++) {
        newArray.push(arr2[i]);
    }
    for (let i = arr1.length - 1; i >= 0; i--) {
        newArray.splice(index, 0, arr1[i]);
    }
    return newArray;
}
console.log(frankenSplice(array3,array4,1));

// function frankenSplice1 (arr1, arr2, index) {
//   let newArr1 = arr1.slice(0, arr1.length);
//   let newArr2 = arr2.slice(0, arr2.length);
//    newArr2.splice(index, 0, newArr1);
//    return newArr2;
// }
// console.log(frankenSplice1(array3, array4, 1));
console.log("=============================");


  let array5 = ["a", "b", "c"];
  function franken(arr5) {
    let newArray = [];
    for (let i = 0; i < arr5.length; i++) {
        if(typeof arr5[i] !== "boolean" && arr5[i] !== "" && typeof arr5[i] !== "undefined" && arr5[i] !== 0) {
            newArray.push(arr5[i]);
        }
    }
    return newArray;
}
console.log(franken(array5));
console.log("=============================");


let array = Array.from("0123456789");
console.log(array);
console.log("Avec map()", array.map(values => Number(values)))

console.log("Directement avec une function", Array.from("0123456789", values => Number(values)));

console.log("Transformer un objet en tableau avec la méthode Array.from()", Array.from({length: 10}, (el, i) => i));


 let suiteNumerique = (num) => {
  let array = [];
  for (let i = 0; i <= num; i++) {
    array.push(i);
  }
  return array;
}
console.log("Function", suiteNumerique(10));


let range = (num) => Array.from({length: num+1}, (el, i) => i);
console.log("Avec Array.from() et une function", range(10));


let ranges = (min, max) => Array.from({length: (max - min) + 1}, (el, i) => min + i);
console.log("Avec Array.from() et une function pour trouver les nombres comprisent entre deux valeurs", ranges(10, 15));


let table0 = [1, 2, 5, 7, 8];
let table10 = [9, 87, 41];
console.log([...table0, ...table10]);


let sumRest = (...arg) => arg.reduce((x, y) => x + y, 0);
console.log("Somme des nombre avec la fonction sumRest sumRest(4, 5, 6)", sumRest(4, 5, 6));

function quebert(...valeurs) {
  return valeurs.reduce(function(precedent, suivant) {
    return precedent + suivant;
  })
}
console.log("Function", quebert(1, 2, 3, 4));

let tableau = [];
let calcul = (art) => {
do {
     n = window.prompt("Entrez le nombre de valeurs que vous voulez");
}
while (isNaN(n));

for (let i = 0; i < n; i++) {
    let k = window.prompt("Entrez le nombre " +`${i+1}`);
    tableau.push(k);
}
return art;
}

console.log(calcul(tableau));

let sumReste = (...arg) => arg.reduce((x, y) => x + y, 0);

document.getElementById("affichage0").innerHTML = "Vous avez entré ces valeurs: " + tableau.join(' ');
document.getElementById("affichage1").innerHTML = "L'opération: " + tableau.join('+');
document.getElementById("affichage").innerHTML = "Résultats: " +sumReste(...tableau.map(values => Number(values)));

let a = 'bonjour'


a.forEach(element => {
 console.log(element); 
});