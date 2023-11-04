let jumlah = 0;
let harga = 0;
let namaProduk = '';

function tambahProduk(nama) {
    jumlah++;
    harga += 15000;
    namaProduk = nama;

    updateTampilan();

}

function kurangiProduk() {
    if(jumlah > 0 ) {

        jumlah --;
        harga -= 15000;
        
        updateTampilan();
    }
}

function kirimPesanan() {
    // Ganti nomor WhatsApp dan pesan sesuai kebutuhan
    let nomorWhatsApp = "+6282173688098";
    let pesan = `Halo! Saya ingin memesan ${jumlah} bungkus ${namaProduk} dengan total harga Rp ${harga}.`;

    // Membuat tautan WhatsApp dengan pesan
    let tautanWhatsApp = `https://wa.me/${nomorWhatsApp}/?text=${encodeURIComponent(pesan)}`;
    

    // Buka aplikasi WhatsApp dengan tautan
    window.open(tautanWhatsApp, '_blank');

    resetKeranjang();
}

function resetKeranjang() {
    jumlah = 0;
    harga = 0;
    namaProduk = '';

    updateTampilan();
}

function updateTampilan() {
    document.getElementById('jumlah').innerText = jumlah;
    document.getElementById('harga').innerText = harga;
}


