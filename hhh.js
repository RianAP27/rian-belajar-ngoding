let cuaca = "cerah";
let waktu = "pagi";
let akhirPekan = false;

// Mengkombinasikan beberapa kondisi
if ((cuaca === "hujan" || cuaca === "cerah") && (waktu === "malam" || waktu === "pagi" && !akhirPekan)) {
    console.log("Waktu yang tepat untuk jogging!"); 
  }  else {
        console.log("Waktu yang tidak tepat untuk jogging");
  }