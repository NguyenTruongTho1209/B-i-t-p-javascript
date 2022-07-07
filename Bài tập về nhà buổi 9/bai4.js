/**
 * Bài 4: Cho mảng:
var persons = [{
  name: 'Nam',
  job: 'Dev'
}, {
  name: 'Duong',
  job: 'Tester'
}]

hãy copy mảng trên và thay đổi tên dev thành ‘Kiên’, đổi tên tester thành ‘Hùng’ 
sau khi đổi tên data cũ không bị ảnh hưởng

 */
var persons = [{
    name: 'Nam',
    job: 'Dev'
  }, {
    name: 'Duong',
    job: 'Tester'
  }]


let copy = JSON.stringify(persons)
let data = JSON.parse(copy)

for (let i = 0; i < data.length; i++) {
    const element = data[i];
    if(element.job == 'Dev'){
        element.name = 'Kiên'
    }else if(element.job == 'Tester'){
        element.name = 'Hùng'
    }
}
console.log(persons);
console.log(data);