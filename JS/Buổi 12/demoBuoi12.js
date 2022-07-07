let h1 = document.querySelector('.header')

h1.innerHTML = '<img src="https://cdn.tgdd.vn/2021/11/campaign/cach-choi-raiden-genshin-impact-thong-tin-guide-skill-moi-thumb-640x360.jpg" alt="">'

let input = document.querySelector('input')

console.log(input.setAttribute('type' , 'password'));
document.querySelector('body').setAttribute('style' , 'background: yellow; color: red');

// document.querySelector('img').remove()


// Tạo ra thẻ H3

let h3 = document.createElement('h3')

h3.innerHTML = 'Fandom Raiden Shogun'
// thêm vô giao diện html
// document.querySelector('body').append(h3)
// cho lên đầu
document.querySelector('body').prepend(h3)