// B3
// 	Áp dụng DOM để hiển thị số đếm ngược 5s trên giao diện
// 	Sau khi đếm ngược xong thì mới hiển thị button Download

let timeCount = document.createElement('h1')
document.querySelector('.dong-ho').append(timeCount)
let time = 5;
// timeCount.setAttribute('style', 'display: none;')

let thoiGian = setInterval(function() {
    timeCount.innerHTML = time
    if (time === 0) {
        let button = document.createElement('button')
        let btn = document.querySelector('.dong-ho').append(button)
        button.setAttribute('style', `padding: 12px 24px;background-color: green;cursor: pointer;
          border: none;color: yellow; `)
        button.innerHTML = 'DOWNLOAD'

        timeCount.setAttribute('style', 'display: none;')
        clearInterval(thoiGian);
    }
    time--
}, 1000)