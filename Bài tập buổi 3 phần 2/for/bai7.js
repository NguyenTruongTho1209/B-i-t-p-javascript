/**
 * Bài 7
Cho số nguyên n. Tính giá trị biểu thức S= 1.2 + 2.3 + 3.4 + ... + n(n+1).
 */

var n = 3
S = 0
for(var i = 0 ; i <= n ; i++){
    S = S + i*(i+1)
}
console.log(S);