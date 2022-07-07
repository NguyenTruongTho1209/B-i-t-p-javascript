/**
 * Bài 4  : 
var  phim = [{ten:'Người Sắt',thoiLuong:120, danhGia:100},
{ten:'Người Dơi',thoiLuong:180, danhGia:70},
{ten:'Xmen',thoiLuong:150, danhGia:80},
{ten:'Avenger 1',thoiLuong:140, danhGia:30},
{ten:'Avenger 2',thoiLuong:180, danhGia:75}
{ten:'Avenger 3',thoiLuong:120, danhGia:83},
{ten:'Avenger : End games',thoiLuong:180, danhGia:73},
{ten:'Thor',thoiLuong:180, danhGia:10},
]

Viết function để xử lý data sau  :  
a ) viết function tìm kiếm phim theo tên ( một chuỗi string)  .Nếu không tìm thấy thì trả về “ Không tìm thấy “   .
b ) viết function   tìm kiếm phim đánh giá ( thang điểm  / 100 ) 
. Nếu người dùng tìm kiếm theo “Tốt nhất “ thì in ra phim có đánh giá cao nhất  .
  Nêú người dùng tìm kiếm “ Tệ nhất” thì in ra phim có đánh giá thấp nhất

 */

var phim = [
{ten:'Người Sắt',thoiLuong:120, danhGia:100},
{ten:'Người Dơi',thoiLuong:180, danhGia:70},
{ten:'Xmen',thoiLuong:150, danhGia:80},
{ten:'Avenger 1',thoiLuong:140, danhGia:30},
{ten:'Avenger 2',thoiLuong:180, danhGia:75},
{ten:'Avenger 3',thoiLuong:120, danhGia:83},
{ten:'Avenger : End games',thoiLuong:180, danhGia:73},
{ten:'Thor',thoiLuong:180, danhGia:10},
]

// a
var tenPhim = 'Ngư';
function timPhim (Name , Array){
    for(var i = 0 ; i < Array.length ; i ++){
        if(Array[i].ten == Name){
            console.log(Array[i]);
        }
    }
}
timPhim('Người Sắt' , phim)

// b

function searchReview(Review , Array){
    var max = 0;
    var min = Array[0];
    if(Review == 'Tốt nhất'){
        for(var i = 0 ; i < Array.length; i++){
            if(max < Array[i].danhGia){
                max = Array[i]
            }
        }
        console.log(max);
    }else if(Review == 'Tệ nhất'){
        for(var i = 0 ; i < Array.length ; i++){
            if(min.danhGia > Array[i].danhGia){
                min = Array[i]
            }
        }
        console.log(min);
    }else{
        console.log('Hãy lựa ghi đúng với lựa chọn');
    }
}

searchReview('Tệ nhất' , phim)