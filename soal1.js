function hitungVoucher(voucher, uang) {
    const diskonJoss = 0.21 * uang;
    const diskonMantap = 0.3 * uang;

    if(voucher == 'DumbwaysJoss' && uang >= 50000) {
        let diskon = 0; 
        if(diskonJoss > 20000) {
            diskon = 20000
        } else {
            diskon = diskonJoss;
        }

        let totalUang = uang - diskon;
        let kembalian = uang - totalUang;

    console.log("Uang yang harus dibayar : " + totalUang);
    console.log("Diskon : " + diskon);
    console.log("Kembalian : " + kembalian);
    } else if (voucher === 'DumbwaysMantap' && uang >= 80000) {
        let diskon = 0;
        if(diskonMantap > 40000) {
            diskon = 40000;
        } else {
            diskon = diskonMantap;
        }

        let total = uang - diskon;
        let kembalian = uang - total;

        console.log("Uang yang harus dibayar: " + total);
        console.log("Diskon : " + diskon);
        console.log("Kembalian : " + kembalian);
    } else if (voucher == "DumbWaysMantap" && uang < 50000) {
        console.log("minimal pembelanjaan 50000");
      } else if (voucher == "DumbWaysJoss" && uang < 80000) {
        console.log("minimal pembelanjaan 80000");
      }
}

hitungVoucer("DumbwaysJoss", 100000);