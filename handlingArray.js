/*
Buatlah sebuah fungsi dengan nama dataHandling dengan sebuah parameter untuk menerima argumen. Argumen yang akan diterima adalah sebuah array yang berisi beberapa array sejumlah n.
Tugas kamu adalah mengimplementasikan fungsi dataHandling agar dapat menampilkan data-data pada dari argumen seperti di bawah ini:
*/
let input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"],
];

const dataHandling = (inputs) => {
  for (let i = 0; i < inputs.length; i++) {
    const element = inputs[i];
    let id = "";

    id = `Nomor ID: ${element[0]}`;
    let name = `Nama Lengkap: ${element[1]}`;
    let ttl = `TTL: ${element[2]} ${element[3]}`;
    let hobi = `Hobi: ${element[4]}`;
    console.log(id);
    console.log(name);
    console.log(ttl);
    console.log(hobi);
    console.log(" ");
  }
};

dataHandling(input);

/*
output yang diharapkan

Nomor ID:  0001
Nama Lengkap:  Roman Alamsyah
TTL:  Bandar Lampung 21/05/1989
Hobi:  Membaca

Nomor ID:  0002
Nama Lengkap:  Dika Sembiring
TTL:  Medan 10/10/1992
Hobi:  Bermain Gitar

Nomor ID:  0003
Nama Lengkap:  Winona
TTL:  Ambon 25/12/1965
Hobi:  Memasak

Nomor ID:  0004
Nama Lengkap:  Bintang Senjaya
TTL:  Martapura 6/4/1970
Hobi:  Berkebun
*/

// soal2
let input2 = [
  "0001",
  "Roman Alamsyahda d",
  "Bandar Lampung",
  "21/05/1989",
  "Membaca",
];

function dataHandling2(input) {
  console.log("input", input);
  let [date, month, year] = input[3].split("/");

  switch (Number(month)) {
    case 1:
      month = "januari";
      break;
    case 2:
      month = "februari";
      break;
    case 3:
      month = "maret";
      break;
    case 4:
      month = "april";
      break;
    case 5:
      month = "mei";
      break;
    case 6:
      month = "juni";
      break;
    case 7:
      month = "juli";
      break;
    case 8:
      month = "agustus";
      break;
    case 9:
      month = "september";
      break;
    case 10:
      month = "oktober";
      break;
    case 11:
      month = "november";
      break;
    case 12:
      month = "desember";
      break;

    default:
      month = null;
      break;
  }

  console.log(date);
  console.log(month);
  const dateArray = [year, date, month];
  console.log(dateArray);
  console.log(`${date}-${month}-${year}`);

  const maxChar = input2[1].slice(0, 15);
  console.log(maxChar);
}

dataHandling2(input2);

/**
 * keluaran yang diharapkan (pada console)
 *
 * ["0001", "Roman Alamsyah Elsharawy", "Provinsi Bandar Lampung", "21/05/1989", "Pria", "SMA Internasional Metro"]
 * Mei
 * ["1989", "21", "05"]
 * 21-05-1989
 * Roman Alamsyah //batasi hanya 15 karakter saja pada array elemen ke 2
 */
