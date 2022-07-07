/**
 * Bài 5
Cho hangHoa = [
    {ten: 'Rx-78-2', size:'MG', giaNiemYet: 35500, noiNhap:'Han Quoc', khoiLuong: 540},
    {ten: 'Rx-78-2', size:'HG', giaNiemYet: 12500, noiNhap:'Han Quoc', khoiLuong: 540},
    {ten: 'Sazabi', size:'MG', giaNiemYet: 50500, noiNhap:'Han Quoc', khoiLuong: 1250},
    {ten: 'Hi nu', size:'RG', giaNiemYet: 30500, noiNhap:'Han Quoc', khoiLuong: 870},
    {ten: 'Hi nu', size:'RG', giaNiemYet: 8800, noiNhap:'Nhat Ban', khoiLuong: 870},
    {ten: 'Hi V', size:'RG', giaNiemYet: 40500, noiNhap:'Han Quoc', khoiLuong: 1000},
    {ten: 'Strike Freedom', size:'MG', giaNiemYet: 56000, noiNhap:'Han Quoc', khoiLuong: 890},
    {ten: 'Strike Freedom', size:'HG', giaNiemYet: 4000, noiNhap:'Nhat Ban', khoiLuong: 570},
    {ten: 'Hi V', size:'RG', giaNiemYet: 8000, noiNhap:'Nhat Ban', khoiLuong:1000},
    {ten: 'Freedom 2.0', size:'MG', giaNiemYet: 45000, noiNhap:'Han Quoc', khoiLuong: 950},
    {ten: 'Freedom 2.0', size:'MG', giaNiemYet: 8000, noiNhap:'Nhat Ban', khoiLuong: 950},
]

tiGia = [
    {ten: 'Nhat Ban', giaTri:187},
    {ten: 'Han Quoc', giaTri:20},
]

giaShip = [
    {ten: 'Han Quoc', giaTien:9600, trongLuong: 10000},
    {ten: 'Nhat Ban', giaTien:4500, trongLuong: 10000},
]
1)
Hãy tính giá trị của mỗi món hàng ở trong array Hàng Hóa khi về Việt Nam sẽ có giá trị thô (chưa tính lãi) là bao nhiêu?
Biết giá trị thô tính bằng giá niêm yết nhân với giá trị tính theo tỉ giá của nơi nhập cộng với phí ship ứng với từng nơi nhập 
Lưu ý giá tiền của bảng giá ship là đang theo tiền tệ của tên chưa tính theo chênh lệch tỉ giá  
VD : ứng với trọng lượng là 10000 sẽ có giá ship là 9600 mệnh kim hàn quốc 
2)
Hỏi nếu nhập 2 hàng Freedom 2.0 size MG từ hàn quốc, 5 hi v từ hàn quốc và 3 strike freedom từ nhật Bản thì cần bỏ ít nhất số tiền là
bao nhiêu để nhập hàng về 
Và tạo 1 array có cả giá trị hàng nhập về và giá bán của từng con để mỗi con Mg lãi được 100000 và hg lãi được 80000
3) So sánh giá trị chênh lệch của từng sản phẩm khi nhập từ hàn quốc và Nhật Bản
4) Viết hàm find(thuoctinh, giatri) in ra những phần tử thỏa mãn yêu cầu tìm kiếm
find(size, MG)

 */

let hangHoa = [
    {ten: 'Rx-78-2', size:'MG', giaNiemYet: 35500, noiNhap:'Han Quoc', khoiLuong: 540},
    {ten: 'Rx-78-2', size:'HG', giaNiemYet: 12500, noiNhap:'Han Quoc', khoiLuong: 540},
    {ten: 'Sazabi', size:'MG', giaNiemYet: 50500, noiNhap:'Han Quoc', khoiLuong: 1250},
    {ten: 'Hi nu', size:'RG', giaNiemYet: 30500, noiNhap:'Han Quoc', khoiLuong: 870},
    {ten: 'Hi nu', size:'RG', giaNiemYet: 8800, noiNhap:'Nhat Ban', khoiLuong: 870},
    {ten: 'Hi V', size:'RG', giaNiemYet: 40500, noiNhap:'Han Quoc', khoiLuong: 1000},
    {ten: 'Strike Freedom', size:'MG', giaNiemYet: 56000, noiNhap:'Han Quoc', khoiLuong: 890},
    {ten: 'Strike Freedom', size:'HG', giaNiemYet: 4000, noiNhap:'Nhat Ban', khoiLuong: 570},
    {ten: 'Hi V', size:'RG', giaNiemYet: 8000, noiNhap:'Nhat Ban', khoiLuong:1000},
    {ten: 'Freedom 2.0', size:'MG', giaNiemYet: 45000, noiNhap:'Han Quoc', khoiLuong: 950},
    {ten: 'Freedom 2.0', size:'MG', giaNiemYet: 8000, noiNhap:'Nhat Ban', khoiLuong: 950},
]

let tiGia = [
    {ten: 'Nhat Ban', giaTri:187},
    {ten: 'Han Quoc', giaTri:20},
]

let giaShip = [
    {ten: 'Han Quoc', giaTien:9600, trongLuong: 10000},
    {ten: 'Nhat Ban', giaTien:4500, trongLuong: 10000},
]

let copyHangHoa = JSON.stringify(hangHoa)
let dataHangHoa = JSON.parse(copyHangHoa)

let copyTiGia = JSON.stringify(tiGia)
let dataTiGia = JSON.parse(copyTiGia)

let copyGiaShip = JSON.stringify(giaShip)
let dataGiaShip = JSON.parse(copyGiaShip)

for (let i = 0; i < dataGiaShip.length; i++) {
    const element = dataGiaShip[i];
    for (let j = 0; j < dataTiGia.length; j++) {
        const element1 = dataTiGia[j];
        if(element.ten === element1.ten){
            element.giaTienShip = element.giaTien*element1.giaTri
        }
    }
}

for (let i = 0; i < dataHangHoa.length; i++) {
    const element = dataHangHoa[i];
    for (let j = 0; j < dataGiaShip.length; j++) {
        const element1 = dataGiaShip[j];
        if (element.noiNhap === element1.ten) {
            element.tienShip = (element.khoiLuong/element1.trongLuong) * element1.giaTienShip
            element.tienShip = Math.round(element.tienShip)
        }
    }
}

for (let i = 0; i < dataHangHoa.length; i++) {
    const element = dataHangHoa[i];
    for (let j = 0; j < dataTiGia.length; j++) {
        const element1 = dataTiGia[j];
        if (element.noiNhap === element1.ten) {
            element.giaTriTho = (element.giaNiemYet*element1.giaTri) + element.tienShip
        }
    }
}

// b

var hangNhap = []
function nhapHang (input , name , size , contry , soLuong){
    for (let i = 0; i < input.length; i++) {
        const element = input[i];
        for (let j = 0; j <= soLuong; j++) {
            if (element.ten === name && element.size === size && element.noiNhap === contry) {
                hangNhap.push(element)
            }
        }
    }
    return hangNhap
}

nhapHang(dataHangHoa , 'Freedom 2.0' , 'MG', 'Han Quoc' , 1)
nhapHang(dataHangHoa , 'Hi V' ,'RG' , 'Han Quoc' , 4)
nhapHang(dataHangHoa , 'Strike Freedom', 'HG' , 'Nhat Ban' , 2)
console.log(hangNhap);

var sum = 0
for (let i = 0; i < hangNhap.length; i++) {
    const element = hangNhap[i];
    sum += element.giaTriTho
}
console.log(sum);

// c
