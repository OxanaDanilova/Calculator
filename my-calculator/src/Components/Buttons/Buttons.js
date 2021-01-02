import React, { Component } from 'react';
import './Buttons.css';
class Buttons extends Component {
  firstNumber='';
  secondNumber='';
  operationSign = '';
  showValue = '';
  prevOperand = '';

  render(){

    const operation = (firstNum, secondNum, operationSign )=> {
      let result = 0;
      switch (operationSign) {
        case '+': result =  Number(firstNum)+Number(secondNum);
                  break;
        
        case '-': result = Number(firstNum)-Number(secondNum);
        break;
        
        case '*': result = Number(firstNum)*Number(secondNum);
        break;
        
        case '/': if (Number(secondNum)!==0) {
          result = Number(firstNum)/Number(secondNum);
        } else {
          result = '';
        }
        break;
       
        case '^': result = Math.pow(Number(firstNum),Number(secondNum));
        break;

        case 'sqrt': if (firstNum>=0) {
          result = Math.sqrt(Number(firstNum));}
          else {
            alert('Should be positiv number');
            result = '';
          };       
          break;
        
        default:
          break;
      }
      return Math.round(result*10000000)/10000000;
     };

    let trickyInput = <input type='text' placeholder='input the numbers' readOnly></input>;
    let memoryDisplay = <div className = 'memory-res'></div>;
    const handleClick = (number) => {
        if (typeof number === 'number') {
        if (!this.operationSign) {
          this.firstNumber += String(number);
          this.showValue = this.firstNumber;
        } else {
          this.secondNumber += String(number);
          this.showValue = this.secondNumber;
        }
      } else {

        if ((number==='=' || number==='+' || number==='-' || number==='*' || number==='/' || number==='^' || number==='sqrt' ) && this.operationSign && this.firstNumber) {
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
        this.secondNumber += String(number);
        this.showValue = this.secondNumber;
        }
      }
    }
   }
          const input = document.getElementsByTagName('input')[0];
          input.value = this.showValue;
          trickyInput = <input type='text' placeholder='input the numbers' readOnly value={this.showValue}></input>

          console.log('first', this.firstNumber);
          console.log('second', this.secondNumber);
          console.log('operationSign', this.operationSign);

          this.prevOperand = String(this.firstNumber+this.operationSign);
          console.log('hint', this.prevOperand);
          memoryDisplay = <div className = 'memory-res'>{this.prevOperand}</div>;
          console.log(memoryDisplay);
          
               
    }
  
    
    return (
      <div className='panel'>
       {trickyInput}
       {memoryDisplay}
       
       <div className = 'calculator-grid'>
          <button className = 'operation-btn' onClick={() => handleClick('C')}>C</button>
          <button onClick={() => handleClick(1)}>1</button>
          <button onClick={() => handleClick(2)}>2</button>
          <button onClick={() => handleClick(3)}>3</button>
          <button className = 'operation-btn' onClick={() => handleClick('+')}>+</button>
      
        <button className = 'operation-btn' onClick={() => handleClick('^')}>^</button>
        <button onClick={() => handleClick(4)}>4</button>
        <button onClick={() => handleClick(5)}>5</button>
        <button onClick={() => handleClick(6)}>6</button>
        <button className = 'operation-btn' onClick={() => handleClick('-')}>-</button>
  
       <button className = 'operation-btn' onClick={() => handleClick('sqrt')}>sqrt</button>
       <button onClick={() => handleClick(7)}>7</button>
       <button onClick={() => handleClick(8)}>8</button>
       <button onClick={() => handleClick(9)}>9</button>
       <button className = 'operation-btn' onClick={() => handleClick('*')}>*</button>
   
     <button className = 'operation-btn' onClick={() => handleClick('+/-')}>+/-</button>
     <button onClick={() => handleClick(0)}>0</button>
     <button onClick={() => handleClick('=')}>=</button>
     <button onClick={() => handleClick('.')}>.</button>
     <button className = 'operation-btn' onClick={() => handleClick('/')}>/</button>
   </div>
  </div>
 
  )
  }
     
}
export default Buttons;