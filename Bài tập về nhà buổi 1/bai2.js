/**
 * Bài 2, 
cho object user = {
	ten: ‘tung’,
	tuoi: 20
}

a, hãy in ra tên và tuổi của user
b, hãy thêm cho user họ là ‘nguyễn’
c, hãy thay đổi tuổi thành 30
 */

var user = {
    ten: 'tung',
    tuoi: 20
}

// a
console.log(user.ten);
console.log(user.tuoi);

// b
user.ho = 'nguyễn';
console.log(user);

// c
user.tuoi = 30;
console.log(user);

