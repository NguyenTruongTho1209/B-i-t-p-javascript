/**
 *  Bài 10 : ÁP DỤNG PROMISE .
var danhSach=[
    {ten: 'huy', phanLoai: 'A', giohang:{soLuong: 12, trongLuong: 12}},
    {ten: 'lam', phanLoai:'B', giohang:{soLuong: 8, trongLuong: 7}},
    {ten: 'tung', phanLoai:'C', giohang:{soLuong: 10, trongLuong: 8}},
    {ten: 'hai', phanLoai:'A', giohang:{soLuong: 8, trongLuong: 20}},
    {ten: 'vinh', phanLoai:'A', giohang:{soLuong: 7, trongLuong: 9}},
    {ten: 'nam', phanLoai:'C', giohang:{soLuong: 5, trongLuong: 8}},
    {ten: 'khanh', phanLoai:'B', giohang:{soLuong: 5, trongLuong: 10}},
    ]

var phanLoai = [
    {Loai: 'A', heSo: 2, dinhMuc:24, soLuong:10},
    {Loai: 'B', heSo: 3, dinhMuc:22, soLuong:7},
    {Loai: 'C', heSo: 1, dinhMuc:10, soLuong:9},
]

Hãy tính liệu người mua hàng có đạt đủ điều kiện nhận ưu đãi hay không! Điều kiện để tính khách có nhận được ưu đãi
hay không điều kiện để nhận ưu đãi là khách phải đạt được đủ điểm định mức ứng với mỗi loại được khai báo ở array phanLoai và phải có số
lượng ít nhất bằng với số lượng của mỗi loại đặt ra.
Công thức tính dinhMuc = trongLuong*heSo

 */
let danhSach=[
    {ten: 'huy', phanLoai: 'A', giohang:{soLuong: 12, trongLuong: 12}},
    {ten: 'lam', phanLoai:'B', giohang:{soLuong: 8, trongLuong: 7}},
    {ten: 'tung', phanLoai:'C', giohang:{soLuong: 10, trongLuong: 8}},
    {ten: 'hai', phanLoai:'A', giohang:{soLuong: 8, trongLuong: 20}},
    {ten: 'vinh', phanLoai:'A', giohang:{soLuong: 7, trongLuong: 9}},
    {ten: 'nam', phanLoai:'C', giohang:{soLuong: 5, trongLuong: 8}},
    {ten: 'khanh', phanLoai:'B', giohang:{soLuong: 5, trongLuong: 10}},
    ]

let phanLoai = [
    {Loai: 'A', heSo: 2, dinhMuc:24, soLuong:10},
    {Loai: 'B', heSo: 3, dinhMuc:22, soLuong:7},
    {Loai: 'C', heSo: 1, dinhMuc:10, soLuong:9},
]

let promise = new Promise(function(res){
    function heSoDanhSach (input1 , input2){
        for (let i = 0; i < input1.length; i++) {
            const elementDanhSach = input1[i]
            for (let j = 0; j < input2.length; j++) {
                const elementPhanLoai = input2[j];
                if(elementDanhSach.phanLoai === elementPhanLoai.Loai){
                    elementDanhSach.dinhMuc = elementDanhSach.giohang.trongLuong * elementPhanLoai.heSo
                }
            }
        }
        return input1
    }

    function uuDai (input1 , input2){
        for (let i = 0; i < heSoDanhSach(input1 , input2).length; i++) {
            const elementCallBack = heSoDanhSach(input1 , input2)[i];
            for (let j = 0; j < input2.length; j++) {
                const element = input2[j];
                if(elementCallBack.phanLoai === element.Loai){
                    if (elementCallBack.dinhMuc >= element.dinhMuc) {
                        elementCallBack.uuDai = 'Đủ điều kiện để nhận ưu đãi'
                    }else{
                        elementCallBack.uuDai = 'Không đủ điều kiện để nhận ưu đãi'
                    }
                }
            }
        }
        return input1
    }
    res(uuDai(danhSach , phanLoai))
}).then(function(data){
    console.log(data);
})