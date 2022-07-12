// !queryselectors
const inputs = document.querySelectorAll('.form-wrapper input');
const password_input = document.querySelector(
  '.form-wrapper input[name = password]'
);

// !regexp
const patterns = {
  fullname: /^([A-Z][a-z]+) ([A-Z][a-z]+)$/,
  telephone: /^(\+994)([55|50|70|77])([0-9]{8})$/,
  username: /^[A-Z][a-z.\d]{5,12}$/,
  password: /^[\d\w@-]{8,20}$/,
  confirm_password: /[\d\w@-]{8,20}$/,
  email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})$/,
};

// !alert messages
const alerts = {
  fullname:
    'It has to contain both name and surname, also first letters has to be uppercase',
  username:
    'First letter must be uppercase, Username must be alphanumeric and contain 5-12 characters',
  email: 'Email must be a valid address, e.g. me@mydomain.com',
  password:
    'Password must alphanumeric (@, _ and - are also allowed) and be 8-20 characters',
  confirm_password: 'Password has to match previous one',
  telephone:
    'Telephone number must be a valid Azerbaijan number (+994 (operator code) 7 digits)',
};

// !eventlisteners
inputs.forEach((input) => {
  input.addEventListener('keyup', (e) => {
    const element = e.target;
    const attributeValue = e.target.getAttribute('name');
    const alertMessage = e.target.nextElementSibling;

    validateHandler(
      element,
      patterns[attributeValue],
      alertMessage,
      alerts[attributeValue],
      attributeValue
    );
  });
});

// !functions
function validateHandler(
  input,
  regex,
  alertHolder,
  alertMessage,
  attributevalue
) {
  if (!regex.test(input.value)) {
    input.className = 'invalid';
    alertHolder.textContent = alertMessage;
  } else if (
    attributevalue === 'confirm_password' &&
    input.value != password_input.value
  ) {
    input.className = 'invalid';
    alertHolder.textContent = alertMessage;
  } else {
    input.className = 'valid';
    alertHolder.textContent = null;
  }
}



// Regular Expressions