/**
 * Bài 3 : 
Hãy copy các array, object sau để khi chỉnh sửa bản copy không ảnh hưởng đến bản gốc
a, [3,5,4,9,8]
b, {name:'tung', age:20}
c, [
	{name:'tung', age:20},
	{name:'cuong', age:21}
]

d, {
	name: 'trung',
	friend:['hai', 'vinh']
	address:{number: 20, street:'nguyen trai'}
}

 */
// a
let array = [3,5,4,9,8]

let copyArray = JSON.stringify(array)
let newArray = JSON.parse(copy)

// newArray.push(4)
// console.log(array);
// console.log(newArray);

// b
let object = {name:'tung', age:20}

let copyObject = JSON.stringify(object)
let newObject = JSON.parse(copyObject)

// c
let arrayObject = [
	{name:'tung', age:20},
	{name:'cuong', age:21}
]

let copyArrayObject = JSON.stringify(arrayObject)
let newArrayObject = JSON.parse(copyArrayObject)

// d

let account = {
	name: 'trung',
	friend:['hai', 'vinh'],
	address:{number: 20, street:'nguyen trai'}
}

let copyAcount = JSON.stringify(account)
let newAccount = JSON.parse(copyAcount)