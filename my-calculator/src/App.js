import "./App.css";
import Header from './Components/Header/Header';
/* import Input from './Components/Input/Input'; */
import Buttons from './Components/Buttons/Buttons';

function App() {

  return (
    <div className="App">
      <Header />
      <main>
     {/*   <Input /> */}
       <Buttons />
      {/*   <input type='text' placeholder='input the numbers' readOnly /* value={this.state.inputValue } ></input> */}
      {/*    <div>
        <button onClick={() => handleClick(1)}>1</button>
        <button onClick={() => handleClick(2)}>2</button>
        <button onClick={() => handleClick(3)}>3</button>
        <button onClick={() => handleClick('+')}>+</button>
    </div>
      <div>
      <button onClick={() => handleClick(4)}>4</button>
      <button onClick={() => handleClick(5)}>5</button>
      <button onClick={() => handleClick(6)}>6</button>
      <button onClick={() => handleClick('-')}>-</button>
  </div>
     <div>
     <button onClick={() => handleClick(7)}>7</button>
     <button onClick={() => handleClick(8)}>8</button>
     <button onClick={() => handleClick(9)}>9</button>
     <button onClick={() => handleClick('*')}>*</button>
 </div>
   <div>
   <button onClick={() => handleClick(0)}>0</button>
   <button onClick={() => handleClick('=')}>=</button>
   <button onClick={() => handleClick('C')}>C</button>
   <button onClick={() => handleClick('/')}>/</button>
</div> */}

      </main>
    </div>
  );
}

export default App;
