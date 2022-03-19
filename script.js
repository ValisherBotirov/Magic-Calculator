const display = document.querySelector(".display");
const clear = document.querySelector(".clear");
const delet = document.querySelector(".bittaUchirish");
const foiz = document.querySelector(".foiz");
const bulish = document.querySelector(".bulish");
const yetti = document.querySelector(".yetti");
const sakkiz = document.querySelector(".sakkiz");
const tuqqiz = document.querySelector(".tuqqiz");
const kupaytirish = document.querySelector(".kupaytirish");
const turt = document.querySelector(".turt");
const besh = document.querySelector(".besh");
const olti = document.querySelector(".olti");
const minus = document.querySelector(".minus");
const bir = document.querySelector(".bir");
const ikki = document.querySelector(".ikki");
const uch = document.querySelector(".uch");
const plus = document.querySelector(".plus");
const nol = document.querySelector(".nol");
const probel = document.querySelector(".probel");
const nuqta = document.querySelector(".nuqta");
const tenglik = document.querySelector(".tenglik");

let result = display.value;

// songa mos buttonlar bosilganda ekranga chiqarish

let sum = 0;
let check = true;
bir.addEventListener("click", function () {
  display.value += 1;
  check = true;
});
ikki.addEventListener("click", function () {
  display.value += 2;
  check = true;
});
uch.addEventListener("click", function () {
  display.value += 3;
  check = true;
});
turt.addEventListener("click", function () {
  display.value += 4;
  check = true;
});
besh.addEventListener("click", function () {
  display.value += 5;
  check = true;
});
olti.addEventListener("click", function () {
  display.value += 6;
  check = true;
});
yetti.addEventListener("click", function () {
  display.value += 7;
  check = true;
});
sakkiz.addEventListener("click", function () {
  display.value += 8;
  check = true;
});
tuqqiz.addEventListener("click", function () {
  display.value += 9;
  check = true;
});

plus.addEventListener("click", function () {
  if (check) {
    display.value += "+";
    check = false;
  }
});
minus.addEventListener("click", function () {
  if (check) {
    display.value += "-";
    check = false;
  }
});
bulish.addEventListener("click", function () {
  if (check) {
    display.value += "/";
    check = false;
  }
});
kupaytirish.addEventListener("click", function () {
  if (check) {
    display.value += "*";
    check = false;
  }
});
nol.addEventListener("click", function () {
  display.value += "0";
  check = true;
});
foiz.addEventListener("click", function () {
  check = false;
  display.value /= 100;
  check = false;
});
nuqta.addEventListener("click", function () {
  if (check) {
    display.value += ".";
    check = false;
  }
});

// ekranni to'liq tozalash
clear.addEventListener("click", function () {
  display.value = " ";
  // location.reload(); //refresh beradi
});

// bittalab o'chirish uchun
// let arr = [];
// delet.addEventListener("click", function () {
//   arr = display.value;
//   for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr);
//   }

//   console.log(arr);
// });

tenglik.addEventListener("click", function () {
  let arr = [];
  arr = display.value;
  console.log(typeof arr);
  // display.value = eval(display.value);
});
