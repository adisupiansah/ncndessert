function tambahProduk(idJumlah, idHarga) {
    var jumlahElemen = document.getElementById(idJumlah);
    var hargaElemen = document.getElementById(idHarga);
    var jumlah = parseInt(jumlahElemen.innerText);
    var harga = parseInt(hargaElemen.innerText.slice(3));
    jumlah++;
    harga = jumlah * 15000; // Ganti dengan harga produk Anda

    jumlahElemen.innerText = jumlah;
    hargaElemen.innerText = 'Rp ' + harga;
}

function kurangProduk(idJumlah, idHarga) {
    var jumlahElemen = document.getElementById(idJumlah);
    var hargaElemen = document.getElementById(idHarga);
    var jumlah = parseInt(jumlahElemen.innerText);
    var harga = parseInt(hargaElemen.innerText.slice(3));

    if (jumlah > 0) {
        jumlah--;
        harga = jumlah * 15000; // Ganti dengan harga produk Anda
    }

    jumlahElemen.innerText = jumlah;
    hargaElemen.innerText = 'Rp ' + harga;
}

function kirimPesanan() {
    var jumlahProduk1 = document.getElementById('jumlahProduk1').innerText;
    var hargaProduk1 = document.getElementById('hargaProduk1').innerText;
    var jumlahProduk2 = document.getElementById('jumlahProduk2').innerText;
    var hargaProduk2 = document.getElementById('hargaProduk2').innerText;
    var jumlahProduk3 = document.getElementById('jumlahProduk3').innerText;
    var hargaProduk3 = document.getElementById('hargaProduk3').innerText;

    var pesan = "Halo, saya ingin membeli:\n";
    pesan += "Cheescake strawbery sejumlah " + jumlahProduk1 + " dan Cheescake oreo sejumlah " + jumlahProduk2 + " dan Cheescake matcha sejumlah " + jumlahProduk3 + ".\n";
    pesan += "Total Harga: " + hargaProduk1 + " + " + hargaProduk2 + " + " + hargaProduk3 + " = Rp " + (parseInt(hargaProduk1.slice(3)) + parseInt(hargaProduk2.slice(3)) + parseInt(hargaProduk3.slice(3)));

    window.location.href = "https://api.whatsapp.com/send?phone=6282173688098&text=" + encodeURIComponent(pesan);
}