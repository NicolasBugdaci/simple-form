import React from "react";

const StepTwo = ({ name, email, password, setStep }) => {
  return (
    <div>
      <h1>Result</h1>
      <p>Name : {name}</p>
      <p>Email : {email}</p>
      <p>Password : {password}</p>
      <button
        onClick={() => {
          setStep(1);
        }}
      >
        Edit information
      </button>
    </div>
  );
};

export default StepTwo;
