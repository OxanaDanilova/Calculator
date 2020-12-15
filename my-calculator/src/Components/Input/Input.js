import React, { Component } from 'react';
import './Input.css';
class Input extends Component {
    constructor(props){
        super(props);
        this.state=0;
    }
 
    render(){
        return (
            <input type='text' placeholder='input the numbers' readOnly ></input>
        )

    }
};

export default Input;