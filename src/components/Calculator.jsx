// Calculator.js
import { useState } from "react";
import Display from "./Display";
import ButtonsContainer from "./ButtonsContainer";

import AppName from "./AppName";

const Calculator = () => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleButtonClick = (buttonValue) => {
    if (buttonValue === "=") {
      // When '=' is clicked, calculate the result
      try {
        const evalResult = eval(input);
        const resultString = String(evalResult);
        setResult(resultString);
        setInput(""); // Clear input after calculation
      } catch (error) {
        setResult("Error");
      }
    } else if (buttonValue === "AC") {
      // When 'AC' is clicked, clear the input and result
      setInput("");
      setResult("");
    } else {
      // For other buttons, append their value to the input string
      setInput(input + buttonValue);
      setResult(""); // Clear result when entering new input
    }
  };

  return (
    <div className="max-w-md mx-auto my-8 p-8 bg-white rounded-md shadow-md">
      <AppName />
      <Display input={input} result={result} />
      <ButtonsContainer onButtonClick={handleButtonClick} />
    </div>
  );
};
export default Calculator;
