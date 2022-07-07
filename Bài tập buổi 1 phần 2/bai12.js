/**
 * Bài 12 :  
var SanPham12 = {
name: "Dày",
hang: "Nike",
Size:[S,L,SL,X,XL,XS],
color:[red,blue,green]
} 

a ) Truy vấn đến Size có giá trị là XS . 
b ) truy vấn đến color là blue . 

c ) Thêm color là Yelow ,pink vào Object SanPham12 .  
d ) thêm Size SSL, XXL vào Object SanPham12  .
 */

var SanPham12 = {
    name: "Dày",
    hang: "Nike",
    Size:['S','L','SL','X','XL','XS'],
    color:['red','blue','green']
} 

// a
console.log(SanPham12.Size[SanPham12.Size.length - 1]);

// b
console.log(SanPham12.color[1]);

// c
SanPham12.color[SanPham12.color.length] = 'yelow';
SanPham12.color[SanPham12.color.length] = 'pink';

// d
SanPham12.Size[SanPham12.Size.length] = 'SSL';
SanPham12.Size[SanPham12.Size.length] = 'XXL';

console.log(SanPham12);
