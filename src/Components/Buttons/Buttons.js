import React, { Component } from "react";
import "./Buttons.css";
class Buttons extends Component {
  firstNumber = "";
  secondNumber = "";
  operationSign = "";
  showValue = "";
  prevOperand = "";
  isEqualSign = false;

  render() {
    const keyHandler = (event) => {
      const regexp = /\d?\+?-?\*?\/?,?/;
      let result = event.key.match(regexp) || [];
      switch (event.key) {
        case "Enter":
          handleClick("=");
          break;
        case "Escape":
          handleClick("C");
          break;
        case result[0]:
          if (result[0] === ",") {
            handleClick(".");
            break;
          }
          if (
            result[0] === "+" ||
            result[0] === "-" ||
            result[0] === "*" ||
            result[0] === "/"
          ) {
            handleClick(result[0]);
          } else {
            handleClick(+result[0]);
          }
          break;
        default:
          break;
      }
    };

    const operation = (firstNum, secondNum, operationSign) => {
      let result = 0;
      switch (operationSign) {
        case "+":
          result = Number(firstNum) + Number(secondNum);
          break;

        case "-":
          result = Number(firstNum) - Number(secondNum);
          break;

        case "*":
          result = Number(firstNum) * Number(secondNum);
          break;

        case "/":
          if (Number(secondNum) !== 0) {
            result = Number(firstNum) / Number(secondNum);
          } else {
            result = "";
          }
          break;

        case "^":
          result = Math.pow(Number(firstNum), Number(secondNum));
          break;

        case "sqrt":
          if (firstNum >= 0) {
            result = Math.sqrt(Number(firstNum));
          } else {
            alert("Should be positiv number");
            result = "";
          }
          break;

        default:
          break;
      }
      return Math.round(result * 10000000) / 10000000;
    };

    let trickyInput = (
      <input
        type="text"
        placeholder="input the numbers"
        readOnly
        autoFocus
        onKeyDown={keyHandler}
      ></input>
    );
    let memoryDisplay = <div className="memory-res"> </div>;
    const handleClick = (number) => {
      const memoryDisplayElement = document.getElementsByClassName(
        "memory-res"
      )[0];
      if (typeof number === "number") {
        if (this.isEqualSign === true && !this.secondNumber) {
          this.firstNumber = String(number);
          this.showValue = this.firstNumber;
          this.isEqualSign = false;
        } else {
          if (!this.operationSign) {
            this.firstNumber += String(number);
            this.showValue = this.firstNumber;
          } else {
            this.secondNumber += String(number);
            this.showValue = this.secondNumber;
          }
        }
      } else {
        if (
          (number === "=" ||
            number === "+" ||
            number === "-" ||
            number === "*" ||
            number === "/" ||
            number === "^" ||
            number === "sqrt") &&
          this.operationSign &&
          this.firstNumber
        ) {
          this.showValue = operation(
            this.firstNumber,
            this.secondNumber,
            this.operationSign
          );
          if (number === "=") {
            this.isEqualSign = true;
          } else {
            this.isEqualSign = false;
          }
          this.firstNumber = this.showValue;
          this.secondNumber = "";
          this.operationSign = "";
          this.prevOperand = String(this.firstNumber + this.operationSign);
          memoryDisplayElement.innerHTML = this.prevOperand;
        }
        if (number === "sqrt") {
          this.operationSign = number;
          this.showValue = operation(
            this.firstNumber,
            this.secondNumber,
            this.operationSign
          );
          this.firstNumber = this.showValue;
          this.secondNumber = "";
          this.operationSign = "";
        }
        if (
          (number === "+" ||
            number === "-" ||
            number === "*" ||
            number === "/" ||
            number === "^") &&
          this.firstNumber
        ) {
          this.operationSign = number;
          this.showValue = this.operationSign;
          this.isEqualSign = false;
          this.prevOperand = String(this.firstNumber + this.operationSign);
          memoryDisplayElement.innerHTML = this.prevOperand;
        }
        if (number === "C") {
          this.firstNumber = "";
          this.secondNumber = "";
          this.operationSign = "";
          this.isEqualSign = false;
          this.showValue = "";
          memoryDisplayElement.innerHTML = "";
        }
        if (number === "+/-") {
          this.showValue = Number(this.showValue) * -1;
          if (!this.operationSign) {
            this.firstNumber = this.showValue;
          } else {
            this.secondNumber = this.showValue;
          }
        }

        if (number === ".") {
          if (!this.operationSign && this.firstNumber.indexOf(".") === -1) {
            this.firstNumber += String(number);
            this.showValue = this.firstNumber;
          } else {
            if (this.operationSign && this.secondNumber.indexOf(".") === -1) {
              this.secondNumber += String(number);
              this.showValue = this.secondNumber;
            }
          }
        }
        if (number === "Del") {
          if (this.showValue) {
            this.showValue = String(this.showValue);
            if (!this.operationSign) {
              this.showValue = this.showValue.substr(
                0,
                this.showValue.length - 1
              );
              this.firstNumber = +this.showValue === 0 ? "" : +this.showValue;
            } else {
              if (
                this.showValue === "+" ||
                this.showValue === "-" ||
                this.showValue === "*" ||
                this.showValue === "/" ||
                this.showValue === "^"
              ) {
                this.showValue = this.showValue.substr(
                  0,
                  this.showValue.length - 1
                );
                this.operationSign = this.showValue;
              } else {
                this.showValue = this.showValue.substr(
                  0,
                  this.showValue.length - 1
                );
                this.secondNumber =
                  +this.showValue === 0 ? "" : +this.showValue;
              }
            }
          }
        }
      }
      const input = document.getElementsByTagName("input")[0];
      input.value = this.showValue;
      trickyInput = (
        <input
          type="text"
          placeholder="input the numbers"
          readOnly
          autoFocus
          value={this.showValue}
        ></input>
      );
    };

    return (
      <div className="panel">
        <div className="input-panel">
         {trickyInput}
          <button className="del-btn operation-btn" onClick={() => handleClick("Del")}>Del</button>
          </div>
        
        {memoryDisplay}
        <div className="calculator-grid">
          <button className="operation-btn" onClick={() => handleClick("C")}>
            C
          </button>
          <button onClick={() => handleClick(1)}> 1 </button>
          <button onClick={() => handleClick(2)}> 2 </button>
          <button onClick={() => handleClick(3)}> 3 </button>
          <button className="operation-btn" onClick={() => handleClick("+")}>
            +
          </button>
          <button
            className="operation-btn pow"
            onClick={() => handleClick("^")}
          ></button>
          <button onClick={() => handleClick(4)}> 4 </button>
          <button onClick={() => handleClick(5)}> 5 </button>
          <button onClick={() => handleClick(6)}> 6 </button>
          <button className="operation-btn" onClick={() => handleClick("-")}>
            -
          </button>
          <button className="operation-btn" onClick={() => handleClick("sqrt")}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="icon icon-tabler icon-tabler-math"
              width="40"
              height="40"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" />
              <path d="M16 13l4 4m0 -4l-4 4" />
              <path d="M20 5h-7l-4 14l-3 -6h-2" />
            </svg>
          </button>
          <button onClick={() => handleClick(7)}> 7 </button>
          <button onClick={() => handleClick(8)}> 8 </button>
          <button onClick={() => handleClick(9)}> 9 </button>
          <button className="operation-btn" onClick={() => handleClick("*")}>
            *
          </button>
          <button className="operation-btn" onClick={() => handleClick("+/-")}>
            +/-
          </button>
          <button onClick={() => handleClick(0)}> 0 </button>
          <button onClick={() => handleClick("=")}>= </button>
          <button onClick={() => handleClick(".")}> . </button>
          <button className="operation-btn" onClick={() => handleClick("/")}>
            /
          </button>
        </div>
      </div>
    );
  }
}
export default Buttons;
