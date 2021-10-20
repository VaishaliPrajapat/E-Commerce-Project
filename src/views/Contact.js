import React, { useState } from "react";
import ProfilePic from "../static/Profile_Pic.jpg";
import "../scss/contact.scss";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const nameError = React.createRef();
  const emailLengthError = React.createRef();
  const emailFormatError = React.createRef();
  const phoneError = React.createRef();
  const messageError = React.createRef();

  // Function 1: to update a state variable, based on what the user changed
  // (e.g. changing the "age" input will update ONLY the "age" state variable)
  // Once the state variable is changed, the checkErrorsUsingOnChange() function will also be called, for validation
  const updateUserData = (event) => {
    switch (event.target.name) {
      case "name":
        setName(event.target.value);
        checkErrorsUsingOnChange("name", event.target.value);
        break;
      case "email":
        setEmail(event.target.value);
        checkErrorsUsingOnChange("email", event.target.value);
        break;
      case "phone":
        setPhone(event.target.value);
        checkErrorsUsingOnChange("phone", event.target.value);
        break;
      case "comments":
        setMessage(event.target.value);
        checkErrorsUsingOnChange("message", event.target.value);
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
      case "email":
        newValue.trim().length > 0
          ? (emailLengthError.current.style.display = "none")
          : (emailLengthError.current.style.display = "block");
        break;
      case "phone":
        newValue.trim().length > 0
          ? (phoneError.current.style.display = "none")
          : (phoneError.current.style.display = "block");
        break;
      case "comments":
        newValue.trim().length > 0
          ? (messageError.current.style.display = "none")
          : (messageError.current.style.display = "block");
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
      case "email":
        email.trim().length === 0
          ? (emailLengthError.current.style.display = "block")
          : (emailLengthError.current.style.display = "none");
        /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[A-Za-z]+$/.test(email) ||
        email.trim().length === 0
          ? (emailFormatError.current.style.display = "none")
          : (emailFormatError.current.style.display = "block");
        break;
      case "phone":
        phone.trim().length === 0
          ? (phoneError.current.style.display = "block")
          : (phoneError.current.style.display = "none");
        break;
      case "comments":
        message.trim().length === 0
          ? (messageError.current.style.display = "block")
          : (messageError.current.style.display = "none");
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
    if (email.length === 0) {
      emailFormatError.current.style.display = "none";
      emailLengthError.current.style.display = "block";
      validationSuccessful = false;
    }
    if (phone.length === 0) {
      phoneError.current.style.display = "block";
      validationSuccessful = false;
    }
    if (message.length === 0) {
      messageError.current.style.display = "block";
      validationSuccessful = false;
    }

    return validationSuccessful;
  };

  // Error Handling 3B. Helper function to reset all the error divs
  const resetErrorDivs = () => {
    nameError.current.style.display = "none";
    emailLengthError.current.style.display = "none";
    emailFormatError.current.style.display = "none";
    phoneError.current.style.display = "none";
    messageError.current.style.display = "none";
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
      let user = {
        name: name,
        email: email,
        phone: phone,
        comments: message,
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
      setEmail("");
      setPhone("");
      setMessage("");
    }
  };
  return (
    <>
      <div className="contact_container">
        <div className="contact_img">
          <img src={ProfilePic} alt="Profile Pic" />
        </div>

        <div className="contact_form_container">
          <div className="contact_heading_container">
            <h1>Quick Contact</h1>
          </div>

          {/* Form begins here */}
          <form onSubmit={handleSubmit}>
            <input
              id="name"
              name="name"
              value={name}
              placeholder="name"
              className="contact_input"
              onBlur={checkErrorsUsingOnBlur}
              onChange={updateUserData}
            />
            <div className="contact_error" ref={nameError}>
              Please enter your name
            </div>

            <input
              id="email"
              name="email"
              value={email}
              placeholder="email address"
              className="contact_input"
              onChange={updateUserData}
              onBlur={checkErrorsUsingOnBlur}
            />
            <div className="contact_error" ref={emailLengthError}>
              Please enter your email address
            </div>
            <div className="contact_error" ref={emailFormatError}>
              Please use a correct email address
            </div>

            <input
              type="number"
              name="phone"
              id="phone"
              value={phone}
              placeholder="phone"
              className="contact_input"
              onBlur={checkErrorsUsingOnBlur}
              onChange={updateUserData}
            />
            <div className="contact_error" ref={phoneError}>
              Please enter your phone number
            </div>

            <textarea
              id="message"
              name="comments"
              value={message}
              placeholder="message"
              className="contact_input"
              onChange={updateUserData}
              onBlur={checkErrorsUsingOnBlur}
            ></textarea>
            <div className="contact_error" ref={messageError}>
              Please enter your comments
            </div>

            <button className="contact_button" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>

      <div className="col-lg-12">
        <div className="card mt-4 border-0 mb-4">
          <div className="row">
            <div className="col-lg-4 col-md-4">
              <div className="card-body d-flex align-items-center c-detail pl-0">
                <div className="mr-3 align-self-center">
                  <img
                    src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon1.png"
                    alt="address"
                  />
                </div>
                <div className="contact_description">
                  <h6 className="font-weight-medium">Address</h6>
                  <p className="">
                    Görlitzer Str.4,
                    <br /> 41460, Neuss
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="card-body d-flex align-items-center c-detail">
                <div className="mr-3 align-self-center">
                  <img
                    src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon2.png"
                    alt="Phone"
                  />
                </div>
                <div className="contact_description">
                  <h6 className="font-weight-medium">Phone</h6>
                  <p className="">
                    +49 176 57807291
                    <br /> +49 176 57807291
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4">
              <div className="card-body d-flex align-items-center c-detail">
                <div className="mr-3 align-self-center">
                  <img
                    src="https://www.wrappixel.com/demos/ui-kit/wrapkit/assets/images/contact/icon3.png"
                    alt="E-mail"
                  />
                </div>
                <div className="contact_description">
                  <h6 className="font-weight-medium">Email</h6>
                  <p className="">
                    vaishali.gh31@gamil.com
                    <br /> vaishali.prajapati.2427@gamil.com
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
