/**
 * Bài 4 : Viết một function có chức năng giống với array method indexOf 
 */

var array =[1,2,'Nam','Hải',5,8, 'Huy' ,3,6,'Nấm',5,8,'Huy' ,'Nấm','Nam','Hải','6','9' , 2] ; 
function findIndex (input , number , start){

    if(start == null){
        start = 0
    }

    if(start >= input.length){
        return -1
    }
    var count = 0;
    for (let i = start; i < input.length; i++) {
        if(input[i] === number){
            count ++
            return i 
        }
    }  

    if(count == 0){
        return - 1
    }
}
console.log(findIndex(array , 'Huy'));