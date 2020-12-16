import React, { Component } from 'react';
import './Buttons.css';
class Buttons extends Component {
  firstNumber='';
  secondNumber='';
  operationSign = '';
  showValue = '';

  render(){

    const operation = (firstNum, secondNum, operationSign )=> {
      switch (operationSign) {
        case '+': return  Number(firstNum)+Number(secondNum);
        
        case '-': return Number(firstNum)-Number(secondNum);
        
        case '*': return Number(firstNum)*Number(secondNum);
        
        case '/': if (Number(secondNum)!==0) {
          return Number(firstNum)/Number(secondNum);
        } else {
          return '';
        }
       
        case '^': return Math.pow(Number(firstNum),Number(secondNum));

        case 'sqrt': return Math.sqrt(Number(firstNum));
        
        default:
          break;
      }
     };

    let trickyInput = <input type='text' placeholder='input the numbers' readOnly></input>;
    const handleClick = (number) => {
      console.log('type of number', typeof number);
      if (typeof number === 'number') {
        if (!this.operationSign) {
          this.firstNumber += String(number);
          this.showValue = this.firstNumber;
        } else {
          this.secondNumber += String(number);
          this.showValue = this.secondNumber;
        }
      } else {

        if ((number==='=') && (this.operationSign)) {
          this.showValue = operation(this.firstNumber, this.secondNumber, this.operationSign);
          this.firstNumber = this.showValue;
          this.secondNumber = '';
          this.operationSign = '';
          
      }
      if ( number==='sqrt') {
        this.operationSign = 'sqrt';
        this.showValue = operation(this.firstNumber, this.secondNumber, this.operationSign);
        this.firstNumber = this.showValue;
        this.secondNumber = '';
                
    }
      if (number==='+' || number==='-' || number==='*' || number==='/' || number==='^') {
        this.operationSign = number;
        this.showValue = this.operationSign;
     }
     if (number==='C') {
      this.firstNumber = '';
      this.secondNumber = '';
      this.operationSign = '';
      this.showValue = '';
   }
   if (number==='+/-') {
      this.showValue =Number(this.showValue)*(-1);
    if (!this.operationSign) {
      this.firstNumber = this.showValue;
    } else {
      this.secondNumber = this.showValue;
    }
  
 }

     if (number === '.') {
    
      if (!this.operationSign && this.firstNumber.indexOf('.')===-1) {
        console.log(this.firstNumber.indexOf('.'));
        this.firstNumber += String(number);
        this.showValue = this.firstNumber;
      } else {
        if (this.operationSign && this.secondNumber.indexOf('.')===-1){
        console.log('zakonsolim vse tut naher part 2');
        console.log(this.secondNumber.indexOf('.'));
        this.secondNumber += String(number);
        this.showValue = this.secondNumber;
        }
      }
    }
   }

          
      /* if (number==='=') {
        this.result = this.number;
        this.number = this.result;
        this.operationSign = '='
      } */
          const input = document.getElementsByTagName('input')[0];
          input.value = this.showValue;
          trickyInput = <input type='text' placeholder='input the numbers' readOnly value={this.showValue}></input>

          console.log('first', this.firstNumber);
          console.log('second', this.secondNumber);
          console.log('operationSign', this.operationSign);
               
    }
    return (
      <>
       {trickyInput}
      <div>
          <button onClick={() => handleClick('.')}>.</button>
          <button onClick={() => handleClick(1)}>1</button>
          <button onClick={() => handleClick(2)}>2</button>
          <button onClick={() => handleClick(3)}>3</button>
          <button onClick={() => handleClick('+')}>+</button>
      </div>
        <div>
        <button onClick={() => handleClick('^')}>^</button>
        <button onClick={() => handleClick(4)}>4</button>
        <button onClick={() => handleClick(5)}>5</button>
        <button onClick={() => handleClick(6)}>6</button>
        <button onClick={() => handleClick('-')}>-</button>
    </div>
       <div>
       <button onClick={() => handleClick('sqrt')}>sqrt</button>
       <button onClick={() => handleClick(7)}>7</button>
       <button onClick={() => handleClick(8)}>8</button>
       <button onClick={() => handleClick(9)}>9</button>
       <button onClick={() => handleClick('*')}>*</button>
   </div>
     <div>
     <button onClick={() => handleClick('+/-')}>+/-</button>
     <button onClick={() => handleClick(0)}>0</button>
     <button onClick={() => handleClick('=')}>=</button>
     <button onClick={() => handleClick('C')}>C</button>
     <button onClick={() => handleClick('/')}>/</button>
  </div>  
  </>
  )
  }
     
}
export default Buttons;