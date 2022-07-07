/**
 * Bài 8  :  

var cuaHang = [
    {
        ten: 'Bia',
        loai: 'A',
gia:10000,
soLuong:200
     },
{
        ten: 'Rượu',
        loai: 'A',
gia:20000,
soLuong:50
     },
{
        ten: 'Coca',
        loai: 'A',
gia:15000,
soLuong:100
     },
{
        ten: 'Bia Tươi',
        loai: 'B',
gia:12000,
soLuong:55
     },{
        ten: 'Rượu Vang',
        loai: 'B',
gia:50000,
soLuong:250
     },{
        ten: 'Bánh Đa',
        loai: 'C',
gia:5000,
soLuong:300
     },{
        ten: 'Lạc giang',
        loai: 'C',
gia:12000,
soLuong:200
     },{
        ten: 'Lạc luộc',
        loai: 'B',
gia:14000,
soLuong:150
     }, 
    ]
 
let bienLai = [{
	ten:'Lạc luộc',
	soLuong:20
},
{
	ten:'Bia',
	soLuong:10
},
{
	ten:'Bánh Đa',
	soLuong:20
}     
]
// c1 viết promise in ra tất cả các sản phẩm của cửa hàng nếu không ra thì trả về (false) .
// c2: viết promise in ra tất cả các sản phẩm theo từng loại A,B,C .
// c3 viết promise in ra tất cả các sản phẩm có giá >=15000 .
// c4: Tính tiền theo biên lai .Nếu số lượng trong cửa hàng không đủ thì in ra “ cửa hàng đủ sản phẩm “

 */
let cuaHang = [
    {
        ten: 'Bia',
        loai: 'A',
        gia:10000,
        soLuong:200
     },
{
        ten: 'Rượu',
        loai: 'A',
        gia:20000,
        soLuong:50
     },
{
        ten: 'Coca',
        loai: 'A',
        gia:15000,
        soLuong:100
     },
{
        ten: 'Bia Tươi',
        loai: 'B',
        gia:12000,
        soLuong:55
     },{
        ten: 'Rượu Vang',
        loai: 'B',
        gia:50000,
        soLuong:250
     },{
        ten: 'Bánh Đa',
        loai: 'C',
        gia:5000,
        soLuong:300
     },{
        ten: 'Lạc giang',
        loai: 'C',
        gia:12000,
        soLuong:200
     },{
        ten: 'Lạc luộc',
        loai: 'B',
        gia:14000,
        soLuong:150
     }, 
    ]
 
let bienLai = [{
	ten:'Lạc luộc',
	soLuong:20
},
{
	ten:'Bia',
	soLuong:10
},
{
	ten:'Bánh Đa',
	soLuong:20
}     
]

// a

let promise = new Promise(function(res , rej){
    let sanPhan = []
    for (let i = 0; i < cuaHang.length; i++) {
        const element = cuaHang[i];
        sanPhan.push(element)
    }
    res(sanPhan)
}).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})

// b
let promise1 = new Promise(function(res){
    function phanLoai ( input , tenLoai){
        let newSanPham = input.filter(function(value){
            if (value.loai === tenLoai) {
                return true
            }
        })
        return newSanPham
    }
    res(phanLoai(cuaHang , 'A'))
}).then(function(data){
    console.log(data);
})

// c
for (let i = 0; i < cuaHang.length; i++) {
    const element = cuaHang[i];
    let promise2 = new Promise(function(res){
        if(element.gia >= 15000){
            res(element)
        }
    }).then(function(data){
        console.log(data);
    })
}

// d
let promise4 = new Promise(function(res){
    for (let i = 0; i < bienLai.length; i++) {
        const element = bienLai[i];
        for (let j = 0; j < cuaHang.length; j++) {
            const elementCuahang = cuaHang[j];
            if (element.ten === elementCuahang.ten) {
                if (element.soLuong > elementCuahang) {
                    console.log('Cửa hàng ko đủ sản phẩm');
                }else{
                    element.gia = element.soLuong*elementCuahang.gia
                    elementCuahang.soLuong = elementCuahang.soLuong - element.soLuong
                }
            }
        }
    }
    res(bienLai)
}).then(function(data){
    console.log(data);
})

