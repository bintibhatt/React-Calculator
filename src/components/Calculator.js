import React, { Component } from "react";
import Button from "./Button";
import Display from "./Display";
import "./css/component_style.css";

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      question: "",
      answer: "",
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(event) {
    const value = event.target.value;

    this.setState((prevState) => {
      return {
        question: prevState.question + value,
      };
    });
    const display = document.getElementById("display");
    display.value += value;

    if (value === "=") {
      //---using eval---
      const solved_value = eval(this.state.question);
      display.value = solved_value;
      this.setState({
        question: solved_value,
      });
      //----------------
    }

    if (value === "C") {
      this.setState({
        question: "",
      });
      display.value = "";
    }

    if (value === "Del") {
      this.setState((prevState) => {
        return {
          question: prevState.question.slice(0, -4),
        };
      });
      display.value = display.value.slice(0, -4);
    }
  }

  render() {
    return (
      <div className="main_div">
        <div className="container">
          <h4>Calculator</h4>
          <div className="input_div">
            <Display value={this.props.value} />
          </div>
          <div className="buttons_div">
            <div>
              <Button value="(" clickFunc={this.handleClick} />
              <Button value=")" clickFunc={this.handleClick} />
              <Button value="Del" clickFunc={this.handleClick} />
              <Button value="C" clickFunc={this.handleClick} />
            </div>
            <div>
              <Button value="1" clickFunc={this.handleClick} />
              <Button value="2" clickFunc={this.handleClick} />
              <Button value="3" clickFunc={this.handleClick} />
              <Button value="+" clickFunc={this.handleClick} />
            </div>
            <div>
              <Button value="4" clickFunc={this.handleClick} />
              <Button value="5" clickFunc={this.handleClick} />
              <Button value="6" clickFunc={this.handleClick} />
              <Button value="-" clickFunc={this.handleClick} />
            </div>
            <div>
              <Button value="7" clickFunc={this.handleClick} />
              <Button value="8" clickFunc={this.handleClick} />
              <Button value="9" clickFunc={this.handleClick} />
              <Button value="*" clickFunc={this.handleClick} />
            </div>
            <div>
              <Button value="." clickFunc={this.handleClick} />
              <Button value="0" clickFunc={this.handleClick} />
              <Button value="=" clickFunc={this.handleClick} />
              <Button value="/" clickFunc={this.handleClick} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
