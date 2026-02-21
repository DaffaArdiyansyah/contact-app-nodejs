// import module
const fs = require("fs"); // module file system
const readline = require("readline"); // module readline untuk membuat interface input dan output pada terminal

// membuat interface readline
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// membuat folder data'
const dirPath = "./data";
if (!fs.existsSync(dirPath)) {
  fs.mkdirSync(dirPath);
}

// membuat file data.json jika belum ada
const filePath = "./data/contacts.json";
if (!fs.existsSync(filePath)) {
  fs.writeFileSync(filePath, "[]", "utf8"); // isi awal file data.json berupa array kosong
}

// promise pertanyaan
const pertanyaan = (pertanyaan) => {
  return new Promise((resolve, reject) => {
    rl.question(pertanyaan, (jawaban) => {
      resolve(jawaban);
    });
  });
};

const simpanContact = (nama, email, noHP) => {
  const data = { nama, email, noHP };
  const file = fs.readFileSync(filePath, "utf8"); // membaca isi file data.json
  const datas = JSON.parse(file); // mengubah isi file data.json dari string menjadi array

  datas.push(data); // menambahkan data baru ke dalam array

  fs.writeFileSync(filePath, JSON.stringify(datas)); // menulis ulang file data.json dengan isi array yang sudah diperbarui

  console.log("Terima Kasih sudah memasukkan data.");
  rl.close();
};

// export module keluar file contacts.js
module.exports = { pertanyaan, simpanContact };
