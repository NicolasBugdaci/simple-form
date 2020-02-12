import React, { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import StepTwo from "./components/StepTwo";

const App = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password1, setPassword1] = useState("");
  const [password2, setPassword2] = useState("");
  const [step, setStep] = useState(1);

  return (
    <div>
      {step === 1 ? (
        <Form
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          passsword1={password1}
          passsword2={password2}
          setPassword1={setPassword1}
          setPassword2={setPassword2}
          setStep={setStep}
        />
      ) : (
        <StepTwo
          name={name}
          email={email}
          password={password1}
          setStep={setStep}
        />
      )}
    </div>
  );
};

export default App;
