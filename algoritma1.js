// Problem
// Diberikan sebuah function bandingkanAngka(angka1, angka2) yang menerima dua parameter angka.
// Function akan me-return nilai true jika angka2 lebih besar dari angka1, dan false jika sebaliknya.
// Jika kedua angka bernilai sama, function akan me-return -1.

function bandingkanAngka(angka1, angka2) {
  //code disini
  if (angka1 === angka2) {
    return -1;
  } else if (angka1 < angka2) {
    return true;
  } else {
    return false;
  }
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false

// ------------------------------------
console.log("");
// ------------------------------------

// Problem
// Diberikan sebuah function balikKata(kata) yang menerima satu parameter berupa string.
// Function akan me-return kata yang dibalik. Contoh, jika kata adalah "John Doe", function akan me-return "eoD nhoJ".

let result;
function balikKata(kata) {
  // you can only write your code here!
  for (let index = kata.length; index >= 0; index--) {
    result += kata[index];

    // result += kata[kata.length] - 1;
    // console.log("result", result);
  }
  return result;
}

// TEST CASES
console.log(balikKata("Hello World and Coders")); // sredoC dna dlroW olleH
console.log(balikKata("John Doe")); // eoD nhoJ
console.log(balikKata("I am a bookworm")); // mrowkoob a ma I
console.log(balikKata("Coding is my hobby")); // ybboh ym si gnidoC
console.log(balikKata("Super")); // repuS

// ------------------------------------
console.log("");
// ------------------------------------

// soal 2

// Problem
// Diberikan sebuah function konversiMenit(menit) yang menerima satu parameter berupa angka yang merupakan ukuran waktu
// dalam menit. Function akan me-return string waktu dalam format jam:menit berdasarkan menit tersebut.
// Contoh, jika menit adalah 63, maka function akan me-return "1:03".

function konversiMenit(menit) {
  // you can only write your code here!
  const hourse = Math.floor(menit / 60);
  //   console.log(hourse);
  let minutes = menit % 60;
  //   console.log("minutes", minutes);

  for (let index = 1; index < 10; index++) {
    const element = index;
    // console.log(element);

    if (minutes === element) {
      minutes = "0" + minutes;
    }
  }
  //   console.log(hourse);
  const res = `${hourse}:${minutes}`;
  return res;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00

// ------------------------------------
console.log("");
// ------------------------------------

//   Problem
//   Diberikan sebuah function xo(str) yang menerima satu parameter berupa string.
//   Function akan me-return true jika jumlah karakter x sama dengan jumlah karakter o, dan false jika tidak.

function xo(str) {
  // you can only write your code here!

  let o = "";
  let x = "";
  const arr = str.split("");
  //   console.log(arr);

  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];

    if (element === "o") {
      o += element;
    } else {
      x += element;
    }
  }

  if (o.length === x.length) {
    return true;
  } else return false;
}

// TEST CASES
console.log(xo("xoxoxo")); // true
console.log(xo("oxooxo")); // false
console.log(xo("oxo")); // false
console.log(xo("xxxooo")); // true
console.log(xo("xoxooxxo")); // true
