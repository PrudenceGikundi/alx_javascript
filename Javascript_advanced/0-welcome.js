function welcome(firstName, lastName) {

  // nested function
  function displayFullName() {
    return firstName + " " + lastName;
  }

  alert( "Hello, " + displayFullName() );
}
welcome('Holberton', 'School');