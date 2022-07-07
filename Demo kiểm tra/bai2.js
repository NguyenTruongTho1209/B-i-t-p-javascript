/**
 * Bài 2 : 

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

a, Lọc các học viên cùng lớp , lọc các học viên cùng điểm .
b, Hãy tạo ra array chứa object các học viên có điểm từ 7 trở xuống
c, Hãy tạo ra array vip chứa object các học viên tham gia đội tuyển .
d ) Cho biết mỗi lớp có bao nhiêu người . 
e ) sắp xếp theo điểm giảm dần, nếu điểm bằng nhau thì xếp theo tên

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
  // lọc các học viên cũng lớp

  function nameClass (input , nameClass){
      var student = [];
      for (let i = 0; i < input.length; i++) {
          const element = input[i];
          if(element.class == nameClass){
              student.push(element)
          }
      }
      return student;
  }
  console.log(52 , nameClass(all , 'A'));

  // lọc các sinh viên cùng điểm

  function scoreStudent (input , scores){
      var student = [];
      for (let i = 0; i < input.length; i++) {
          const element = input[i];
          if(element.score == scores){
              student.push(element)
          }
      }
      if(student.length == 0){
          console.log('Không có học sinh nào');
      }
      return student
  }
  console.log(66 , scoreStudent(all , 4));

  // b
  var hocSinh = []
  for (let i = 0; i < all.length; i++) {
      const element = all[i];
      if(element. score <= 7){
          hocSinh.push(element)
      }
  }

  console.log(77 , hocSinh);
  // c
  var vipStudent = all.filter(function(value){
      for (let i = 0; i < doiTuyen.length; i++) {
          const element = doiTuyen[i];
          if(value.name === element){
              return true
          }
      }
  })
  console.log(87 , vipStudent);

// d
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

// e
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