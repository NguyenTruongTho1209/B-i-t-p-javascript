/**
 * Bài 7 
Sử dụng toán tử ba ngôi   tìm nghiệm của phương trình bậc hai ax2 + bx + c = 0. Biết rằng:
Nếu a và b cùng bằng 0 thì phương trình vô nghiệm.
Nếu a=0 thì phương trình có một nghiệm là (-c/b).
Nếu b*b -4a*c < 0, thì phương trình vô nghiệm.
Nếu không, phương trình có hai nghiệm, dùng công thức tính nghiệm để tính.

 */
var a = 0;
var b = 3;
var c = 2;
var x1;
var x2;

console.log(
    b*b - 4*a*c > 0 && a !== 0 ? 
    `Phương trình có 2 nghiệm phân biệt :
    x1 = ${x1 = (- b + (b*b - 4*a*c)**(1/2)/2*a)}
    x2 = ${x2 = (- b - (b*b - 4*a*c)**(1/2)/2*a)}` : (
        b*b - 4*a*c == 0 ? 
        `Phương trình có 1 nghiệm kép là : 
        x1 = x2 = ${x1 = -c/b}` : (
            b*b - 4*a*c < 0 ? 'Phương trình vô nghiệm' : (
                a == 0 ? 
                `Phương trình có 1 nghiệm kép là : 
                x1 = x2 = ${x1 = -c/b}` : (
                    a == 0 && b == 0 ? 
                    'Phương trình vô nghiệm' : 0)))));

// sử dụng if else
if(a == 0){
    if(b == 0){
        console.log('Phương trình vô nghiệm');
    }else{
        console.log(`Phương trình có nghiệm kép x1 = x2 = ${x1 = -c/b}`);
    }
}else{
    if(b*b - 4*a*c > 0){
        console.log(
            `Phương trình có 2 nghiệm phân biệt :
            x1 = ${x1 = (- b + (b*b - 4*a*c)**(1/2)/2*a)}
            x2 = ${x2 = (- b - (b*b - 4*a*c)**(1/2)/2*a)}`
        );
    }else if(b*b - 4*a*c == 0){
        console.log(`Phương trình có nghiệm kép x1 = x2 = ${x1 = -c/b}`);
    }else{
        console.log('Phương trình vô nghiệm');
    }
}
