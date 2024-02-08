function createClassRoom(numbersOfStudents){
  let students=[];
  function studentSeat(seat){
    return function(){
      return seat;
    }
  }
  
  for(i=0; i<=numbersOfStudents;i++){
    students[i] = studentSeat(i + 1);
  }
return students;
}
let classRoom=createClassRoom(10);
console.log(classRoom[0]());
