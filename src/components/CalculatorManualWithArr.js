import React, { useState } from "react";
import Button from "./Button";
import Display from "./Display";
import "./css/component_style.css";

//latest 1-11-23---12:54
function CalcManualArr() {
  const [input, setInput] = useState("");

  const onInputChanged = (e) => {
    const { value } = e.target;
    setInput(value);
  };

  const onEqualClicked = () => {
    let lastValues = "";
    let isOperatorFound = false;
    let arr = [];

    for (let index = 0; index < input.length; index++) {
      let value = input[index];

      if (["+", "-", "*", "/", undefined].includes(value)) {
        isOperatorFound = true;
      } else {
        lastValues += value;
      }

      if (isOperatorFound) {
        arr.push(parseFloat(lastValues));
        arr.push(value);

        isOperatorFound = false;
        lastValues = "";
      }

      if (!isOperatorFound && lastValues !== "" && input.length - 1 === index) {
        arr.push(parseFloat(lastValues));
      }
    }

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] === "*") {
        arr[i - 1] = arr[i - 1] * arr[i + 1];
        arr.splice(i, 2);
        i -= 1;
      } else if (arr[i] === "/") {
        arr[i - 1] = arr[i - 1] / arr[i + 1];
        arr.splice(i, 2);
        i -= 1;
      } else if (arr[i] === "+") {
        arr[i - 1] = arr[i - 1] + arr[i + 1];
        arr.splice(i, 2);
        i -= 1;
      } else if (arr[i] === "-") {
        arr[i - 1] = arr[i - 1] - arr[i + 1];
        arr.splice(i, 2);
        i -= 1;
      }
    }
    console.log(arr);
    setInput(arr[0]);
  };

  function performOperation(e) {
    let btnValue = e.target.value;
    let newValue = input + btnValue;
    setInput(newValue);
    console.log(newValue);
  }

  return (
    <div className="calc_main">
      <div className="calc_body">
        <Display onInputChanged={onInputChanged} input={input} />

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
            <Button value="=" getVal={onEqualClicked} />
            <Button value="/" getVal={performOperation} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CalcManualArr;
