import React, { useRef } from "react";
import "./index.css";
import InputDate from "../../components/inputDate/Index";
import InputText from "../../components/inputText";
import Button from "../../components/button/Index";

const RegisterForm = ({ onPress }) => {
   const firstNameRef = useRef();
   const lastNameRef = useRef();
  const dateRegRef = useRef();

  const ButtonHandler = () => {
     const fname = firstNameRef.current.value;
     const lname = lastNameRef.current.value;
     const dateReg = dateRegRef.current.value;
    onPress(fname, lname, dateReg);
  };
  return (
    <>
      <div className="container">
        <InputText inputRef={firstNameRef} title="First Name"/>
        <InputText inputRef={lastNameRef} title="Last Name" />
        <InputDate inputRef={dateRegRef} title="Sign Date" />
        <Button title="send" cClass="btn btn-info" onPress={ButtonHandler} />
      </div>
    </>
  );
};

export default RegisterForm;
