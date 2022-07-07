/**
 * Bài 9 : 

var  hoaQua = [
	{ten:'Xoài',sx:'China',sl:'100'},
	{ten:'Xoài',sx:'VietNam',sl:'130'},
	{ten:'Xoài',sx:'ThaiLan',sl:'100'},
	{ten:'Cam',sx:'China',sl:'200'},
    {ten:'Cam',sx:'ThaiLan',sl:'150'},
    {ten:'Nho',sx:'VietNam',sl:'120'},
    {ten:'Xoài',sx:'ThaiLan',sl:'100'},
]

a ) Viết promise in  các trái cây có nơi sản xuất tại VietNam . 
b ) Viết promise in ra  các trái cây có số lượng (sl) > = 150 . 
c ) Áp dụng promise Viết function lọc sản phẩm hoa quả  theo tên  .  
d) Áp dụng promise Viết function lọc sản phẩm hoa quả  theo Nước .  
e ) Áp dụng promise  viết function tính tổng số lượng theo tên Hoa quả , và theo tên nước

 */

let  hoaQua = [
	{ten:'Xoài',sx:'China',sl:100},
	{ten:'Xoài',sx:'VietNam',sl:130},
	{ten:'Xoài',sx:'ThaiLan',sl:100},
	{ten:'Cam',sx:'China',sl:200},
    {ten:'Cam',sx:'ThaiLan',sl:150},
    {ten:'Nho',sx:'VietNam',sl:120},
    {ten:'Xoài',sx:'ThaiLan',sl:100},
]

// a
let promise1 = new Promise(function(res){
    let fruitInVietNam = hoaQua.filter(function(value){
        if (value.sx === 'VietNam') {
            return true
        }
    })
    res(fruitInVietNam)
}).then(function(data){
    console.log(data);
})

// b
let promise2 = new Promise(function(res){
    let soLuong = hoaQua.filter(function(value){
        if(value.sl >= 150){
            return true
        }
    })
    res(soLuong)
}).then(function(data){
    console.log(data);
})

// c
let promise3 = new Promise(function(res){
    function nameFruit (input , name){
        let result = input.filter(function(value){
            if(value.ten === name){
                return true
            }
        })
        return result
    }
    res(nameFruit(hoaQua , 'Xoài'))
}).then(function(data){
    console.log(data);
})

// d
let promise4 = new Promise(function(res){
    function nameCountruy (input , name){
        let result = input.filter(function(value){
            if(value.sx === name){
                return true
            }
        })
        return result
    }
    res(nameCountruy(hoaQua , 'VietNam'))
}).then(function(data){
    console.log(data);
})

// e
let promise5 = new Promise(function(res){
    function soLuong (input , tenHoaQua , nuocSanXuat){
        let tongSoLuong = 0
        let result = input.filter(function(value){
            if(value.sx === nuocSanXuat){
                return true
            }
        })

        for (let i = 0; i < result.length; i++) {
            const element = result[i];
            if (element.ten === tenHoaQua) {
                tongSoLuong += element.sl
            }
        }
        return tongSoLuong
    }
    res(soLuong(hoaQua , 'Xoài' , 'ThaiLan'))
}).then(function(data){
    console.log(data);
})