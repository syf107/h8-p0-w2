//1. Menyusun Barisan Bintang
var rows1 = 3;
var asterisk = 0;
var bintang = "*";

while (asterisk < rows1) {
    console.log(bintang);
    asterisk++;
}


// 2. Menyusun Barisan Bintang Dengan Nested Looping
var rows2 = 3;
bintang = "";

for ( var asterisk = 0; asterisk < rows2; asterisk++){
    for (var bsterisk = 0; bsterisk < rows2; bsterisk++){
        bintang += "*";
    }
    console.log(bintang);
    bintang = "";
}




// 3. Menyusun Barisan Tangga Bintang Dengan Nested Looping

var rows3 = 3;
bintang = "*";

for ( var asterisk = 1; asterisk <= rows3; asterisk++){
    for (var asterisk = 1; asterisk <= rows3; asterisk++){
        console.log(bintang);
        bintang += "*";
    }
}