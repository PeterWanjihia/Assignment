// function validateForm() {
//   let fName = document.getElementById("fName").value;
//   let sName = document.getElementById("sName").value;
//   let regNo = document.getElementById("regNo");
//   const pattern = /^SCT(212|211)-(\d{4})\/20(0[5-9]|1[0-9]|20|25)$/;

//   let registrationNumber = regNo.value; // Get the value of the registration number input

//   let validationResultsDiv = document.getElementById("validationResults");

//   if (
//     registrationNumber.substring(0, 3) === "SCT" &&
//     (registrationNumber.substring(3, 6) === "211" ||
//       registrationNumber.substring(3, 6) === "212") &&
//     /^[0-9]{4}$/.test(registrationNumber.substring(7, 11)) &&
//     parseInt(registrationNumber.substring(7, 11), 10) >= 0 &&
//     parseInt(registrationNumber.substring(7, 11), 10) <= 1000
//   ) {
//     document.getElementById("validationMessage").textContent =
//       "This student is from the department of computing.";
//     document.getElementById("additionalMessage").textContent = "";
//   } else {
//     document.getElementById("validationMessage").textContent =
//       "This student belongs to a different department or has an invalid student number.";
//     document.getElementById("additionalMessage").textContent = "";
//   }

//   // Show the validation results div
//   validationResultsDiv.style.display = "block";
// }
function validateForm() {
  let fName = document.getElementById("fName").value;
  let sName = document.getElementById("sName").value;
  let regNo = document.getElementById("regNo");
  // const pattern = /^SCT(212|211)-(\d{4})\/20(0[5-9]|1[0-9]|20|25)$/;

  let registrationNumber = regNo.value; // Get the value of the registration number input

  let validationResultsDiv = document.getElementById("validationResults");

  if (
    registrationNumber.substring(0, 3) === "SCT" &&
    (registrationNumber.substring(3, 6) === "211" ||
      registrationNumber.substring(3, 6) === "212") &&
    /^[0-9]{4}$/.test(registrationNumber.substring(7, 11)) &&
    parseInt(registrationNumber.substring(7, 11), 10) >= 0 &&
    parseInt(registrationNumber.substring(7, 11), 10) <= 1000
  ) {
    document.getElementById("additionalMessage").innerHTML =
      "This student is from the department of computing.";
    // document.getElementById("additionalMessage").textContent = "";
  } else {
    document.getElementById("additionalMessage").textContent =
      `The registration number ${registrationNumber} is invalid!`;
    // document.getElementById("additionalMessage").textContent = "";
  }

  // Show the validation results div
  validationResultsDiv.style.display = "block";
}
