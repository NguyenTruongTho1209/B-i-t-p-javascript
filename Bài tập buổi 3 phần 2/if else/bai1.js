/**
 * Bài 1 :
 Áp dụng hàm điều kiện ( if else ) để giải phương trình bậc 2 : ax2 +bx + c = 0 

Nếu a và b cùng bằng 0 thì phương trình vô nghiệm.
Nếu a=0 thì phương trình có một nghiệm là (-c/b).
Nếu b*b -4a*c < 0, thì phương trình vô nghiệm.

delta = b2 – 4*a*c . 
 */

var x1 = 0 , x2 = 0;
var a = 1 , b = 3 , c = 2;
var delta = b**2 - 4*a*c;
if(a == 0){
    if(b == 0){
        if(c == 0){
            console.log('Phương trình vô nghiệm');
        }else{
            console.log('Phương trình vô nghiệm');
        }
    }else{
        console.log(`Phuowng trình có một nhiệm là : ${x1 = (-b/c)}`);
    }
}else{
    if(delta > 0){
        console.log(`Phương trình có hai nghiệm phân biệt : 
        x1 = ${x1 = (-b + delta**(1/2))/2}
        x2 = ${x2 = (-b - delta**(1/2))/2}`);
    }else if(delta = 0){
        console.log(`Phương trình có nghiệm kép : 
        x1 = x2 = ${x1 = (-b/2*a)}`);
    }else{
        console.log('Phương trình vô nghiệm');
    }
}