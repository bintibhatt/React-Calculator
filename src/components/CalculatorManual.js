import React from "react";
import Button from "./Button";
import Display from "./Display";
import "./css/component_style.css";

function CalcManual() {
  function performOperation(e) {
    let btnValue = e.target.value;
    let display = document.getElementById("display");
    display.value += btnValue;
    let displayVal = display.value;
    // let arr = [];
    if (btnValue === "=") {
      for (let i = 0; i < displayVal.length; i++) {
        if (displayVal[i] === "+") {
          let num1 = displayVal.slice(0, i);
          let num2 = displayVal.slice(i + 1, displayVal.length);
          console.log(num1, num2);
          let sum = parseFloat(num1) + parseFloat(num2);
          display.value = sum;
        }
        if (displayVal[i] === "-") {
          let num1 = displayVal.slice(0, i);
          let num2 = displayVal.slice(i + 1, displayVal.length);
          console.log(num1, num2);
          let sum = parseFloat(num1) - parseFloat(num2);
          display.value = sum;
        }
        if (displayVal[i] === "*") {
          let num1 = displayVal.slice(0, i);
          let num2 = displayVal.slice(i + 1, displayVal.length);
          console.log(num1, num2);
          let sum = parseFloat(num1) * parseFloat(num2);
          display.value = sum;
        }
        if (displayVal[i] === "/") {
          let num1 = displayVal.slice(0, i);
          let num2 = displayVal.slice(i + 1, displayVal.length);
          console.log(num1, num2);
          let sum = parseFloat(num1) / parseFloat(num2);
          display.value = sum;
        }
      }
    }
    console.log(displayVal);
  }

  return (
    <div className="calc_main">
      <div className="calc_body">
        <h4>Calculator</h4>
        <Display />

        <div className="calc_buttons">
          <div className="calc_row">
            <Button value="Del" getVal={performOperation} />
            <Button value="C" getVal={performOperation} />
          </div>
          <div className="calc_row">
            <Button value="1" getVal={performOperation} />
            <Button value="2" getVal={performOperation} />
            <Button value="3" getVal={performOperation} />
            <Button value="+" getVal={performOperation} />
          </div>
          <div className="calc_row">
            <Button value="4" getVal={performOperation} />
            <Button value="5" getVal={performOperation} />
            <Button value="6" getVal={performOperation} />
            <Button value="-" getVal={performOperation} />
          </div>
          <div className="calc_row">
            <Button value="7" getVal={performOperation} />
            <Button value="8" getVal={performOperation} />
            <Button value="9" getVal={performOperation} />
            <Button value="*" getVal={performOperation} />
          </div>
          <div className="calc_row">
            <Button value="." getVal={performOperation} />
            <Button value="0" getVal={performOperation} />
            <Button value="=" getVal={performOperation} />
            <Button value="/" getVal={performOperation} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalcManual;
