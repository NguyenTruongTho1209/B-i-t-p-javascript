let data = {
    '2022/6/1' : [
        {money: 1000000 , type: true , content: 'thu tien' , date: '2022/6/28'},
        {money: 100000 , type: false , content: 'choi' , date: '2022/6/28'},
        {money: 100000 , type: false , content: 'nhau' , date: '2022/6/28'},
        {money: 100000 , type: false , content: 'xang' , date: '2022/6/26'},
        {money: 100000 , type: false , content: 'tap hoa' , date: '2022/6/25'},
        {money: 100000 , type: false , content: 'tien an' , date: '2022/6/24'},
    ],
    '2022/7/1' : [
        {money: 100000 , type: true , content: 'thu tien' , date: '2022/7/28'},
    ]
}

render()

function render(){
    const today = new Date()
    const year = today.getFullYear()
    const month = today.getMonth() + 1

    let key = year + '/' + month + '/' + 1

    let listDate = {}

    for (let i = 0; i < data[key].length; i++) {
        const element = data[key][i].date;
        if(!listDate[element]){
            listDate[element] = [data[key][i]]
        }else{
            listDate[element].push(data[key][i])
        }
    }

    for(const date in listDate){
        const table = document.createElement('table')
        let currentDate = new Date(date)
        table.innerHTML = `
        <head>
            <tr>
                <td class='date>${currentDate.getDate()}</td>
                <td>
                    <p class='day'>${currentDate.toString().slice(0,3)}</p>
                    <p class='month'>${currentDate.getMonth() + 1} ${currentDate.getFullYear()}</p>
                </td>
                <td></td>
                
            </tr>
        </head>
        <tbody class='${date}'>
        
        </tbody>`

        let tbody = table.querySelector('tbody')
        for (let i = 0; i < listDate[date].length; i++) {
            const element = listDate[date][i];
            console.log(element);
            let tr = document.createElement('tr')
            tr.innerHTML = 
            `<td>
                <div class='${listDate[date][i].type}'></div>
            </td>
            <td>
                <div class=''>${listDate[date][i].content}</div>
            </td>
            <td>
                <div class='type${listDate[date][i].type}'>${listDate[date][i].money.toLocaleString()}</div>
            </td>`
            tbody.append(tr);
        }
        document.querySelector('.listData').append(table)
    }

}

function addExpense (){
    const money = document.querySelector('#money').value
    const date = document.querySelector('#date').value
    const content = document.querySelector('#content').value
    const type = document.querySelector('#type').value

    if(!money || !date || !content || !type) return alert('Hay dien du thong tin')

    const today = new Date(date)
    const year = today.getFullYear()
    const month = today.getMonth() + 1

    let key = year+'/'+month+'/'+ 1
    type = type ? true : false
    if(!data[key]) {
        data[key] = [{money: money * 1, type,content ,date}]
    }else{
        data[key].push({money: money*1 , type,content,date})
    }
}