console.log(1, 2, 3);
document.write("hello world");

var age = 28,
  yas = 21;
console.log(age + " " + yas);

var name = "ceyhun",
  surname = "yıldırım";
console.log(name + " " + surname);

let isim = "ceyhun";
console.log(typeof isim);

let sayı = 21;
console.log(typeof sayı);

let s1 = "21";
let s2 = "23";

console.log(s1 + s2);

let s1 = Number("21");
let s2 = Number("23");

console.log(s1 + " " + s2);

let sehirler = ["ankara ", "istanbul ", "manisa ", "muğla ", "eskişehir "];

sehirler.forEach(function (yenisehir) {
  document.write(yenisehir);
});

function selam() {
  console.log("merhaba");
}
selam();

const selam2 = () => {
  console.log("hello");
};
selam2();

const selam3 = (mesaj, mesaj2) => {
  console.log(mesaj);
  console.log(mesaj2);
};
selam3("mesaj yok...", "bir mesaj var...");

const selam4 = (a, b) => {
  return a + b;
};
let toplam = selam4(10, 25);
console.log(toplam);

const dizi = [1, 2, 3, 4, 5];
dizi.forEach((sayi) => {
  console.log(sayi);
});

const dizi = [1, 2, 3, 4, 5];
const karesi = [];
dizi.forEach((sayi1) => {
  karesi.push(sayi1 * sayi1);
});
console.log(karesi);

const mapDizi = dizi.map((sayi3) => {
  return sayi3 * 3;
});
console.log(mapDizi);

const mapDizi1 = dizi.map((sayi4) => sayi4 * 4);
console.log(mapDizi1);

console.log(this);
