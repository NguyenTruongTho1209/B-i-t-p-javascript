// function checkInput(){
//     const input = document.querySelector('input').value
//     if(input * 1){
//         return console.log('number');
//     }else{
//         return console.log('String');
//     }
// }

// giao diện có input và button 
// khi nhập link ảnh và click button thì hiển thị ảnh với link ảnh trong input

// function checkInput(){
//     const input = document.querySelector('input').value
//     let img = document.querySelector('img')
//     if(!img){
//         img = document.createElement('img')
//     }

//     img.setAttribute('src' , input)
//     document.querySelector('body').append(img)
// }

// const button = document.querySelector('button')

// function changeBackGround(){
//     document.querySelector('body').setAttribute('style' , `background : pink`)
// }
// button.addEventListener('click' , changeBackGround)

// button.addEventListener('click' , function(){
//     document.querySelector('body').style.color = 'red'
//     document.querySelector('body').style.fontSize = '30px'
// })

// button.removeEventListener('click' , changeBackGround)

// aray chứa thu chi

let data = [
    {type: true , money: 100000 , detail:'thu tien'},
    {type: false , money: 30000 , detail:'com'},
]


render()

function render(){
    let balance = 0
    const nodeList = document.querySelector('.node-List')
    nodeList.innerHTML = ''
    for(let i = 0 ; i < data.length ; i++){
        const tr = document.createElement('tr')
        tr.innerHTML = `
        <td>${data[i].detail.toLocaleString()}</td>
        <td>${data[i].money.toLocaleString()}</td>
        `
        tr.style.color = data[i].type ? 'green' : 'red'
        nodeList.append(tr)

        if(data[i].type){
            balance += data[i].money
        }else{
            balance -= data[i].money
        }
    }

    document.querySelector('.balance').innerHTML = balance.toLocaleString()
}

function addNote(){
    const money = document.querySelector('#money').value * 1
    const detail = document.querySelector('#detail').value
    const type = document.querySelector('#type').value

    if(!money || !detail){
        alert('Hãy điền đầy đủ thông tin')
    }

    data.push({type , money ,detail})
    document.querySelector('.closeModal').click()
    render()
}