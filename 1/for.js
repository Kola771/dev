origine = [10, 25, 2, 10, 129, 25, 3];

let uniqueVal = (tableau) => {
    let arr1 = Array.from(tableau)
    arr1.sort((a, b) => b-a);
    let arr = new Set(arr1);
    return Array.from(arr);
}

let unique = (tableau) => Array.from(new Set(tableau)).sort((a, b) => b - a);

console.log("Tableau modifié avec la function uniqueVal", uniqueVal(origine));

console.log("Tableau modifié avec la function unique", unique(origine));

let mps = new Map([["nom", "ABOU"], ["prénoms", "Kadidjath"]]);
mps.set("greet", function(){});
console.log(mps);