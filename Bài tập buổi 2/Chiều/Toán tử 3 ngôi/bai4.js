/**
 * Bài 4 
Khai báo biến tuoi với số dương bất kỳ  
Nếu tuoi < 13  in ra kết quả “Trẻ em “ 
nếu. 13 < =  tuoi < = 17 in ra kết quả “ Thiếu niên “ ,
nếu 18 < = tuoi < = 39  in ra kết quả “ Trưởng thành “ 
nếu 40 < = tuoi < = 65  in ra kết quả “ Trung niên “ 
còn lại in ra kết quả “ Già”
 */

var tuoi = -1;

// sử dụng toán tử 3 ngôi
console.log(
    tuoi < 0 ? 'Tuổi không hợp lệ' : (
        tuoi < 13 && tuoi > 0 ? 'Trẻ em' : (
            tuoi >= 13 && tuoi <= 17 ? 'Thiếu niên' : (
                tuoi >= 18 && tuoi <= 39 ? 'Trưởng thành' : (
                    tuoi >= 40 && tuoi <= 65 ? 'Trung niên' : 'Già')))));

// sử dụng if else

if(tuoi < 0){
    console.log('Tuổi không hợp lệ');
}else if(tuoi < 13 && tuoi > 0){
    console.log('Trẻ em');
}else if(tuoi >= 13 && tuoi <= 17) {
    console.log('Thiếu niên');
}else if (tuoi >= 18 && tuoi <= 39) {
    console.log('Trưởng thành');
}else if (tuoi >= 40 && tuoi <= 65){
    console.log('Trung niên');
}else{
    console.log('Già');
}