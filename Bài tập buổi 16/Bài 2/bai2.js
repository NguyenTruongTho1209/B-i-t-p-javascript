/**
 * áp dụng Jquery, localStorage làm todo list có dạng
[
{note: 'làm bài tập', deadline: new Date('2022/10/2'), priority: 'high', done: true},
{note: 'làm bài tập', deadline: new Date('2022/10/2'), priority: 'low', done: false},
{note: 'làm bài tập', deadline: new Date('2022/10/2'), priority: 'medium', done; false},
]
	
chức năng yêu cầu
	thêm sửa xóa công việc
	công việc đã done thì background xanh (background tùy ý chọn)
	công việc đã quá deadline có background đỏ (background tùy ý chọn)

	(tạo ô select option chế độ sắp xếp : 
xếp theo deadline, 
xếp theo ưu tiên, 
xếp theo note, 
xem công việc đã done, 
xem công việc chưa done )

 */

// let data = [
//     {note: 'làm bài tập', deadline: new Date('2022/10/2'), priority: 'high', done: true},
//     {note: 'làm bài tập', deadline: new Date('2022/10/2'), priority: 'low', done: false},
//     {note: 'làm bài tập', deadline: new Date('2022/10/2'), priority: 'medium', done: false},
//     ]

let data = window.localStorage.getItem('todo')

if(!data){
    data = window.localStorage.setItem('todo' , '[]');
    data = []
}else {
    data = JSON.parse(data)
}

var index = 0

function add(){
    const note = $('#note').val()
	const deadline = $('#deadline').val()
	const priority = $('#priority').val()
	const done = $('#done').val()

	if(!note || !deadline || !priority || !done) return alert('dien du thong tin');

	data.push({note: note, deadline: deadline , priority: priority , done:done})
    window.localStorage.setItem('todo' , JSON.stringify(data))
	$('.closeModal').trigger('click');
	render()
}

function render(){
	$('.listData').html('')
    data.map(function(value , i){
        $('.listData').append(`
            <div class='user user${i}' data-bs-toggle="modal" data-bs-target="#exampleModal">
                note : ${value.note}<br>
                deadline : ${value.deadline}<br>
				priority : ${value.priority}
            </div>
        `)
        $(`.user${i}`).on('click' , function(){
            index = i
            $('.update').css({display: 'inline-block'})
            $('.delete').css({display: 'inline-block'})
            $('.create').css({display: 'none'})
        })

		if(value.done === 'true'){
			$(`.user${i}`).css({background: 'green'})
		}

		if(value.done === 'false'){
			$(`.user${i}`).css({background: 'red'})
		}
    })
}

function update(){
    const note = $('#note').val()
	const deadline = $('#deadline').val()
	const priority = $('#priority').val()
	const done = $('#done').val()

    if(!note || !deadline || !priority || !done) return alert('dien du thong tin');

    data[index] = {note , deadline , priority , done};
    window.localStorage.setItem('todo' , JSON.stringify(data))
    $('.closeModal').trigger('click');
	render()
}

function deleteAcount(){
    data.splice(index , 1)
    window.localStorage.setItem('todo' , JSON.stringify(data))
    $('.closeModal').trigger('click');
    render()
}

render()
function openCreateModal(){
    $('.update').css({display: 'none'})
    $('.delete').css({display: 'none'})
    $('.create').css({display: 'inline-block'})
}