// ======== script.js ========

// Ambil referensi elemen-elemen yang dibutuhkan
const form = document.getElementById("formPemesanan"); // form utama
const tabelBody = document.getElementById("tabelBody"); // body tabel tempat data ditambahkan

// Tambahkan event listener untuk menangani saat form disubmit
form.addEventListener("submit", function(event) {
  event.preventDefault(); // Mencegah form melakukan reload halaman

  // Ambil nilai dari setiap input form
  const nama = document.getElementById("nama").value.trim();
  const nim = document.getElementById("nim").value.trim();
  const kode = document.getElementById("kode").value.trim();
  const jumlah = document.getElementById("jumlah").value.trim();
  const tanggal = document.getElementById("tanggal").value.trim();

  // === VALIDASI FORM ===
  if (!nama || !nim || !kode || !jumlah || !tanggal) {
    alert("⚠️ Semua kolom harus diisi!");
    return; // Hentikan proses jika ada yang kosong
  }

  // Validasi tambahan: NIM harus angka dan panjang minimal 8
  if (isNaN(nim) || nim.length < 8) {
    alert("❌ NIM harus berupa angka minimal 8 digit.");
    return;
  }

  // Validasi jumlah tidak boleh 0
  if (parseInt(jumlah) <= 0) {
    alert("❌ Jumlah bahan ajar minimal 1.");
    return;
  }

  // === TAMBAHKAN DATA KE TABEL ===
  const newRow = document.createElement("tr"); // buat baris baru
  newRow.innerHTML = `
    <td>${nama}</td>
    <td>${nim}</td>
    <td>${kode}</td>
    <td>${jumlah}</td>
    <td>${tanggal}</td>
  `;
  tabelBody.appendChild(newRow); // tambahkan ke body tabel

  // === RESET FORM ===
  form.reset(); // kosongkan input setelah data berhasil dikirim

  // === FEEDBACK KE PENGGUNA ===
  alert("✅ Pesanan berhasil dikirim dan ditambahkan ke daftar!");
});
