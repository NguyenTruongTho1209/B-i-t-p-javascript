/**
 * bài 9 :  
cho 1 obj có 10 thuộc tính ,dùng vòng lặp  in ra tất cả các phần tất cả key và value
Gợi ý sử dụng for in .
 */

var obj = {
    key1: 'value1',
    key2: 'value2',
    key3: 'value3',
    key4: 'value4',
    key5: 'value5',
    key6: 'value6',
    key7: 'value7',
    key8: 'value8',
    key9: 'value9',
    key10: 'value10'
}

for (const key in obj) {
    console.log(obj[key]);
}
for (const key in obj) {
    console.log(key);
}