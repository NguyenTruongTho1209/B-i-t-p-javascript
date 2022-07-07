/**
 * Var x = 5
Var a = 5 + x++ + ++x - --x + x++ + 10
Var b = 5 + ++x + ++x + --x - x-- - ++x  + 10
Var c = 5 + x-- + --x - ++x + --x - 10
Var d = 5 + --x + --x - x++ +--x + 10
a,b,c d có giá trị là bao nhiêu ?

 */
var x = 5;
// var a = 5 + x++ + ++x - --x + x++ + 10;
//      5   5       7     6   6     10
// var b = 5 + ++x + ++x + --x - x-- - ++x  + 10;
//      5 +   6 +   7 +   6 - 5   -   5  + 10
// var c = 5 + x-- + --x - ++x + --x - 10;
//      5 + 5   +   3 -   4 +   3 - 10  
var d = 5 + --x + --x - x++ + --x + 10;
//      5 +   4 +   3 - 3   +   3 + 10;
console.log(d);