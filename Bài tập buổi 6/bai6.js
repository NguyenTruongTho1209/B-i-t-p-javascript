/**
 * Bài 6: 
var arr = ['thai', 'linh', 'tung', 'quan', 'khang']

var data = [
{name: 'Thai', age: 15,},
{name: 'Kien', age: 10,},
{name: 'Linh', age: 12,},
{name: 'Tung', age: 11,},
{name: 'Thinh', age: 16,},
{name: 'Thuan', age: 13,},
]

hãy tạo array chứ các object thông tin học sinh có tên trong arr

 */
var array6 = ['thai', 'linh', 'tung', 'quan', 'khang']
var data = [
{name: 'Thai', age: 15,},
{name: 'Kien', age: 10,},
{name: 'Linh', age: 12,},
{name: 'Tung', age: 11,},
{name: 'Thinh', age: 16,},
{name: 'Thuan', age: 13,},
]
var fixName = array6.map(function(value){
    return value.replace(value[0] , value[0].toUpperCase())
})

var student = data.filter(function(value){
    for (let i = 0; i < fixName.length; i++) {
        const element = fixName[i];
        if(value.name == element){
            return true
        }
    }
})
console.log(student);