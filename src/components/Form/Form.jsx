import React from "react";

function Form() {
  return (
    <form action="">
      <label htmlFor="signIn">Callsign</label>
      <input type="text" name="signIn"/>

      <label htmlFor="email">Email</label>
      <input type="email" name="email" id="" />

      <label htmlFor="password">Password</label>
      <input type="password" name="password" id="" />

      <label htmlFor="confirmPass">Confirm Password</label>
      <input type="password" name="confirmPass" id="" />

      <div className="container">
        <input type="checkbox" name="" id="" />
        <label htmlFor="">I accept the Terms and Privacy Policy</label>
      </div>

      <button>Initialize Account</button>

      <p>Already an operator? Log in</p>
    </form>
  );
}

export default Form;
