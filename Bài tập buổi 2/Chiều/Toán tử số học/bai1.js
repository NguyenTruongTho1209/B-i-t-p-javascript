/**
 * Bài 1  : 

Var x = 8
Var a = 1 + x++ + 9
Var b = 7 + ++x + 3
Var c = 5 + x-- + 10
Var d = 6 + --x + 11
a,b,c d có giá trị là bao nhiêu ?

 */

var x = 8;
var a = 1 + x++ + 9;
//  a = 1 + 8   + 9 = 18
var b = 7 + ++x + 3;
//  b = 7 +   9 + 3 = 19
var c = 5 + x-- + 10;
//  c = 5 + 8   + 10 = 23
var d = 6 + --x + 11;
//  d = 6 +   7 + 11 = 24
