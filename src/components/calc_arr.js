import React from "react";
import Button from "./Button";
import Display from "./Display";
import "./css/component_style.css";

function CalcManualArr() {
  function performOperation(e) {
    let btnValue = e.target.value;
    let display = document.getElementById("display");
    display.value += btnValue;
    let displayVal = display.value;
    let arr = [];
    let arithmetic = displayVal.substring(0, displayVal.length - 1);

    //split the string by numbers and operators and push them into a single array
    let value = "";
    for (let i = 0; i < arithmetic.length; i++) {
      if (
        arithmetic[i] === "+" ||
        arithmetic[i] === "-" ||
        arithmetic[i] === "*" ||
        arithmetic[i] === "/"
      ) {
        arr.push(parseFloat(value));
        arr.push(arithmetic[i]);
        value = "";
      } else {
        value += arithmetic[i];
      }
    }
    arr.push(parseFloat(value));
    console.log("Array", arr);

    display.value = arr[arr.length - 1];
    if (btnValue === "=") {
    }
    // if (
    //   btnValue === "=" ||
    //   btnValue === "+" ||
    //   btnValue === "-" ||
    //   btnValue === "*" ||
    //   btnValue === "/"
    // ) {
    //   if (btnValue === "+") {
    //     display.value = parseFloat(arr[0]) + parseFloat(arr[2]);
    //   }
    //   if (btnValue === "-") {
    //     display.value = parseFloat(arr[0]) - parseFloat(arr[2]);
    //   }
    //   if (btnValue === "*") {
    //     display.value = parseFloat(arr[0]) * parseFloat(arr[2]);
    //   }
    //   if (btnValue === "/") {
    //     display.value = parseFloat(arr[0]) / parseFloat(arr[2]);
    //   }
    // }

    if (btnValue === "C") {
      display.value = "";
    }

    if (btnValue === "Del") {
      display.value = display.value.substring(0, display.value.length - 1);
    }
  }
  return (
    <div className="calc_main">
      <div className="calc_body">
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

export default CalcManualArr;
