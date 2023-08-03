// Function to add a new row to the table
function addRowToTable(data) {
  const table = document.getElementById("tableCon");
  const newRow = table.insertRow();

  const cellName = newRow.insertCell(0);
  const cellType = newRow.insertCell(1);
  const cellPrice = newRow.insertCell(2);
  const cellCondition = newRow.insertCell(3);

  cellName.innerHTML = data.name;
  cellType.innerHTML = data.type;
  cellPrice.innerHTML = data.price;
  cellCondition.innerHTML = data.price > 100 ? "New Device" : "Used";
}

// Function to handle form submission
function handleFormSubmit(event) {
  event.preventDefault();

  const form = event.target;
  const name = form.useName.value;
  const type = form.typeNameD.value;
  const price = Math.floor(Math.random() * 451) + 50; // Generate a random price between 50 and 500

  // Create an object to store the data
  const data = {
    name,
    type,
    price,
  };

  // Store the data in local storage
  const storedData = localStorage.getItem("mobileData");
  const mobileData = storedData ? JSON.parse(storedData) : [];
  mobileData.push(data);
  localStorage.setItem("mobileData", JSON.stringify(mobileData));

  // Add the data to the table
  addRowToTable(data);

  // Reset the form fields
  form.reset();
}

// Function to render the data from local storage into the table
function renderDataFromLocalStorage() {
  const storedData = localStorage.getItem("mobileData");
  if (storedData) {
    const mobileData = JSON.parse(storedData);
    mobileData.forEach((data) => addRowToTable(data));
  }
}

// Event listener for form submission
const form = document.getElementById("mobForm");
form.addEventListener("submit", handleFormSubmit);

// Render the data from local storage when the page loads
renderDataFromLocalStorage();
