/**
 * // Bài 3: 
// cho obj1 = [
//     {ten: 'nam', soDiem: 10, diemVung: 1},
//     {ten: 'linh', soDiem: 6, diemVung: 3},
//     {ten: 'phan', soDiem: 7, diemVung: 2},
//     {ten: 'pham', soDiem: 8, diemVung: 1},
// ]

// vung = [
//     {vung: 1, cong: 0},
//     {vung: 2, cong: 1},
//     {vung: 3, cong: 2},
// ]
// Hãy tạo danh sách điểm thi sau khi cộng điểm vùng sao cho dữ liệu ở obj1 không thay đổi
 */

let obj1 = [
    {ten: 'nam', soDiem: 10, diemVung: 1},
    {ten: 'linh', soDiem: 6, diemVung: 3},
    {ten: 'phan', soDiem: 7, diemVung: 2},
    {ten: 'pham', soDiem: 8, diemVung: 1},
]

let vung = [
    {vung: 1, cong: 0},
    {vung: 2, cong: 1},
    {vung: 3, cong: 2},
]
let obj = JSON.stringify(obj1)
let diemThi = JSON.parse(obj)

for (let i = 0; i < diemThi.length; i++) {
    const element = diemThi[i];
    for (let j = 0; j < vung.length; j++) {
        const elementVung = vung[j];
        if(element.diemVung === elementVung.vung){
            element.diem = element.soDiem + elementVung.cong
        }
    }
}
console.log(diemThi);
console.log(obj1);