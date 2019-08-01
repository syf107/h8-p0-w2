function xo(str) {
    var x = '';
    var o = '';
    for (var a = 0; a < str.length; a++)
        if ( str[a] === 'x'){
            x++
        } else {
            o++
        }

        if ( x === o ) {
            return true;
        } else {
            return false;
        }

}
  
  // TEST CASES
  console.log(xo('xoxoxo')); // true
  console.log(xo('oxooxo')); // false
  console.log(xo('oxo')); // false
  console.log(xo('xxxooo')); // true
  console.log(xo('xoxooxxo')); // true