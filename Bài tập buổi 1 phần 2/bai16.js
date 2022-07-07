/**
 * Bai 16
var Nodemy = [
    {
        ho: 'Nguyen',
        ten: 'A',
        class: 'b1',
        subject: [{
            name: 'html'
        },{
            name: 'css'
        },{
            name: 'js'
        }]
    }, {
        ho: 'Tran',
        ten: 'B',
        class: 'b2',
        subject: [{
            name: 'React'
        },{
            name: 'js'
        }]
    }, {
        ho: 'Nguyen',
        ten: 'C',
        class: 'b3',
        subject: [{
            name: 'css'
        },{
            name: 'React'
        }]
    }, {
        ho: 'Dang',
        ten: 'D',
        class: 'b1',
        subject: [{
            name: 'css'
        },{
            name: 'js'
        },{
            name: 'React'
        }]
    }]

a,in ra họ và tên của các thành viên trong lớp học
b,Đổi tên môn học html thành Ruby
c,thêm 1 thành viên mới có tên là Hoang Van Duy lớp b4 học môn (html, css, js, react)
d,tính tổng tất cả các môn học mà học viên đã học (lưu ý: tính cả thành viên mới thêm ở ý C)
……

 */

var Nodemy = [
    {
        ho: 'Nguyen',
        ten: 'A',
        class: 'b1',
        subject: [{
            name: 'html'
        },{
            name: 'css'
        },{
            name: 'js'
        }]
    }, {
        ho: 'Tran',
        ten: 'B',
        class: 'b2',
        subject: [{
            name: 'React'
        },{
            name: 'js'
        }]
    }, {
        ho: 'Nguyen',
        ten: 'C',
        class: 'b3',
        subject: [{
            name: 'css'
        },{
            name: 'React'
        }]
    }, {
        ho: 'Dang',
        ten: 'D',
        class: 'b1',
        subject: [{
            name: 'css'
        },{
            name: 'js'
        },{
            name: 'React'
        }]
    }]

// a
console.log(Nodemy[0].ten , Nodemy[1].ten , Nodemy[2].ten , Nodemy[3].ten);

// b
Nodemy[0].subject[0].name = 'Ruby';
console.log(Nodemy[0]);

// c
Nodemy[Nodemy.length] = {
    ho: 'Hoang',
    ten: 'Van Duy',
    class: 'b4',
    subject: [{
        name:'html'
    },{
        name:'css'
    },{
        name:'js'
    },{
        name:'react'
    }]
}
console.log(Nodemy);

// d
tongMonHoc = Nodemy[0].subject.length + Nodemy[1].subject.length + Nodemy[2].subject.length 
+ Nodemy[3].subject.length + Nodemy[4].subject.length;

console.log(tongMonHoc);