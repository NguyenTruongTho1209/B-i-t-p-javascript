/**
 * B1
	Hãy áp dụng DOM để hiển thị ngày giờ hiện lại lên giao diện
	Mỗi giây cập nhật 1 lần
 */

setInterval(function(){
	let date = new Date()
	document.querySelector('body').innerHTML = date
} , 1000)