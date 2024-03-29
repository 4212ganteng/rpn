//1. Let's Form a Sentence

// Problem
// Pada tugas ini kamu diminta untuk melakukan penambahan string menggunakan simbol +.
//  Disediakan variable word. Tambahkan nilai word satu per satu dengan nilai variable lain
//  untuk membentuk sebuah kalimat. Jangan lupa menambahkan spasi di setiap kata, dan
//   tampilkan di console hasil penggabungannya! Kamu tidak perlu membuat variable baru!

let word1 = "JavaScript";
let second = "is";
let third = "awesome";
let fourth = "and";
let fifth = "I";
let sixth = "love";
let seventh = "it!";

//code here
const sentence =
  word1 +
  " " +
  second +
  " " +
  third +
  " " +
  fourth +
  " " +
  fifth +
  " " +
  sixth +
  " " +
  seventh;

// ---------------------------------------
console.log(sentence);
// ---------------------------------------

// 2. Index Accessing - 1 by 1
// Problem
// Pada tugas ini kamu diminta untuk "memecah" sebuah kalimat dan menampilkan setiap kata didalamnya.
//  Untuk soal nomor ini, gunakan akses satu per satu karakter dari string untuk mengambil setiap huruf dalam kata.
//   Terasa manual? Tidak apa-apa, kita coba ini dulu untuk saat ini.

// Hints
// Saat kamu mendapatkan tiap huruf, untuk membentuk setiap kata kamu tinggal menggunakan simbol + untuk membentuk kata
//  tersebut!

let word = "wow JavaScript is so cool";
let exampleFirstWord = word[0] + word[1] + word[2];
let seccondWord =
  word[4] +
  word[5] +
  word[6] +
  word[7] +
  word[8] +
  word[9] +
  word[10] +
  word[11] +
  word[12] +
  word[13] +
  word[14];
console.log("First Word: " + exampleFirstWord);

// ---------------------------------------
console.log("seccond word: ", seccondWord);
// ---------------------------------------

// 3. Breaking Sentence (Again) using Substring
// Problem
// Mirip seperti soal nomor 2, namun kali ini gunakan substring untuk mengambil potongan dari tiap kata!

let word3 = "wow JavaScript is so cool";
let exampleFirstWord3 = word3.substring(0, 3);
let seccondWord3 = word3.substring(4, 14);
console.log("First Word: " + exampleFirstWord3);

// ---------------------------------------
console.log("seccond word: " + seccondWord3);
// ---------------------------------------

// 4. Breaking Sentence (yet Again) and Count Each Length
// Problem
// Mirip seperti soal nomor 3, tapi tampilkan juga panjang kata masing-masingnya!

let word4 = "wow JavaScript is so cool";
let exampleFirstWord4 = word4.substring(0, 3);
let seccondWord4 = word4.substring(4, 14);
let seccondWord4Length = word4.length;

let firstWordLength = exampleFirstWord4.length;

console.log(
  "First Word: " + exampleFirstWord + ", with length: " + firstWordLength
);
console.log(
  "seccond Word: " + seccondWord4 + ", with length: " + seccondWord4Length
);
