/**
 * // Bài 1: 
nhanSU = [
    {ten: 'nguyen the su', phong: 'Hanh Chinh'}, 
    {ten: 'nguyen van duc', phong: 'coder'}, 
    {ten: 'lai the van', phong: 'coder'}, 
    {ten: 'le van luong', phong: 'coder'}, 
    {ten: 'ngo thi thao', phong: 'tester'}, 
    {ten: 'dao linh huong', phong: 'tester'}, 
    {ten: 'nguyen thi tra my', phong: 'Hanh Chinh'}, 
]

chiTieu = [
    {tenPhong: 'Hanh Chinh', chiTieu: 1200, luongCB: 1800},
    {tenPhong: 'coder', chiTieu: 2000, luongCB: 2500},
    {tenPhong: 'tester', chiTieu: 1300, luongCB: 1500},
]

baoCaoCV = [
    {tenNV: 'nguyen the su', soHT:300},
    {tenNV: 'nguyen van duc', soHT:500},
    {tenNV: 'nguyen the su', soHT:150},
    {tenNV: 'lai the van', soHT:300},
    {tenNV: 'nguyen the su', soHT:300},
    {tenNV: 'ngo thi thao', soHT:240},
    {tenNV: 'dao linh huong', soHT:500},
    {tenNV: 'nguyen thi tra my', soHT:120},
    {tenNV: 'dao linh huong', soHT:300},
    {tenNV: 'ngo thi thao', soHT:360},
    {tenNV: 'le van luong', soHT:400}
]

Hãy dựa vào các bảng trên để tính lương cuối cùng của mỗi người trong array nhanSU biết nếu mà phòng ban của những 
người đó hoàn thành được chỉ tiêu trong bảng chiTieu thì lương của mỗi người được cộng 10% lương 
Nếu k hoàn thành chỉ tiêu thì bị trừ đi 2% lương
Biết tổng chỉ tiêu của mỗi phòng đạt được bằng tổng số phần công việc của từng thành viên trong phòng đó đã thực hiện được khai báo 
là soHT trong array baoCaoCV

 */
let nhanSU = [
    {ten: 'nguyen the su', phong: 'Hanh Chinh'}, 
    {ten: 'nguyen van duc', phong: 'coder'}, 
    {ten: 'lai the van', phong: 'coder'}, 
    {ten: 'le van luong', phong: 'coder'}, 
    {ten: 'ngo thi thao', phong: 'tester'}, 
    {ten: 'dao linh huong', phong: 'tester'}, 
    {ten: 'nguyen thi tra my', phong: 'Hanh Chinh'}, 
]

let chiTieu = [
    {tenPhong: 'Hanh Chinh', chiTieu: 1200, luongCB: 1800},
    {tenPhong: 'coder', chiTieu: 2000, luongCB: 2500},
    {tenPhong: 'tester', chiTieu: 1300, luongCB: 1500},
]

let baoCaoCV = [
    {tenNV: 'nguyen the su', soHT:300},
    {tenNV: 'nguyen van duc', soHT:500},
    {tenNV: 'nguyen the su', soHT:150},
    {tenNV: 'lai the van', soHT:300},
    {tenNV: 'nguyen the su', soHT:300},
    {tenNV: 'ngo thi thao', soHT:240},
    {tenNV: 'dao linh huong', soHT:500},
    {tenNV: 'nguyen thi tra my', soHT:120},
    {tenNV: 'dao linh huong', soHT:300},
    {tenNV: 'ngo thi thao', soHT:360},
    {tenNV: 'le van luong', soHT:400}
]

for (let i = 0; i < baoCaoCV.length; i++) {
    const element = baoCaoCV[i];
    for (let j = 0; j < baoCaoCV.length; j++) {
        const element1 = baoCaoCV[j];
        if(element != element1 && element.tenNV === element1.tenNV){
            element.soHT = element.soHT + element1.soHT
            baoCaoCV.splice(j , 1)
        }
    }
}


let soHoanThanh = nhanSU.map(function(data){
    for (let i = 0; i < baoCaoCV.length; i++) {
        const element = baoCaoCV[i];
        if(data.ten === element.tenNV){
            data.soHT = element.soHT
        }
    }
    return data
})

let copySoHoanThanh = JSON.stringify(soHoanThanh)
let dataSoHoanThanh = JSON.parse(copySoHoanThanh)

