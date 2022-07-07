/**
 * Bài 5: 
var user= [
  {username: 'huy', age: 15},
  {username: 'vinh', age: 20},
  {username: 'nam', age: 16},
  {username: 'tien', age: 25},
  {username: 'binh', age: 30},
  {username: 'kien', age: 17}
]
 
Hãy viết function có đầu vào là 1 number để tăng tuổi của tất cả user lên number đơn vị
 */
var user= [
    {username: 'huy', age: 15},
    {username: 'vinh', age: 20},
    {username: 'nam', age: 16},
    {username: 'tien', age: 25},
    {username: 'binh', age: 30},
    {username: 'kien', age: 17}
  ]

  function upAge (input , number){
      for(var i = 0 ; i < input.length ; i++){
          input[i].age = input[i].age + number
      }
      return input
  }

console.log(upAge(user , 1));