import "./App.css";
import PolicyAgreement from "./pages/policyAgreement/Index";
import { useState } from "react";
import RegisterForm from "./pages/registerForm/Index";
import OtherForm from "./pages/otherForm/Index";
import InputText from "./components/inputText";

function App() {
  const RegisterHandler = (firsName,lastName,dateReg) => {
    setStatus(2);
     setFirstName(firsName);
     setLastName(lastName);
     setDateReg(dateReg);
  };
  const agreementSignHandler=()=>{
    setStatus(3);
  }
  const [status, setStatus] = useState(1);
  const [firsName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [dateReg, setDateReg] = useState('');

  return (
    <div>
      {status === 1 ? (
        <RegisterForm onPress={(fname,lname,date)=>RegisterHandler(fname,lname,date)} />
      ) : status === 2 ? (
        <PolicyAgreement fullName={firsName+" "+lastName} dateReg={dateReg} onPressHandler={()=>agreementSignHandler()}/>
      ) : (
        <OtherForm />
      )}
    </div>
  );
}

export default App;
