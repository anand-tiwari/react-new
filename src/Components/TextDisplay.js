import React, {Component} from 'react';

class TextDisplay extends Component {

    handleClick() {
        this.props.deleteLetter();
    }

    render(){
      return (
        <div>
      	     <div>I'm going to display text  {this.props.text} </div>
            <button onClick={this.handleClick.bind(this)} >delete letter</button>
        </div>
      )
    }
}

export default TextDisplay;
