/**
 * 2
cho array ['10/10/2020', '3/1/2021', '1/1/2022', '30/3/2019']
hãy sắp xếp các date tăng dần
 */

var array2 = ['10/10/2020', '3/1/2021', '1/1/2022', '30/3/2019']

var hoanDoi = array2.map(function(value){
    var date = value.split('/')
    var doiCho = date.reverse();
    var newDate = doiCho.join('/')
    return newDate
})

console.log(hoanDoi);

var sapXep = hoanDoi.sort(function(a , b){
    if(a.split('/')[0] < b.split('/')[0]){
        return - 1
    }else if(a.split('/')[0] === b.split('/')[0]){
        if(a.split('/')[1] < b.split('/')[1]){
            return -1
        }else if(a.split('/')[0] === b.split('/')[0]){
            if(a.split('/')[0] < b.split('/')[0]){
                return -1
            }
        }
    }
})
console.log(31 , sapXep);

// cách 2 :
var newArray = array2.map(function(value){
    var newDateArray = value.split('/');
    var reverseDate = newDateArray.reverse();

    if(reverseDate[1] < 10){
        reverseDate[1] = '0' + reverseDate[1]
    }

    if(reverseDate[2] < 10){
        reverseDate[2] = '0' +reverseDate[2]
    }

    return reverseDate.join('/')
}).sort(function(a , b){
    if(a > b){
        return -1
    }
})