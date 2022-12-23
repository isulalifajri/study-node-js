function kotak(panjang_) {
    let hasil_ = '';
    for (let a = 0; a < panjang_; a++) {
        for (let b = 0; b < panjang_; b++) {
            hasil_ += '* ';
        }
        hasil_ += '\n';
    }
    return hasil_;
}
console.log(kotak(10));


//animasi 1
function piramida(tinggi){
    var s = '';
    // var tinggi = 9;
    for(var baris = 1; baris <= tinggi; baris++){
        for(var i = 1; i <= tinggi - baris; i++){
            s += ' ';
            }
            for(var j = 1; j < 2 * baris; j++){
            s += '*';
        }
    s += '\n';   
    }
    return s;
}
console.log(piramida(9));

//animasi 2
function segitiga__(b1){
    var s1 = '';
    for(var baris = 1; baris <= b1; baris++){
        for(var i = 1; i < baris; i++){
            s1 += ' ';
            }
            for(var j = i; j <= 2 * b1 - i; j++){
            s1 += '*';
        }
    s1 += '\n';   
    }
    return s1;
}
console.log(segitiga__(9))

//animasi ke 3

function segitiga(panjang) {
    let hasil = '';
    for (let i = 0; i < panjang; i++) {
        for (let j = 0; j <= i; j++) {
            hasil += '* ';
        }
        hasil += '\n';
    }
    return hasil;
}
console.log(segitiga(10))

//animasi ke 4

function segitiga1(panjang1) {
    let hasil1 = '';
    for (let s = 0; s < panjang1; s++) {
        for (let k = panjang1; k > s; k--) {
            hasil1 += '* ';
        }
        hasil1 += '\n';
    }
    return hasil1;
}
console.log(segitiga1(10))

//animasi ke 5
function animate1(tinggi1){
    var hsl = '';
    for (var a = 1; a <= tinggi1; a++ ){
        for(var b = tinggi1; b <= 2 * tinggi1-a ; b++){
            hsl += '';
        }
        for(var c = 1; c <= b ; c++){
            hsl += '*';
        }
        hsl += '\n';
    }
    return hsl;
}
console.log(animate1(10))

//animasi ke 6
function animate2(tinggi2){
    var hsl = '';
    for (var a = 1; a <= tinggi2; a++ ){
        for(var b = tinggi2; b <= 2 * tinggi2 - a ; b++){
            hsl += '';
        }
        for(var c = a; c <= tinggi2 ; c++){
            hsl += '*';
        }
        hsl += '\n';
    }
    return hsl;
}
console.log(animate2(10))


//animasi ke 7
function animate3(tinggi3){
    var hsl = '';
    for (var a = 1; a <= tinggi3; a++ ){
        for(var b = a; b <= tinggi3 - a ; b++){
            hsl += '';
        }
        for(var c = b; c <= 2 * tinggi3 - b; c++){
            hsl += '*';
        }
        hsl += '\n';
    }
    return hsl;
}
console.log(animate3(10))

//animasi ke 8
function animate4(tinggi4){
    var hsl = '';
    for (var a = 1; a <= tinggi4; a++ ){
        for(var b = 1; b <= 2 * tinggi4 ; b++){
            hsl += '';
        }
        for(var c = 1; c <= a ; c++){
            hsl += '*';
        }
        hsl += '\n';
    }
    return hsl;
}
console.log(animate4(10))

//animasi ke 9
function animate5(tinggi5){
    var hsl = '';
    for (var a = 1; a <= tinggi5; a++ ){
        for(var b = 1; b <= tinggi5 - a ; b++){
            hsl += '';
        }
        for(var c = b; c <= 2 * tinggi5; c++){
            hsl += '*';
        }
        hsl += '\n';
    }
    return hsl;
}
console.log(animate5(10))

//animasi 10
function wayang1(wy1){
    var s = '';
    // var wy1 = 9;
    for(var baris = 1; baris <= wy1; baris++){
        for(var i = 1; i <= wy1; i++){
            s += ' ';
            }
            for(var j = 1; j <= baris; j++){
            s += '*';
        }
    s += '\n';   
    }
    return s;
}
console.log(wayang1(9));

//animasi 11
function wayang2(wy2){
    var s1 = '';
    for(var baris = 1; baris <= wy2; baris++){
        for(var i = 1; i < baris; i++){
            s1 += ' ';
            }
            for(var j = i; j <= wy2; j++){
            s1 += '*';
        }
    s1 += '\n';   
    }
    return s1;
}
console.log(wayang2(9))