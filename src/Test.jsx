import { useState } from 'react';
import './App.css';

function PasscodeDisplay({ display }) {
  return (
    <div className="passcodeDisplay">
      {display}
    </div>
  );
}

function PasscodeButton({ value, onClick }) {
  return (
    <button className="passcodeButton" onClick={onClick}>
      {value}
    </button>
  );
}

function App() {
  const [pin, setPin] = useState("1234567890");
  const [num, setNum] = useState(0);
  const [disp, setDisp] = useState("INPUT CODE");
  const [changePinState, setChangePinState] = useState(0);

  const numberClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    if (num === 0) {
      setNum(value);
      setDisp(value);
    } else {
      setNum(num + value);
      setDisp(num + value);
    }
  };

  const enterClickHandler = () => {    
    if (changePinState === 0) {
      if(num === pin) {
        setDisp("OPEN");
      } else {
        setDisp("LOCKED");
      }
    } else if (changePinState === 1) {
      if(num === pin) {
        setDisp("ENTER NEW CODE");
        setChangePinState(2);
      } else {
        setDisp("INVALID CODE");
      }
    } else if (changePinState === 2) {
      if(num.length >= 8) {
        setPin(num);
        setDisp("CHANGE CODE SUCCESSFUL");
        setNum(0);
        setChangePinState(0);
      } else {
        setDisp("CODE SHOULD BE 8 DIGITS");
        setNum(0);
      }
    }
    setNum(0);
        
  };

  const clearClickHandler = () => {
    setNum(0);
    setDisp("INPUT CODE");
    
  };

  const nameClickHandler = () => {
    setNum(0);
    setDisp("Name ");
  };

  const subjClickHandler = () => {
    setNum(0);
    setDisp("C-PEITEL3");
  };

  const pinClickHandler = () => {
    setNum(0);
    setDisp("ENTER CURRENT CODE");
    setChangePinState(1);
  };

  return ( 
    <div className="passcodeContainer">
      <PasscodeDisplay display={disp} />
      <div className="passcodeButtonsContainer">
        <PasscodeButton value="7" onClick={numberClickHandler} />
        <PasscodeButton value="8" onClick={numberClickHandler} />
        <PasscodeButton value="9" onClick={numberClickHandler} />
        <PasscodeButton value="4" onClick={numberClickHandler} />
        <PasscodeButton value="5" onClick={numberClickHandler} />
        <PasscodeButton value="6" onClick={numberClickHandler} />
        <PasscodeButton value="1" onClick={numberClickHandler} />
        <PasscodeButton value="2" onClick={numberClickHandler} />
        <PasscodeButton value="3" onClick={numberClickHandler} />
        <PasscodeButton value="RESET" onClick={clearClickHandler} />
        <PasscodeButton value="0" onClick={numberClickHandler} />
        <PasscodeButton value="ENTER" onClick={enterClickHandler} />
        <PasscodeButton value="NAME" onClick={nameClickHandler} />
        <PasscodeButton value="SUBJ" onClick={subjClickHandler} />
        <PasscodeButton value="PIN" onClick={pinClickHandler} />
      </div>  
    </div>  
  );
}

export default App;
