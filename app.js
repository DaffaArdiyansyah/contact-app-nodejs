const fs = require("fs");
const readline = require("readline");

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

rl.question("Masukkan Nama kamu : ", (nama) => {
  rl.question("Masukkan No HP kamu : ", (noHP) => {
    const data = { nama,noHP };
    const file = fs.readFileSync(filePath, "utf8"); // membaca isi file data.json
    const datas = JSON.parse(file); // mengubah isi file data.json dari string menjadi array
    datas.push(data); // menambahkan data baru ke dalam array
    fs.writeFileSync(filePath, JSON.stringify(datas));  // menulis ulang file data.json dengan isi array yang sudah diperbarui
    console.log("Terima Kasih sudah memasukkan data.");
    rl.close();
  });
});
