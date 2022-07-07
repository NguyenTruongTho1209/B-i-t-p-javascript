console.log($('#username'));
console.log($('.test p'));

console.log($('h1').eq(1));

$('h1').eq(2).html(`
    <p>dong 1</p>
    <p>dong 2</p>
`)

console.log($('#username').val('Raiden Shogun'));

$('body').append(`
<img src="https://cdn.tgdd.vn/2021/11/campaign/cach-choi-raiden-genshin-impact-thong-tin-guide-skill-moi-thumb-640x360.jpg" alt="">`)

$('input').attr('type' , 'text');

// $('body').attr('style' , 'background: red ; color: white')

$('body').css({background: '' , color: 'green'})

$('input').css({padding: '12px'})
function coChu(){
    $('body').css({'font-size': '24px'})
}
$('button').on('click' , coChu)

// $('button').off('click' , coChu)