import React, { Component } from 'react';

export default class Keypad extends Component {
    
    handleKeyUp = (e) => {
        console.log('Entering password...')
    }

    render() {
        return (
        <div>
           <input id="keypad" type="password" onKeyUp={this.handleKeyUp}></input>
        </div>
        )
      }

}