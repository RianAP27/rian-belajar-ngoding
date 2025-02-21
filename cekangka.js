function cekAngka(angka) {
    if (angka >0) {
        return "Angka ini positif";
    } else if (angka <0) {
        return "Angka ini negatif";
    } else {
        return "Angka ini nol";
    }
}

console.log(cekAngka(0));