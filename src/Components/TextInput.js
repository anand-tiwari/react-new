import React, {Component} from 'react';
import TextDisplay from './TextDisplay';

class TextInput extends Component {

	constructor() {
      super();
      this.state = {
      	inputText:'initial text'
      }
    }

    handleChange(event) {
    	this.setState({
    		inputText:event.target.value
    	})
    }

    deleteLetter() {
    	this.setState({
    		inputText:this.state.inputText.substring(0, this.state.inputText.length-1)
    	})
    }

    render(){
      return (
      	<div>
	      	<input 
	      		type="text"
	      		placeholder="This is the going to be text"
	      		value={this.state.inputText}
	      		onChange={this.handleChange.bind(this)} 
	      	/>
	      	<TextDisplay text={this.state.inputText} deleteLetter={this.deleteLetter.bind(this)} />
	    </div>
      )
    }
}

export default TextInput;
