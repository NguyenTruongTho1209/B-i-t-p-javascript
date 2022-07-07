/**
 * B8
var all = [
  {name: 'huy', score: 10, class: 'A'},
  {name: 'hai', score: 7, class: 'B'},
  {name: 'hung', score: 8, class: 'A'},
  {name: 'kien', score: 6, class: 'A'},
  {name: 'vinh', score: 9, class: 'B'},
  {name: 'binh', score: 8, class: 'B'},
  {name: 'cuong', score: 5, class: 'B'},
  {name: 'chien', score: 6, class: 'A'},
  {name: 'minh', score: 7, class: 'B'},
]

var doiTuyen = ['huy', 'vinh', 'binh', 'hung', 'minh']

a, Hãy tạo ra arrayA chỉ chứa object  các học sinh lớp A

b, Hãy tạo ra array chứa object các học viên có điểm từ 6 trở xuống

c, Hãy tạo ra array vip chứa object các học viên tham gia đội tuyển
 */
var all = [
    {name: 'huy', score: 10, class: 'A'},
    {name: 'hai', score: 7, class: 'B'},
    {name: 'hung', score: 8, class: 'A'},
    {name: 'kien', score: 6, class: 'A'},
    {name: 'vinh', score: 9, class: 'B'},
    {name: 'binh', score: 8, class: 'B'},
    {name: 'cuong', score: 5, class: 'B'},
    {name: 'chien', score: 6, class: 'A'},
    {name: 'minh', score: 7, class: 'B'},
  ]
  var doiTuyen = ['huy', 'vinh', 'binh', 'hung', 'minh']

  // a
  var arrayA = all.filter(function(value){
      if(value.class == 'A'){
          return true
      }
  })

  console.log(43,arrayA);

  // b
  var diem = all.filter(function(value){
      if(value.score < 6){
          return true
      }
  })
  console.log(51, diem);

  // c
  var arrayVip = all.filter(function(value){
      for(var i = 0 ; i < doiTuyen.length ; i++){
          if(doiTuyen[i] == value.name){
              return true
          }
      }
  })

  console.log(62 , arrayVip);