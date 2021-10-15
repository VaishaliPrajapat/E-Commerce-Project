import React, { useState } from "react";
import "../scss/login.scss"

const LogIn = () => {

    // State is in control of the data in this React component!
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");

    // We use refs to store a reference to a JSX element, so we can select it if we need to
    const nameError = React.createRef();
    const passwordError = React.createRef();

    // Function 1: to update a state variable, based on what the user changed
    // Once the state variable is changed, the checkErrorsUsingOnChange() function will also be called, for validation
    const updateUserData = event => {
        switch (event.target.name) {
            case "name":
                setName(event.target.value);
                checkErrorsUsingOnChange("name", event.target.value);
                break;
            case "password":
                setPassword(event.target.value);
                checkErrorsUsingOnChange("password", event.target.value)
                break;
            default:
                break;
        }
    }

    // Error Handling 1. Function to do error validation when a CHANGE event is detected...
    // This is called after we update the state variable using "updateUserData" 
    const checkErrorsUsingOnChange = (changedElement, newValue) => {
        switch (changedElement) {
            case "name":
                newValue.trim().length > 0 ? nameError.current.style.display = "none" : nameError.current.style.display = "block";
                break;
            case "password":
                newValue.trim().length > 0 ? passwordError.current.style.display = "none" : passwordError.current.style.display = "block";
                break;
            default:
                break;
        }
    }

    // Error Handling 2. Function to do error validation when a BLUR event is detected...
    // This is called directly using the "onBlur" event handler inside a relevant JSX element's opening tag
    const checkErrorsUsingOnBlur = event => {
        switch (event.target.name) {
            case "name":
                name.trim().length === 0 ? nameError.current.style.display = "block" : nameError.current.style.display = "none";
                break;
            case "password":
                password.trim().length === 0 ? passwordError.current.style.display = "block" : passwordError.current.style.display = "none"; 
                (/(?=.*[0-9])/.test(password)) ? passwordError.current.style.display = "none" : passwordError.current.style.display = "block";
                break;
            default:
                break;
        }
    }

    // Error Handling 3. Function to do error validation when a SUBMIT event is detected...
    // This is called when the form is submitted, using the "onSubmit" event handler in the <form> opening tag
    // This will check ALL the elements we have error handling for, as a last chance to find errors before trying to submit
    const handleValidation = () => {
        let validationSuccessful = true;

        if (name.length === 0) {
            nameError.current.style.display = "block";
            validationSuccessful = false;
        } 
        
        if (password.length === 0 || !(/(?=.*[0-9])/.test(password)) || password.length < 8) {
            passwordError.current.style.display = "block";
            validationSuccessful = false;
        }

        return validationSuccessful;
    }

    // Error Handling 3B. Helper function to reset all the error divs
    const resetErrorDivs = () => {
        nameError.current.style.display = "none";
        passwordError.current.style.display = "none";
    }

    // Log all the user's data to the console when they submit the form (by clicking the "submit" button)
    // ... and then reset the form
    const handleSubmit = async event => {
        // 1. Prevent the default form behaviour
        event.preventDefault();

        // 2. Reset all the error divs
        resetErrorDivs();

        // 3. Check to see if there are any validation problems
        let validationResult = handleValidation();

        if (validationResult === true) {
            let user = {
                name: name,
                password: password,
            }

            let jsonUser = JSON.stringify(user);

            let settings = {
                method: "POST",
                body: jsonUser,
                headers: {
                    "Content-Type": "application/JSON"
                }   
            }

            let response = await fetch("https://jsonplaceholder.typicode.com/users", settings);
            let message = await response.json();
            console.log(message);

            // Reset the state variables (and therefore element values!) to default values
            setName("");
            setPassword("");
        }
    }

    return (
        <div className="container">
            <div className="form_container">
                <div className="heading_container">
                    <h2>Log In</h2>
                </div>

                {/* Form begins here */}
                <form onSubmit={handleSubmit}>
                    <label htmlFor="name" className="label">Name</label>
                    <input id="name" name="name" value={name} onBlur={checkErrorsUsingOnBlur} onChange={updateUserData} />
                    <div className="error" ref={nameError}>Please enter your name</div>

                    <label htmlFor="password" className="label">Password</label>
                    <input name="password" id="password" value={password} onBlur={checkErrorsUsingOnBlur} onChange={updateUserData} />
                    <div className="error" ref={passwordError}>Please enter your password</div>

                    <button className="button" type="submit">Submit</button>
                </form>
            </div>
        </div>
    );
}

export default LogIn;