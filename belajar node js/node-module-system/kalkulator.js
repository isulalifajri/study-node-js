var readline = require('readline');

var rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


console.log("Kalkulator");
console.log("============");
console.log("1. Tambah(+)");
console.log("2. Kurang(-)");
console.log("3. Bagi(/)");
console.log("4. Kali(*)");
console.log("5. Modulus(%)");

rl.question("Pilihan anda : " ,function(pilihan){
console.log("-----------------------------------------");
console.log("Anda Memilih Menu : " + pilihan );
  rl.question("Masukan Bilangan pertama : " ,function(jawabanpertama){
   rl.question("Masukan Bilangan kedua : " ,function(jawabankedua){
     console.log("-----------------------------------------");
     if(pilihan == "1"){
         console.log("Hasil Penjumlahan :" +(parseInt(jawabanpertama) + parseInt(jawabankedua)));
        }else if(pilihan == "2"){
            console.log("Hasil Pengurangan :" +(parseInt(jawabanpertama) - parseInt(jawabankedua)));
        }else if(pilihan == "3"){
            console.log("Hasil Pembagian :" +(parseInt(jawabanpertama) / parseInt(jawabankedua)));
        }else if(pilihan == "4"){
            console.log("Hasil Perkalian :" +(parseInt(jawabanpertama) * parseInt(jawabankedua)));
        }else if(pilihan == "5"){
            console.log("Hasil Modulus : " +(parseInt(jawabanpertama) % parseInt(jawabankedua)));
        }else{
            console.log("Pilihan anda tidak tersedia");
        }  
     rl.close();
    });     
    });
});