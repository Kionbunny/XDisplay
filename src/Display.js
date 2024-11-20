import React, { useState } from "react";
export default Display = () => {
  /// a state to store the full name
  /// asign the state variable with an empty string initially
  // as if the user entered anything in the input field
  /// handle submit function to process the form data
  const [fullname, setFullName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent page refresh on form submission
    // Extract the values of the inputs
    const firstName = event.target.firstName.value.trim();
    const lastName = event.target.lastName.value.trim();
    // Concatenate first and last name and update the state
    setFullName(`${firstName} ${lastName}`);
  };
  /// return the JSX syntax to display the UI for
  // form submission label and all
  return (
    <div>
      <h1>Full Name Display</h1>
      {/*a form element to handle the form data it holds label tag input field for firstname and lastname */}
      <form onSubmit={handleSubmit}>
        {/* above function is passed as ref to the event handler onSubmit here*/}
        <label>
          First Name:
          <input type="text" name="firstName" required />
        </label>
        <br /> {/* this tag separates first name and lastname */}
        {/*both the input field are required here compulsory */}
        <label>
          Last Name:
          <input type="text" name="lastName" required />
        </label>
        <br />
        {/*a submit button to display the full name when user clicks 
        submit  after entering the required form fields  */}
        <button type="submit">Submit</button>
      </form>
      {/*conditionally render the UI based on the state */}
      {fullname ? <p>Full Name:{fullname}</p> : null}
      {/* <p>Full Name:{fullname} the fullname is dynamically rendered here based on the events*/}
    </div>
  );
};
// export default Display;
