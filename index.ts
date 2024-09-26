// TUGAS 1
console.info('TUGAS 1');

// 25 nama variabel
const namaPanjang: string = 'Rezky Syaputra';
let namaPanggilan: string = 'Rezky';
var umurSaya: number = 20;
const jeniskelamin: string = 'Laki-laki';
const agama: string = 'Islam';
const menikah: boolean = false;
const hobi: string = 'Bengong';
const alamat: string = 'Amerika serikart';
const nomorTelepon: number = 123456789;
const beratBadan: number = 50.6;
const tinggiBadan: number = 170;
const warnaKulit: string = 'Hijau';
const tempatTinggal: string = 'Amsterdam';
const ukuranBaju: number = 42;
const ukuranCelana: number = 36;
const ukuranSepatu: number = 42;
const ukuranKacamata: number = 42;
const warnaFavorit: string = 'Pink';
const statusNganggur: boolean = true;
const tabungan: null = null;
const saudaraKandung: undefined = undefined;
const pendapatan: number = 0;
const punyaPeliharaan: boolean = true;
const peliharaan: string = 'Kucing';
const kaki: number = 4;
const warnaPeliharaan: string = 'Putih';

// Method / function
const penjumlahan = (a: number, b: number): number => a + b;
console.log('Hasil Penjumlahan 20 + 5 =' + penjumlahan(20, 5));

const pengurangan = (a: number, b: number, c: number): number => a - b - c;
console.log('Hasil Pengurangan 20 - 5 - 5 =' + pengurangan(20, 5, 5));

const perkalian = (a: number, b: number, c: number): number => a * b * c;
console.log('Hasil Perkalian 20 * 5 * 2 = ' + perkalian(20, 5, 2));

const pembagian = (a: number, b: number): number => a / b;
console.log('Hasil Pembagian 20 / 5 = ' + pembagian(20, 5));

// TUGAS 2
console.info('TUGAS 2');

// Karakter Utama
const namaPahlawan: string = 'Arion';
const umur: number = 30;
const statusBertarung: boolean = true;

// Sumber daya Kerajaan
let kepingEmas: number = 5000;
const persediaanMakanan: number = 120;
let prajurit: number = 200;

// Petualangan Pahlawan
kepingEmas = kepingEmas + 1500;
let pengalamanBertarung: number = 75;

// Misi Penyembuhan
let kesehatan: number = 100;
const kurangiKesehatan = (
  jumlahPrajurit: number,
  poinKesehatanHilang: number
): string => {
  kesehatan = kesehatan - poinKesehatanHilang;

  if (kesehatan <= 0) {
    prajurit = jumlahPrajurit - 1;
    kesehatan = 100;

    return 'prajurit mati, prajurit tersisa: ' + prajurit;
  } else {
    return 'kesehatan prajurit tersisa: ' + kesehatan;
  }
};

console.log(kurangiKesehatan(prajurit, 10));
console.log(kurangiKesehatan(prajurit, 100));
console.log(kurangiKesehatan(prajurit, 10));

// Rangkuman Misi Arion
const rangkumanMisiArion = (): string => {
  return `Seorang Pahlawan bernama ${namaPahlawan} telah menyelesaikan misi petualangannya, dengan itu dia mendapatkan ${kepingEmas} keping emas kerajaan. Selain itu, ${namaPahlawan} juga mendapatkan poin pengalaman sebanyak ${pengalamanBertarung} XP selama bertarung.`;
};

console.log(rangkumanMisiArion());
