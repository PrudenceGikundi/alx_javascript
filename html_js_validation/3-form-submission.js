document.getElementById("submitForm").addEventListener('submit', function(event){
event.preventDefault();
handleFormSubmit();
});
function handleFormSubmit(){
  username= document.getElementById('name').value;
  useremail=document.getElementById('email').value;

  if(username.length==0 || useremail.length==0 ){
    alert("Please fill in all required fields");
  }
  else{
    alert("Form submitted successfully!");
  }
 
}