import React from "react";

const Form = props => {
  const {
    name,
    setName,
    email,
    setEmail,
    password1,
    setPassword1,
    password2,
    setPassword2,
    setStep
  } = props;

  const handNameChange = event => {
    const value = event.target.value;
    setName(value);
  };

  const handEmailChange = event => {
    const value = event.target.value;
    setEmail(value);
  };

  const handpassword1Change = event => {
    const value = event.target.value;
    setPassword1(value);
  };

  const handpassword2Change = event => {
    const value = event.target.value;
    setPassword2(value);
  };

  return (
    <>
      <h1>Create account</h1>
      <form
        onSubmit={event => {
          event.preventDefault();

          if (password1 !== password2) {
          } else {
            setStep(2);
          }
        }}
        className="style-form"
      >
        <input
          type="text"
          placeholder="Jean Dupont"
          value={name}
          onChange={handNameChange}
        ></input>
        <input
          type="email"
          placeholder="jeandupont@free.fr"
          value={email}
          onChange={handEmailChange}
        ></input>
        <input
          type="password"
          placeholder="lereacteur2020"
          value={password1}
          onChange={handpassword1Change}
        ></input>
        <input
          type="password"
          placeholder="lereacteur2020"
          value={password2}
          onChange={handpassword2Change}
        ></input>

        <button type="submit">Valider</button>
      </form>
    </>
  );
};

export default Form;
