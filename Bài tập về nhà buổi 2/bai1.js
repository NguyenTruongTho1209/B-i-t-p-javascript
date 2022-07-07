/**
 * 1,
Khai báo số x có giá trị bất kỳ
Nếu x < 0 thì in ra x là số âm	
Nếu x = 0 thì in ra x = 0
Nếu x > 0, và x là số nguyên thì in ra x là số nguyên dương	
Nếu x > 0, và là số thập phân thì in ra x là số thập phân dương

 */

var x = 0;

// console.log(x < 0 ? 'x là số âm' : 
// (x == 0 ? 'x là số 0' : 
// (x > 0 && x%1 == 0 ? 'x là số nguyên dương' : 
// (x > 0 && x%1 != 0 ? 'x là số thập phân dương' : 0))));

// sử dụng if else 

if (x > 0){
    if(x%1 == 0){
        console.log('x là số nguyên dương');
    }else{
        console.log('x là số thập phân dương');
    }
}else if (x < 0){
    if(x%1 == 0){
        console.log('x là số nguyên âm');
    }else{
        console.log('x là số thập phân âm');
    }
}else{
    console.log('x là số 0');
}