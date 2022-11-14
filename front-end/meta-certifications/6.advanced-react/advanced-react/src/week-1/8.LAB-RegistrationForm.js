import "./App.css";
import { useState } from "react";
import { validateEmail } from "./8.LAB-RegistrationForm-utils";

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function App() {
  // local state
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  // validates form
  const getIsFormValid = () => {
    // Implement this function
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };

  const clearForm = () => {
    // Implement this function
    setFirstName('');
    setLastName('');
    setEmail('');
    // isTouched property is set so that onBlur event sets this property to true
    // if onBlur even is triggered, it means the user has interacted with the elment at least once
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole('role');
  };

  // submit arrow function handler
  // prevents default behavior of HTML submit button
  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input 
              placeholder="First name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)} 
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input 
              placeholder="Last name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input 
              placeholder="Email address"
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input 
              placeholder="Password"
              type="password"
              value={password.value}
              onChange={(e) => {
                setPassword({...password, value: e.target.value});
              }}
              onBlur={() => {
                setPassword({...password, isTouched: true});
              }}
            />
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select
              value={role}
              onChange={(e) => setRole(e.target.value)}
            >
              <option value="role">role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default App;
