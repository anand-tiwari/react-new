import React, {Component} from 'react';

class TextInput extends Component {

	constructor() {
      super();
      this.state = {
      	inputText:'initial text'
      }
    }
    render(){
      return (
      	<input 
      		type="text"
      		placeholder="This is the going to be text"
      		value={this.state.inputText} 
      	/>
      )
    }
}

export default TextInput;
