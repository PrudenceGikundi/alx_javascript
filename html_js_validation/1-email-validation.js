function validateEmail(){
  const emailAddress=document.getElementById('email').value;
  const Error=document.getElementById('error');
  const regex = /^[\w-]+(\.[\w-]+)*@([\w-]+\.)+[a-zA-Z]{2,7}$/;
  
  if (!emailAddress.match(regex)) 
   {
    Error.textContent='Please enter a valid email address.';
    return false;
  }
  Error.textContent='';
  return true;
}
/**
 * When the form is submitted, the validatePassword() function is called. 
 * If the password does not meet the criteria, the form submission is prevented 
 * using the preventDefault() method.
 */
document.getElementById('emailForm').addEventListener('submit', function(event) {
  if (!validateEmail()) {
    event.preventDefault();//prevents form submission

  }
});