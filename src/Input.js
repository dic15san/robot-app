import React from 'react';

class Input extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      inputValue: "",
      language: "Swedish",
      facing: "N",
      positionX: 0,
      positionY: 0, 
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

    handleSubmit(){
      let command = this.state.inputValue;
      let currentPosX = this.state.positionX;
      let currentPosY = this.state.positionY;
      let currentFacing = this.state.facing;

      console.log(command);

      const splitCommand = command.split('').forEach(c => {
        console.log(c);
        if( (c === "V" && currentFacing === "N") || (c === "H" && currentFacing === "S") ) {
          currentFacing = "W";
        } else if ((c === "H" && currentFacing === "N") || (c === "V" && currentFacing === "S")) {
          currentFacing = "E";
        } else if ((c === "V" && currentFacing === "E") || (c === "W" && currentFacing === "H")) {
          currentFacing = "N";
        } else if ((c === "H" && currentFacing === "E") || (c === "W" && currentFacing === "V")) {
          currentFacing = "S";
        } else if (c === "F" && currentFacing === "N"){
          currentPosY++;
        } else if (c === "F" && currentFacing === "E"){
          currentPosX++;
        } else if (c === "F" && currentFacing === "S"){
          currentPosY--;
        } else if (c === "F" && currentFacing === "W"){
          currentPosX--;
        } else {
          alert("Invalid command")
        }
      })
      this.setState({facing: currentFacing, positionX: currentPosX, positionY: currentPosY});
    }

    handleInput(event){
      this.setState({
        inputValue: event.target.value
      })
    }
    
    render(){
      return(
        <div>
          <input type="text" name="input" onChange={this.handleInput} />
          <button name="Button" onClick={this.handleSubmit}>GO!</button>
        </div>
      )
    }
}

export default Input;