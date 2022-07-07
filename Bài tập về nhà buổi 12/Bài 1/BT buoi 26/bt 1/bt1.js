// let day = new Promise(function(res, rej) {

//     })
//     .then(function(data) {
//         console.log(data.toString());
//     }).catch(function(err) {
//         console.log(err);
//     })


setInterval(function() {
    let date = new Date()
    document.querySelector('body').innerHTML = date
}, 1000)