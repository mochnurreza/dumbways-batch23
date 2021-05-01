function cetak_gambar(input) {
    let box = [];
  
    for (let i = 1; i <= input; i++) {
      let cetak = "";
      if (i % 2 == 0) {
        for (let j = 0; j < input; j++) {
          if (j == 0 || j == input - 1) {
            cetak += "*";
          } else {
            cetak += "=";
          }
        }
        box.push(cetak);
      } else {
        for (let j = 0; j < input; j++) {
          cetak += "*";
        }
        box.push(cetak);
      }
    }
  
    for (let i = 0; i < input; i++) {
      console.log(box[i]);
    }
  }
  
  cetak_gambar(5);