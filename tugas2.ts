// TUGAS 2
console.log('TUGAS 2');

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
