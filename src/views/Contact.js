import React, { useState } from "react";
import ProfilePic from "../static/Profile_Pic.jpg";
import "../scss/contact.scss";

const Contact = () => {
  // State is in control of the data in this React component!
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [gender, setGender] = useState("--- Please select ---");
  const [email, setEmail] = useState("");
  const [comments, setComments] = useState("");

  // A "ref" is short for a "reference"
  // We use refs to store a reference to a JSX element, so we can select it if we need to
  // We should use refs sparingly - only where they are needed. However, there is no limit to how many we can use
  const nameError = React.createRef();
  const ageError = React.createRef();
  const genderError = React.createRef();
  const emailLengthError = React.createRef();
  const emailFormatError = React.createRef();
  const commentsError = React.createRef();

  // Function 1: to update a state variable, based on what the user changed
  // (e.g. changing the "age" input will update ONLY the "age" state variable)
  // Once the state variable is changed, the checkErrorsUsingOnChange() function will also be called, for validation
  const updateUserData = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        checkErrorsUsingOnChange("name", event.target.value);
        break;
      case "age":
        setAge(event.target.value);
        checkErrorsUsingOnChange("age", event.target.value);
        break;
      case "gender":
        setGender(event.target.value);
        checkErrorsUsingOnChange("gender", event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        checkErrorsUsingOnChange("email", event.target.value);
        break;
      case "comments":
        setComments(event.target.value);
        checkErrorsUsingOnChange("comments", event.target.value);
        break;
      default:
        break;
    }
  };

  // Error Handling 1. Function to do error validation when a CHANGE event is detected...
  // This is called after we update the state variable using "updateUserData"
  const checkErrorsUsingOnChange = (changedElement, newValue) => {
    switch (changedElement) {
      case "name":
        newValue.trim().length > 0
          ? (nameError.current.style.display = "none")
          : (nameError.current.style.display = "block");
        break;
      case "age":
        newValue.trim().length > 0
          ? (ageError.current.style.display = "none")
          : (ageError.current.style.display = "block");
        break;
      case "gender":
        newValue !== "--- Please select ---"
          ? (genderError.current.style.display = "none")
          : (genderError.current.senderError.current.style.display = "block");
        break;
      case "email":
        newValue.trim().length > 0
          ? (emailLengthError.current.style.display = "none")
          : (emailLengthError.current.style.display = "block");
        break;
      case "comments":
        newValue.trim().length > 0
          ? (commentsError.current.style.display = "none")
          : (commentsError.current.style.display = "block");
        break;
      default:
        break;
    }
  };

  // Error Handling 2. Function to do error validation when a BLUR event is detected...
  // This is called directly using the "onBlur" event handler inside a relevant JSX element's opening tag
  const checkErrorsUsingOnBlur = (event) => {
    switch (event.target.name) {
      case "name":
        name.trim().length === 0
          ? (nameError.current.style.display = "block")
          : (nameError.current.style.display = "none");
        break;
      case "age":
        age.trim().length === 0
          ? (ageError.current.style.display = "block")
          : (ageError.current.style.display = "none");
        break;
      case "gender":
        gender === "--- Please select ---"
          ? (genderError.current.style.display = "block")
          : (genderError.current.style.display = "none");
        break;
      case "email":
        email.trim().length === 0
          ? (emailLengthError.current.style.display = "block")
          : (emailLengthError.current.style.display = "none");
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) ||
        email.trim().length === 0
          ? (emailFormatError.current.style.display = "none")
          : (emailFormatError.current.style.display = "block");
        break;
      case "comments":
        comments.trim().length === 0
          ? (commentsError.current.style.display = "block")
          : (commentsError.current.style.display = "none");
        break;
      default:
        break;
    }
  };

  // Error Handling 3. Function to do error validation when a SUBMIT event is detected...
  // This is called when the form is submitted, using the "onSubmit" event handler in the <form> opening tag
  // This will check ALL the elements we have error handling for, as a last chance to find errors before trying to submit
  // For example, this will be useful if the user doesn't change or blur any elements - just loads the page and clicks the "submit" button.
  const handleValidation = () => {
    let validationSuccessful = true;

    if (name.length === 0) {
      nameError.current.style.display = "block";
      validationSuccessful = false;
    }

    if (age.length === 0) {
      ageError.current.style.display = "block";
      validationSuccessful = false;
    }
    if (gender.length === 0) {
      genderError.current.style.display = "block";
      validationSuccessful = false;
    }
    if (email.length === 0) {
      emailFormatError.current.style.display = "none";
      emailLengthError.current.style.display = "block";
      validationSuccessful = false;
    }
    if (comments.length === 0) {
      commentsError.current.style.display = "block";
      validationSuccessful = false;
    }

    return validationSuccessful;
  };

  // Error Handling 3B. Helper function to reset all the error divs
  const resetErrorDivs = () => {
    nameError.current.style.display = "none";
    ageError.current.style.display = "none";
    genderError.current.style.display = "none";
    emailLengthError.current.style.display = "none";
    emailFormatError.current.style.display = "none";
    commentsError.current.style.display = "none";
  };

  // Log all the user's data to the console when they submit the form (by clicking the "submit" button)
  // ... and then reset the form
  const handleSubmit = async (event) => {
    // 1. Prevent the default form behaviour
    event.preventDefault();

    // 2. Reset all the error divs
    resetErrorDivs();

    // 3. Check to see if there are any validation problems
    let validationResult = handleValidation();

    if (validationResult === true) {
      // console.log("The user's data:")
      // console.log("Name", name);
      // console.log("Age", age);
      // console.log("Gender", gender);
      // console.log("Email", email);
      // console.log("Comments", comments);

      let user = {
        name: name,
        age: age,
        gender: gender,
        email: email,
        comments: comments,
      };

      let jsonUSer = JSON.stringify(user);

      let settings = {
        method: "POST",
        body: jsonUSer,
        headers: {
          "Content-Type": "application/JSON",
        },
      };
      let response = await fetch(
        "https://jsonplaceholder.typicode.com/users",
        settings
      );
      let message = await response.json();
      console.log(message);
      // Reset the state variables (and therefore element values!) to default values
      setName("");
      setAge("");
      setGender("Female");
      setEmail("");
      setComments("");
    }
  };
  return (
    <div className="contact_container">
      <div className="contact_img">
        <img src={ProfilePic} alt="Profile picture" />
      </div>
      <div className="from_main_container">
        <div className="form_container">
          <div className="heading_container">
            <h2>My React Form</h2>
          </div>

          {/* Form begins here */}
          <form onSubmit={handleSubmit}>
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              value={name}
              onBlur={checkErrorsUsingOnBlur}
              onChange={updateUserData}
            />
            <div className="error" ref={nameError}>
              Please enter your name
            </div>

            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              value={age}
              onBlur={checkErrorsUsingOnBlur}
              onChange={updateUserData}
            />
            <div className="error" ref={ageError}>
              Please enter your age
            </div>

            <label htmlFor="gender">Gender</label>
            <select
              id="gender"
              name="gender"
              value={gender}
              onBlur={checkErrorsUsingOnBlur}
              onChange={updateUserData}
            >
              <option>--- Please select ---</option>
              <option>Female</option>
              <option>Male</option>
              <option>Other</option>
            </select>
            <div className="error" ref={genderError}>
              Please select your gender
            </div>

            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={updateUserData}
              onBlur={checkErrorsUsingOnBlur}
            />
            <div className="error" ref={emailLengthError}>
              Please enter your email address
            </div>
            <div className="error" ref={emailFormatError}>
              Please use a correct email address
            </div>

            <label htmlFor="comments">Comments</label>
            <textarea
              id="comments"
              name="comments"
              value={comments}
              onChange={updateUserData}
              onBlur={checkErrorsUsingOnBlur}
            ></textarea>
            <div className="error" ref={commentsError}>
              Please enter your comments
            </div>

            <button className="button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
