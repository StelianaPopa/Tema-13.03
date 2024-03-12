
// 1. Sa se creeze o functie care primeste trei parametrii ( d, e și f ) si returneaza produsul lor

let produsDintre = (a, b, c) => {
    return a * b * c;
};
console.log(produsDintre(10, 20, 5));

// 2. Sa se creeze o functie care primeste un parametru ( x ) si returneaza diferența lui cu 10. De exemplu dacă x = 16, funcția sa returneze 6

let lessWith10 = (x) => {
    return x - 10;
};
console.log(lessWith10(35));

// 3. Sa se creeze o functie care primeste un parametru ( a ) si returneaza opusul lui. De exemplu dacă a este 7 funcția sa returneze -7.

let opusulLui = (a) => {
    return 0 - a;
};
console.log(opusulLui(7));

// 4. Sa se creeze o functie care primeste doi parametrii ( x si y ) si returneaza diferenta lor inmultita cu 2. Ex: dacă x = 24, y = 4, funcția sa returneze valoarea 40, adica (24 - 4) * 2

let calculeazaDiferentaOri2 = (x, y) => {
    return (x - y) * 2;
}
console.log(calculeazaDiferentaOri2(24, 4));

// 5. Sa se creeze o functie care primeste un parametru ( notaMea ) si returneaza “Promovat” dacă valoarea parametrului este peste 5 ( inclusiv ), în caz contrar returnează “Picat”

let stareStudent = (notaMea) => {
    if (notaMea >= 5) {
        return "Promovat";
    } else {
        return "Picat";
    };
};
console.log(stareStudent(10));
console.log(stareStudent(4));

// 5. Sa se creeze o functie care primeste un parametru ( notaMea ) si returneaza “Promovat” dacă valoarea parametrului este peste 5, returneaza "la limita bro" daca valoarea parametrului este 5, în caz contrar returnează “Picat”

let stareStudent2 = (notaMea) => {
    if (notaMea > 5) {
        return "Promovat";
    } else if (notaMea === 5) {
        return "La limita bro";
    } else {
        return "Picat";
    };
};
console.log(stareStudent2(5));
console.log(stareStudent2(3));
console.log(stareStudent2(8));

// 6. Sa se creeze o funcție care primeste doi parametrii ( a si b ) și dacă diferența lor ( a - b ) este mai mare decât 10, atunci sa returneze true, altfel false.

let diferentaBiggerThan10 = (a, b) => {
    if (a - b > 10) {
        return true;
    } else {
        return false;
    };
};
console.log(diferentaBiggerThan10(20, 15));
console.log(diferentaBiggerThan10(25, 10));

// 7. Sa se creeze o funcție care primeste doi parametrii ( a si b ) și dacă cele doua numere sunt egale sa se returneze true, altfel false.

let suntEgale = (a, b) => {
    if (a === b) {
        return true;
    } else {
        return false;
    };
};
console.log(suntEgale(25, 10));
console.log(suntEgale(15, 15));

// 8. Sa se creeze o funcție care primeste doi parametrii ( a si b ) și dacă este a mai mare decat b, atunci sa se returneze a, altfel b.

let careEsteMaiMare = (a, b) => {
    if (a > b) {
        return a;
    } else {
        return b;
    };
};
console.log(careEsteMaiMare(10, 5));
console.log(careEsteMaiMare(10, 15));

// 9. Sa se creeze un array cu 3 elemente. Puteti sa il denumiti "primulMeuArray". Apoi:

let primulMeuArray = ["Cana", "Farfurie", "Pahar"];
console.log(primulMeuArray);

// - sa se afiseze in consola elementul de pe indexul 2
console.log(primulMeuArray[2]);

// - sa se stearga elementul de pe indexul 2
primulMeuArray.splice(2, 2);

// - sa se afiseze in consola tot array-ul
console.log(primulMeuArray);

// - sa se adauge in array inca un element
primulMeuArray.push("Furculita");

// - sa se afiseze in consola tot array-ul
console.log(primulMeuArray);

// - sa se stearga elementul nou adaugat
primulMeuArray.splice(2, 2);

// - sa se afiseze in consola tot array-ul
console.log(primulMeuArray);