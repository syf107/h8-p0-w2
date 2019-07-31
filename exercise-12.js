function konversiMenit(menit) {
    var bentukMenit = 0;
    var bentukDetik = 0;

    if (menit <= 60) {
       return bentukMenit + ":" + (bentukDetik = bentukDetik + menit);
    } 
    else { 
        bentukMenit = Math.floor(menit/60);
        bentukDetik = menit-(Math.floor(menit/60))*60;
        if (bentukDetik <=9){
            return (bentukMenit + ":" + 0 + bentukDetik);
        } else {
            return (bentukMenit + ":" + bentukDetik);

        }
        
    }
}

  
  // TEST CASES
  console.log(konversiMenit(63)); // 1:03
  console.log(konversiMenit(124)); // 2:04
  console.log(konversiMenit(53)); // 0:53
  console.log(konversiMenit(88)); // 1:28
  console.log(konversiMenit(120)); // 2:00