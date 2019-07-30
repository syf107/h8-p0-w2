// 1. Melakukan Looping Menggunakan While
var looping1 = 0;
var looping2 = 20;

console.log("LOOPING PERTAMA");

while (looping1 < 20) {
    looping1 += 2;
    console.log(looping1 + " - I love coding");
}


console.log("LOOPING KEDUA");

while (looping2 > 0) {
    console.log(looping2 + " - I will become fullstack developer.");
    looping2 -= 2;
}



// 2. Melakukan Looping Menggunakan For

console.log("LOOPING PERTAMA");
for(var looping21 = 1; looping21 <= 20; looping21++) {
    console.log(looping21 + " - I love coding");
}

console.log("LOOPING KEDUA");
for(var looping21 = 20; looping21 > 0; looping21--) {
    console.log(looping21 + " - I will become fullstack developer");
}



// 3. Angka Ganjil dan Genap
var looping31 = 1;

console.log("LOOPING GANJIL GENAP");
while ( looping31 <= 100 ) {
    if(looping31 % 2 == 0) {
        console.log('"GENAP"');
    } else {
        console.log('"GANJIL"');
    }
    looping31++;
}

looping31 = 1;

console.log("LOOPING PERTAMBAHAN COUNTER 2");
while ( looping31 <= 100 ) {
    if(looping31 % 3 == 0) {
        console.log('"' + looping31 + ' KELIPATAN 3"');
    } else {
        console.log('""');
    }
    looping31 += 2;
}

looping31 = 1;

console.log("LOOPING PERTAMBAHAN COUNTER 5");
while ( looping31 <= 100 ) {
    if(looping31 % 6 == 0) {
        console.log('"' + looping31 + ' KELIPATAN 6"');
    } else {
        console.log('""');
    }
    looping31 += 5;
}

looping31 = 1;

console.log("LOOPING PERTAMBAHAN COUNTER 9");
while ( looping31 <= 100 ) {
    if(looping31 % 10 == 0) {
        console.log('"' + looping31 + ' KELIPATAN 10"');
    } else {
        console.log('""');
    }
    looping31 += 9;
}