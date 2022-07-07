/**
 * Bai 3: var all = [
  {name: 'huy', score: 10, class: 'A'},
  {name: 'huy', score: 7, class: 'B'},
  {name: 'hung', score: 8, class: 'A'},
  {name: 'kien', score: 6, class: 'A'},
  {name: 'kien', score: 9, class: 'B'},
  {name: 'binh', score: 8, class: 'B'},
  {name: 'huy', score: 5, class: 'B'},
  {name: 'hung', score: 6, class: 'A'},
  {name: 'hung', score: 7, class: 'B'},
]
a, sắp xếp theo điểm giảm dần, nếu điểm bằng nhau thì xếp theo tên
b, hãy lọc trùng array trên theo trên (mỗi tên người chỉ hiện 1 lần)
c, hãy cho biết mỗi lớp có bao nhiêu người
 */

var all = [
    {name: 'huy', score: 10, class: 'A'},
    {name: 'huy', score: 7, class: 'B'},
    {name: 'hung', score: 8, class: 'A'},
    {name: 'kien', score: 6, class: 'A'},
    {name: 'kien', score: 9, class: 'B'},
    {name: 'binh', score: 8, class: 'B'},
    {name: 'huy', score: 5, class: 'B'},
    {name: 'hung', score: 6, class: 'A'},
    {name: 'hung', score: 7, class: 'B'},
  ]

// a

var sapXep = all.sort(function(a , b){
    if(a.score > b.score){
        return -1
    }else if(a.score == b.score){
        if(a.name < b.name){
            return -1
        }
    }
})
console.log(sapXep);

// b


// function student (input){
//     for (let i = 0; i < input.length; ++i){
//         for (let j = 0; j < input.length; ++j){
//             if (i !== j && input[i].name === input[j].name){
//                input.splice(j, 1);            
//             }
//         }
//     }
//     return input
// }

// console.log(57 , student(all));

// cách 2
var newArray = all.filter(function(value , index){
    return index === all.findIndex(function(data){
        return value.name === data.name
    })
})

console.log(66 ,newArray);
// c
var countA = 0;
var countB = 0;
for (let i = 0; i < all.length; i++) {
    const element = all[i];
    if(element.class == 'A'){
        countA++
    }else if(element.class == 'B'){
        countB++
    }
}
console.log(`Số học sinh của lớp A là : ${countA}
Số học sinh của lớp B là : ${countB}`);
