/**
 * Bài 5: gõ search kết quả tìm kiếm liên tục, khi nào dùng gõ 1 giây thì mới in ra kết quả.
1 input bắt sự kiện onkeypress trong callback sử dụng clearTimeout vs setTimeout để hủy bỏ việc gõ liên tiếp như sau:
function(value){
	clearTimeout(typing);
	var typing = setTimeout(function(){
		alert('ban da go' + value);
	} , 1000);
}
 */

// let input = $('input')
// input.on('click' , function(){
//     clearTimeout(typing);
// 	var typing = setTimeout(function(){
// 		alert('ban da go ' + input.val()*1);
// 	} , 1000);
// })

// chữa bài 

let input = $('input')
let time
input.on('keyup' , function(){
	clearTimeout(time)

	time = setTimeout(function(){
		alert('bạn đã gõ '+input.val());
	} , 1000)
})