import React from 'react';

class Button extends React.Component {
    handleClick = () => {
        console.log('click');
      }
    
    render(){
      return(
        <button name="Button" onClick={this.handleClick}>GO!</button>
      )
    }
}

export default Button;