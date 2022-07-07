// let sum = 0
// let theDiv = document.createElement('div')
// document.querySelector('.dowload').append(theDiv)

// let phanTram = setInterval(function() {
//     let random = Math.round(Math.random() * 10 + 10)
//     sum = sum + random
//     theDiv.setAttribute('style', `background-color:green; color:white; width:${sum + '%'}; height:50px; display:flex; flex-direction: column; align-items: center; justify-content: center;  `)

//     theDiv.innerHTML = sum + '%'

//     if (sum >= 100) {
//         sum = 100
//         theDiv.setAttribute('style', `background-color:green; color:white; width:${sum + '%'}; height:50px; display:flex; flex-direction: column; align-items: center; justify-content: center;  `)

//         theDiv.innerHTML = 'DONE'
//         clearInterval(phanTram)

//     }
// }, 1000)



let theDiv = document.createElement('div')
document.querySelector('.dowload').append(theDiv);
let sum = 0;
let time = setInterval(function() {
    let random = Math.floor(Math.random() * 10 + 10)
    sum = sum + random;
    theDiv.innerHTML = sum + '%';
    theDiv.setAttribute('style', `background-color: green; color:white; width:${sum + '%'};height:50px;display: flex;align-items: center;justify-content: center;`)
    if (sum >= 100) {
        sum = 100
        theDiv.setAttribute('style', `background-color: green; color:white; width:${sum + '%'};height:50px;display: flex;align-items: center;justify-content: center;`)

        let button = document.createElement('button')
        document.querySelector('.dowload').append(button)
        button.setAttribute('style', `padding: 12px 24px;background-color: black;cursor: pointer;
        border: none;color: white; float:right; margin-top:20px; margin-right: 20px `)
        button.innerHTML = 'DONE'

        theDiv.innerHTML = ''

        clearInterval(time);
    }
}, 1000)