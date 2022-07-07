/**
 * Bài 5 Hãy tính tổng số lượng sản phẩm của các phần tử trong array
 */

var sanPham = [
    {
      ten: "áo somi",
      soLuong: 100,
    },
    {
      ten: "áo khoác",
      soLuong: 50,
    },
    {
      ten: "áo phông",
      soLuong: 200,
    }
  ];

var tongSanPham = 0;
for(var i = 0 ; i < sanPham.length ; i++) {
    tongSanPham = tongSanPham + sanPham[i].soLuong;
}

console.log(`Tổng số lượng các phần tử trong array : ${tongSanPham}`);

