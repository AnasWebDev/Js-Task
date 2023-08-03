const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();
  const firstName = document.getElementById("firstName").value;
  const lastName = document.getElementById("lastName").value;
  const birthDate = document.getElementById("birthDate").value;
  const email = document.getElementById("email").value;
  const confirmEmail = document.getElementById("confirmEmail").value;
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const mobileNumber = document.getElementById("mobileNumber").value;

  // Validation functions
  const isLettersOnly = (text) => /^[A-Za-z]+$/.test(text);
  const isPasswordValid = (pass) =>
    /^(?=.*[A-Z])(?=.*\d{2,})(?=.*[@!$#%^&*()_+])[A-Za-z\d@!$#%^&*()_+]{8,32}$/.test(
      pass
    );

  // 1- Check if the name has just letters.
  if (!isLettersOnly(firstName) || !isLettersOnly(lastName)) {
    alert("First name and last name should contain only letters.");
    return;
  }

  // 2- Determine the birth date input and check for it in the right way
  const currentDate = new Date();
  const inputDate = new Date(birthDate);
  if (inputDate >= currentDate) {
    alert("Birth date should be before today.");
    return;
  }

  // 3- Check the email structure by regular expression and use error handling
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Invalid email format.");
    return;
  }

  // 4- Check if the two emails are the same or not.
  if (email !== confirmEmail) {
    alert("Emails do not match.");
    return;
  }

  // 5- Password validations
  if (!isPasswordValid(password)) {
    alert(
      "Invalid password format. Password must start with a capital letter, have at least two numbers, at least one special character, and be between 8 and 32 characters long."
    );
    return;
  }

  if (password !== confirmPassword) {
    alert("Passwords do not match.");
    return;
  }

  // 6- Mobile number should be 10 numbers
  if (mobileNumber.length !== 10) {
    alert("Mobile number should be 10 digits long.");
    return;
  }

  // If all validations pass, you can proceed with submitting the form or saving the data.
  alert("Registration successful!");

  // You can add code here to save the data to local storage or send it to the server.
});
