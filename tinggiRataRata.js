function tinggiRataRata(tinggiBadan) {
    console.log("Input:", {tinggiBadan, jumlah: tinggiBadan.length});
    if (tinggiBadan.length === 0) return 0;
    let total = tinggiBadan.reduce((acc, num) => acc + num, 0);
    return total / tinggiBadan.length;
}

console.log(tinggiRataRata([165, 170, 170, 175, 175, 180]));