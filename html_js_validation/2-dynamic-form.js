document.getElementById('dynamicForm').addEventListener('submit', function(event) {
  event.preventDefault();
  validateForm();
});

document.getElementById('numFields').addEventListener('change', function() {
  generateInputFields(this.value);
});

function generateInputFields(numFields) {
  const inputContainer = document.getElementById('inputContainer');
  inputContainer.innerHTML = '';

  for (let i = 1; i <= numFields; i++) {
    const inputField = document.createElement('input');
    inputField.type = 'text';
    inputField.name = 'field' + i;
    inputField.placeholder = 'Field ' + i;
    inputContainer.appendChild(inputField);
  }
}

function validateForm() {
  const inputFields = document.querySelectorAll('#inputContainer input');
  let allFieldsFilled = true;

  for (let i = 0; i < inputFields.length; i++) {
    if (inputFields[i].value === '') {
      allFieldsFilled = false;
      break;
    }
  }

  if (!allFieldsFilled) {
    alert('Please fill in all fields');
  } else {
    // Submit the form or perform other actions as needed
    alert('Form submitted successfully');
  }
}