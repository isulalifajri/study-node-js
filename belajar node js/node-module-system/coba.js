function cetakNama(nama){
    return `Halo, nama saya ${nama}`; //functions
}
const PI = 3.14; //variabel


//object
const mahasiswa ={
    nama : 'Teratai langit',
    umur : 19,
    cetakMhs(){
        return `Halo, nama saya ${this.nama} dan saya umur ${this.umur} tahun. `
    }
}

//class
class Orang{
    constructor(){
        console.log('Objek orang telah di buat!!');
    }
}

// module.exports.cetakNama = cetakNama;
// module.exports.PI =PI;
// module.exports.mahasiswa = mahasiswa;
// module.exports.Orang = Orang;

// module.exports = {
//     cetakNama: cetakNama,
//     PI: PI,
//     mahasiswa: mahasiswa,
//     Orang: Orang
// };

module.exports = {cetakNama, PI, mahasiswa, Orang};