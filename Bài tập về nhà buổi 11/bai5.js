/**
 * B5
var Nodemy = [
    {
        ho: 'Nguyen',
        ten: 'A',
        class: 'b1',
        subject: [{
            name: 'html'
        },{
            name: 'css'
        },{
            name: 'js'
        }]
    }, {
        ho: 'Tran',
        ten: 'B',
        class: 'b2',
        subject: [{
            name: 'React'
        },{
            name: 'js'
        }]
    }, {
        ho: 'Nguyen',
        ten: 'C',
        class: 'b3',
        subject: [{
            name: 'css'
        },{
            name: 'React'
        }]
    }, {
        ho: 'Dang',
        ten: 'D',
        class: 'b1',
        subject: [{
            name: 'css'
        },{
            name: 'js'
        },{
            name: 'React'
        }]
    }]
 
// c1 viết promise in ra tất cả họ và tên tất cả học viên trong Nodemy nếu không ra thì trả về (false)
// c2: viết promise in ra tất cả thành viên học html
// c3 viết promise in ra tất cả thành viên có họ Nguyen
// c4: viết promise in ra tất cả học viên có subject >=3 nếu không có thì in ra tất cả học viên có subject nhỏ hoặc bằng 2 
 */

var Nodemy = [
    {
        ho: 'Nguyen',
        ten: 'A',
        class: 'b1',
        subject: [{
            name: 'html'
        },{
            name: 'css'
        },{
            name: 'js'
        }]
    }, {
        ho: 'Tran',
        ten: 'B',
        class: 'b2',
        subject: [{
            name: 'React'
        },{
            name: 'js'
        }]
    }, {
        ho: 'Nguyen',
        ten: 'C',
        class: 'b3',
        subject: [{
            name: 'css'
        },{
            name: 'React'
        }]
    }, {
        ho: 'Dang',
        ten: 'D',
        class: 'b1',
        subject: [{
            name: 'css'
        },{
            name: 'js'
        },{
            name: 'React'
        }]
    }]

// a
let newArray = []
for (let i = 0; i < Nodemy.length; i++) {
    const element = Nodemy[i];
    newArray.push({ho:element.ho , ten:element.ten})
}

let promiseA = new Promise(function(res , rej){
    res(newArray)
    rej(false)
}).then(function(data){
    console.log(data);
}).catch(function(err){
    console.log(err);
})

// b


for (let i = 0; i < Nodemy.length; i++) {
    const element = Nodemy[i];
    for (let j = 0; j < element.subject.length; j++) {
        const elementSubject = element.subject[j];
        let promiseB = new Promise(function(res , rej){
            if(elementSubject.name === 'html'){
                res(element)
            }
        }).then(function(data){
            console.log(123 , data);
        })
    }
}



// c

for (let i = 0; i < Nodemy.length; i++) {
    const element = Nodemy[i];
    let promiseC = new Promise(function(res , rej){
        if(element.ho == 'Nguyen'){
            res(element)
        }
    }).then(function(data){
        console.log(139 , data);
    })
}

// d
for (let i = 0; i < Nodemy.length; i++) {
    const element = Nodemy[i];
        let promiseD = new Promise(function(res , rej){
            if(element.subject.length >= 3){
                res(element)
            }else if(element.subject.length <= 2){
                rej(element)
            }
        }).then(function(data){
            console.log(155 , data);
        }).catch(function(err){
            console.log(157 , err);
        })
    }