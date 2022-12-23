var num1 = 9;
var num2 = 3;

var result1 = num1 + num2;
var result2 = num1 * num2;
var result3 = num1 - num2;
var result4 = num1 / num2;
var result5 = num1 % num2;

console.log(` Hasil Penjumlahan dari ${num1} + ${num2} = ${result1}`)
console.log(` Hasil Perkalian dari ${num1} * ${num2} = ${result2}`)
console.log(` Hasil Pengurangan dari ${num1} - ${num2} = ${result3}`)
console.log(` Hasil Pembagian dari ${num1} / ${num2} = ${result4}`)
console.log(` Hasil Modulus dari ${num1} % ${num2} = ${result5}`)



const readline = require('readline');
    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout,
    });

    rl.question('Masukkan Nama Anda: ', (nama) => {
        rl.question('Masukkan No HP Anda: ', (noHP) => {
            const contact = {
                nama, noHP
            };
            console.log(` ${nama}`);
            console.log(` ${noHP}`);
            rl.close();
        });
    });

