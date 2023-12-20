// Kamu diminta untuk memprogram suatu game sederhana, Proxytia namanya.
// Untuk memulai game itu diperlukan 2 variabel (untuk sekarang),
// yaitu nama dan peran. Variabel peran harus memiliki isi data,
// bila nama kosong, pemain akan diberikan peringatan berupa "nama wajib diisi"
// bila kosong pemain akan diberikan peringatan berupa "Pilih Peranmu untuk memulai game".
// Terdapat 3 peran berbeda yaitu Ksatria, Tabib, dan Penyihir.
// Tugas Anda adalah untuk membuat program yang mengecek isi variabel
// peran serta mengeluarkan respon sesuai isi variabel tersebut.
//ada 4 jenis respons sesuai dengan 3 jenis peran yaitu
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!
//tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada
//tips belajar penggunaan `` (backtick) pada javascript agar
//mudah dalam memasukan variabel ke dalam string
//tapi tanpa backtick juga ga masalah sih yg penting output sesuai

// algoritma
//isi algoritma mu disini (AWAS KALO GA DI ISI!!!!)
// cek dulu isi variabel  nya
// kalau ada isi nya keluarin response isi nya
// format response
//halo Ksatria ${nama} , kamu dapat menyerang dengan senjatamu!
//halo Tabib ${nama} , kamu akan membantu temanmu yang terluka
//halo Penyihir ${nama} , ciptakan keajaiban yang membantu kemenanganmu!

let nama = "",
  peran = "";

const Proxytia = (nama, peran) => {
  if (nama === "") {
    console.log("Nama wajib diisi!");
  } else if (peran === "") {
    console.log("Pilih peranmu untuk memulai game!");
  } else {
    switch (peran) {
      case "Ksatria":
        console.log(
          `Halo Ksatria ${nama}, kamu dapat menyerang dengan senjatamu!`
        );
        break;
      case "Tabib":
        console.log(
          `Halo Tabib ${nama}, kamu akan membantu temanmu yang terluka.`
        );
        break;
      case "Penyihir":
        console.log(
          `Halo Penyihir ${nama}, ciptakan keajaiban yang membantu kemenanganmu!`
        );
        break;
      default:
        console.log(
          "Tapi kayaknya kamu jadi bot aja ya, peran yang kamu pilih ga ada."
        );
    }
  }
};

// Contoh pemanggilan fungsi Proxytia
nama = "John";
peran = "Ksatria";
Proxytia(nama, peran);

// soal 2

// Kamu akan diberikan sebuah tanggal dalam tiga variabel, yaitu hari, bulan, dan tahun. Disini kamu diminta untuk membuat format tanggal. Misal tanggal yang diberikan adalah hari 1, bulan 5, dan tahun 1945. Maka, output yang harus kamu proses adalah menjadi 1 Mei 1945.

// Gunakan switch case untuk kasus ini!

// Contoh:

// let hari = 21; let bulan = 1; let tahun = 1945;

// Maka hasil yang akan tampil di console adalah: '21 Januari 1945';

//tips gunakan keyword ini di google "conditional switch case javascript"
//dan mulailah membaca dan mencontek di stackoverflow xixixi

// let tanggal = 12; // assign nilai variabel tanggal disini! (dengan angka antara 1 - 31)
// let bulan = "februari"; // assign nilai variabel bulan disini! (dengan angka antara 1 - 12)
// let tahun = 2001; // assign nilai variabel tahun disini! (dengan angka antara 1900 - 2200)

let hari = 21;
let bulan = 1;
let tahun = 1945;

//code switch case kamu disini

switch (bulan) {
  case 1:
    bulan = "januari";
    break;
  case 2:
    bulan = "februari";
    break;
  case 3:
    bulan = "maret";
    break;
  case 4:
    bulan = "april";
    break;
  case 5:
    bulan = "mei";
    break;
  case 6:
    bulan = "juni";
    break;
  case 7:
    bulan = "juli";
    break;
  case 8:
    bulan = "agustus";
    break;
  case 9:
    bulan = "september";
    break;
  case 10:
    bulan = "oktober";
    break;
  case 11:
    bulan = "november";
    break;
  case 12:
    bulan = "desember";
    break;

  default:
    bulan = null;
    break;
}

console.log(hari, bulan, tahun);
