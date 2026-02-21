// import local module
const contacts = require("./contacts"); // import module contacts.js

// async await main function
const main = async () => {
    // pertanyaan
  const nama = await contacts.pertanyaan("Masukkan Nama kamu : ");
  const email = await contacts.pertanyaan("Masukkan Email kamu : ");
  const noHP = await contacts.pertanyaan("Masukkan No HP kamu : ");

  // simpan contact
  contacts.simpanContact(nama, email, noHP);
};

// menjalankan main function
main();