var tongHoanThanh = []
for (let i = 0; i < dataSoHoanThanh.length; i++) {
    const element = dataSoHoanThanh[i];
    for (let j = 0; j < dataSoHoanThanh.length; j++) {
        const element1 = dataSoHoanThanh[j];
        if (element != element1 && element.phong === element1.phong) {
            element.soHT += element1.soHT
            dataSoHoanThanh.splice(j , 1)
        }
    }
}


for (let i = 0; i < soHoanThanh.length; i++) {
    const element = soHoanThanh[i];
    tongHoanThanh.push({phong:element.phong , soHT:element.soHT})

}

for (let i = 0; i < tongHoanThanh.length; i++) {
    const element = tongHoanThanh[i];
    for (let j = 0; j < tongHoanThanh.length; j++) {
        const element1 = tongHoanThanh[j];
        if (i != j && element.phong == element1.phong) {
            element.soHT += element1.soHT
            tongHoanThanh.splice(j , 1)
        }
    }
}

var tinhLuong = nhanSU.map(function(value){
    for (let i = 0; i < tongHoanThanh.length; i++) {
        const element = tongHoanThanh[i];
        for (let j = 0; j < chiTieu.length; j++) {
            const element1 = chiTieu[j];
            if(element.phong === element1.tenPhong){
                if (value.phong === element1.tenPhong) {
                    if(element.soHT > element1.chiTieu){
                        value.luong = element1.luongCB + element1.luongCB*(0.1)
                    }else{
                        value.luong = element1.luongCB - element1.luongCB*(0.02)
                    }
                }
            }
        }
    }
    return value
})
console.log(tongHoanThanh);
console.log(tinhLuong);


// Cách 2 
// B1 tổng hoàn thành từng người
var newBaoCao = {}   // nguyen the su : 

for(let i= 0; i < baoCaoCV.length; i++){
    if(!newBaoCao[baoCaoCV[i].tenNV]){
        newBaoCao[baoCaoCV[i].tenNV] = baoCaoCV[i].soHT
    }else{
        newBaoCao[baoCaoCV[i].tenNV] += baoCaoCV[i].soHT
    }
}

// B2 thêm hoàn thành vào nhân sự
var newNhanSu = nhanSU.map(function(value){
    value.HT = newBaoCao[value.ten]
    return value
})

// B3 cộng hoàn thành theo phòng ban
var phongBanTotal = {}
for(let i = 0; i<newNhanSu.length; i++){
    if(!phongBanTotal[newNhanSu[i].phong]){
        phongBanTotal[newNhanSu[i].phong] = newNhanSu[i].HT
    }else{
        phongBanTotal[newNhanSu[i].phong] += newNhanSu[i].HT
    }
}

// B4 so sánh hoàn thành vs chỉ tiêu -> thưởng phạt theo phòng

var newChiTieu = chiTieu.map(function(value){
    value.bonus = value.chiTieu <= phongBanTotal[value.tenPhong] ? 0.1 : -0.02
    value.salary = Math.round(value.luongCB * (1+ value.bonus))
    return value
})

// B5 tính lương

let bangLuong = nhanSU.map(function(value){
    for(let i = 0; i < newChiTieu.length; i++){
        if(value.phong === newChiTieu[i].tenPhong){
            value.salary = newChiTieu[i].salary
            return value
        }
    }
})

// Cách làm cảu chiến thần quý
let tongCv = nhanSU.map(function(value){
    let sum = 0
    baoCaoCV.filter(function(data){
        if(value.ten == data.tenNV){
            sum += data.soHT
            value.tongHT = sum
            // console.log(sum);
        }
    })
    return value
})

// console.log(tongCv);

let TongChiTieu = chiTieu.map(function(value){
    let sum = 0
    tongCv.filter(function(data){
        if(value.tenPhong == data.phong){
            sum += data.tongHT
            value.tongCT = sum
        }
    })
    return value
})

// console.log(TongChiTieu);

let tongCTLast = TongChiTieu.map(function(value){
    if(value.tongCT >= value.chiTieu){
        value.luongSauThuong = value.luongCB + 0.1 * value.luongCB
    }else {
        value.luongSauThuong = value.luongCB * 0.98
    }
    return value
})

console.log(tongCTLast);