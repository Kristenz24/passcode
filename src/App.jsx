import './App.css';
import { useState } from 'react';

const PasscodeDisplay = ({display}) => {
  return (
    <div className="passcodeDisplay">{ display }</div>
  )
}

const PasscodeButton = ({buttonClassName, value, onClick}) => {
  return (
    <button className={buttonClassName} onClick={onClick}>{ value }</button>
  )
}

export default function App() {
  const [changePinState, setChangePinState] = useState(0);
  const [display, setDisplay] = useState("INPUT CODE");
  const [pin, setPin] = useState("1234567890");
  const [digit, setDigit] = useState(0);

  // Number keys
  const numClickHandler = (e) => {
    e.preventDefault();
    const value = e.target.innerHTML;

    const newValue = digit === 0 ? value : digit + value;
    setDigit(newValue);
    setDisplay(newValue);
  }

  // Enter key
  const enterClickHandler = () => {
    if (changePinState === 0) {
       setDisplay(digit === pin ? "OPEN" : "LOCKED");
    } 

    else if (changePinState === 1) {
      setDisplay(digit === pin ? "ENTER NEW CODE" : "INVALID CODE");
      setChangePinState(2);
    } 

    else if (changePinState === 2) {
      if (digit.length >= 8) { 
        setPin(digit);
        setDisplay("CHANGE CODE SUCCESSFUL");
        setDigit(0);
        setChangePinState(0);
      } 
      
      else {
        setDisplay("CODE SHOULD BE 8 DIGITS");
      }
    }
    setDigit(0);
  }

  // Name key
  const nameClickHandler = () => {
    setDigit(0);
    setDisplay("KRISTENZ MINGOY");
  }

  // Subject key
  const subjectClickHandler = () => {
    setDigit(0);
    setDisplay("C-PEITEL3");
  }

  // Clear key
  const clearClickHandler = () => {  
    setDigit(0);
    setDisplay("INPUT CODE");
  }

  // Pin key
  const pinClickHandler = () => {
    setDigit(0);
    setDisplay("ENTER CURRENT CODE");
    setChangePinState(1);
  }

  return (
    <div className='passcodeContainer'>
      <PasscodeDisplay display={display} />
      <div className='passcodeButtons'>
        <PasscodeButton buttonClassName="numKey" value="7" onClick={numClickHandler} />
        <PasscodeButton buttonClassName="numKey" value="8" onClick={numClickHandler} />
        <PasscodeButton buttonClassName="numKey" value="9" onClick={numClickHandler} />
        <PasscodeButton buttonClassName="numKey" value="4" onClick={numClickHandler} />
        <PasscodeButton buttonClassName="numKey" value="5" onClick={numClickHandler} />
        <PasscodeButton buttonClassName="numKey" value="6" onClick={numClickHandler} />
        <PasscodeButton buttonClassName="numKey" value="1" onClick={numClickHandler} />
        <PasscodeButton buttonClassName="numKey" value="2" onClick={numClickHandler} />
        <PasscodeButton buttonClassName="numKey" value="3" onClick={numClickHandler} />
        <PasscodeButton buttonClassName="midKey" value="RESET" onClick={clearClickHandler} />
        <PasscodeButton buttonClassName="numKey" value="0" onClick={numClickHandler} />
        <PasscodeButton buttonClassName="midKey"value="ENTER" onClick={enterClickHandler} />
        <PasscodeButton buttonClassName="bottomKey" value="NAME" onClick={nameClickHandler} />
        <PasscodeButton buttonClassName="bottomKey" value="SUBJ" onClick={subjectClickHandler} />
        <PasscodeButton buttonClassName="bottomKey" value="PIN" onClick={pinClickHandler} />
      </div>
    </div>
  )
}