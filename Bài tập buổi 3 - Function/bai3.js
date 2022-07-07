/**
 * Bài 3 : 

var sanPham = [
  {
    ten: "Túi chanel", gia: 100000,
    doanhSo: 100,
  },
  {
    ten: "áo khoác Gucci", gia: 400000,
    doanhSo: 50,
  },
  {
    ten: "Ví da Pumma", gia: 120000,
    doanhSo: 200,
  },
];
 
Hãy viết function để xử lý data trên 
a, function trả về tên hàng hóa có danh số cao nhất trong shop
b, function trả về tên hàng hóa có danh số thấp nhất trong shop
c, function trả về tổng doanh thu của shop, biết doanh thu = doanh so * gia ban 

 */

var sanPham = [
    {
      ten: "Túi chanel", gia: 100000,
      doanhSo: 100,
    },
    {
      ten: "áo khoác Gucci", gia: 400000,
      doanhSo: 50,
    },
    {
      ten: "Ví da Pumma", gia: 120000,
      doanhSo: 200,
    },
  ];

  // a
function nameMax(input){
    var max = input[0].doanhSo;
    for(var i = 0 ; i < input.length ; i++){
        if(max < input[i].doanhSo){
            max = input[i]
        }
    }
    return max.ten;
}

console.log('Tên của sản phẩm có doanh thu cao nhất là : ' + nameMax(sanPham));

// b
function nameMin(input){
    var min = input[0].doanhSo;
    for(var i = 0 ; i < input.length ; i++){
        if(min > input[i].doanhSo){
            min = input[i]
        }
    }
    return min.ten;
}

console.log('Tên sản phẩm có doanh thu thấp nhất là : ' + nameMin(sanPham));

// c

function sumDoanhThu (input){
    var tongDoanhThu = 0;
    for(var i = 0 ; i < input.length ; i++){
        tongDoanhThu = tongDoanhThu + (input[i].doanhSo*input[i].gia)
    }
    return tongDoanhThu;
}

console.log('Tổng doanh thu là : ' + sumDoanhThu(sanPham));
