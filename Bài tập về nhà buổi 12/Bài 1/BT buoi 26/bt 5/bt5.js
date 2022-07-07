let body = document.querySelector('body')

setInterval(function() {
    let randomColor = Math.floor(Math.random() * 16777215).toString(16);
    body.innerHTML = '#' + `${randomColor}`
    body.setAttribute('style', `background-color:${'#'+randomColor}`)
}, 1000)