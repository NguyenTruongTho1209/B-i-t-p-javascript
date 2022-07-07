let linkImg = ['https://img.thuthuatphanmem.vn/uploads/2018/11/05/cach-trong-hoa-anh-dao-nhat-ban_113554421.jpg', 'https://topshare.vn/wp-content/uploads/2020/06/anh-dep-3d-thien-nhien-ho-nuoc-trong.jpg', 'https://nhathauxaydung24h.com/wp-content/uploads/2021/12/hinh-anh-dep-1.jpg'];

let i = 0;
let body = document.querySelector('body')
setInterval(function() {
    document.querySelector('.img-big img').setAttribute('src', `${linkImg[i]}`)
    i++;
    if (i == linkImg.length) {
        linkImg.unshift('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5G3IWeW4aucLXSeC-yuxtp17aZhNVBEeqchK7Rsw5O8tnu1KOjsMuQX-imwU5q9MydII&usqp=CAU')
        i = 0;
    }
}, 2000)