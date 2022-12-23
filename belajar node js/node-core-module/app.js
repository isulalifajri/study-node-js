//core module
//file system
const fs = require('fs');

//menuliskan string ke file (synchronous)
// try{ //menampung error
//     fs.writeFileSync('data/test.txt', 'Hello World secara syncronous!');
// }catch(e){
//     console.log(e);
// }

//menuliskan string ke file (Asynchronous)
// fs.writeFile('data/test.txt', 'Hello World secara Asynchronous', (e) => {
//     console.log(e);
// });

//membaca isi file secara syncronous
// const data = fs.readFileSync('data/test.txt', 'utf-8');
// // console.log(data.toString());
// console.log(data);

//membaca file secara asynchronous
// fs.readFile('data/test.txt', 'utf-8', (err,data) => {
//     if(err) throw err;
//     console.log(data);
// });


//Readline
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
        const file = fs.readFileSync('data/contacts.json', 'utf-8');
        const contacts = JSON.parse(file);
        // console.log(contacts);
        contacts.push(contact);
        // console.log(contacts);
        fs.writeFileSync('data/contacts.json', JSON.stringify(contacts));
        console.log(`Terimakasih ${nama} sudah memasukkan data.`);
        rl.close();
    });
});
