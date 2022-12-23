// var readline = require('readline');

// var rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });


//   rl.question("Masukan Bilangan pertama : " ,function(jawabanpertama){
//    rl.question("Masukan Bilangan kedua : " ,function(jawabankedua){
//     const result = jawabanpertama + jawabankedua;
//        console.log(`${result}`);    
//      rl.close();
//    });     
// });

var readline = require('readline');

var a = readline.createInterface({
    input:process.stdin,
    output: process.stdout
});

a.question("Masukkan Bilangan : ", (number) => {
//  var b = ab.toString();
  var result = parseInt(number[0]) + parseInt(number[1]); //number dan parseInt Sama Aja
//   var result = Number(number[0]) + Number(number[1]);
 console.log(`Result : ${result}`);
 a.close();
});

// var b = a.toString();
// var c = Number(b[0]) + Number(b[1]);
// console.log(c);