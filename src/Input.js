import React from 'react';

class Input extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      inputValue: "",
      language: "swedish",
      shape: "square",
      facing: "N",
      positionX: 0,
      positionY: 0, 
    }

    this.handleInput = this.handleInput.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChoiceOfLanguage = this.handleChoiceOfLanguage.bind(this)
    this.handleChoiceOfShape = this.handleChoiceOfShape.bind(this)
    this.toInputUppercase= this.toInputUppercase.bind(this)
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
      console.log(currentFacing, currentPosX, currentPosY)
      this.setState({facing: currentFacing, positionX: currentPosX, positionY: currentPosY});
    }

    handleInput(event){
      this.setState({
        inputValue: event.target.value
      })
    }

    handleChoiceOfLanguage(event){
      this.setState({
        language: event.target.value
      })
    }

    handleChoiceOfShape(event){
      this.setState({
        shape: event.target.value
      })
      console.log(this)
    }

    toInputUppercase(event){
      event.target.value = ("" + event.target.value).toUpperCase();
    };
    
    render(){
      return(
        <div>
          <form>
          {this.state.language === "swedish" ? <p> Välj språk: </p> : <p> Select language: </p> }
          <label><input type="radio" value="swedish" checked={this.state.language === "swedish"} onChange={this.handleChoiceOfLanguage}/> Swedish </label>
          <label><input type="radio" value="english" checked={this.state.language === "english"} onChange={this.handleChoiceOfLanguage}/> English </label>
          
          {this.state.language === "swedish" ? <p> Välj rumsform: </p> : <p> Select shape of room: </p> }
          <label><input type="radio" value="square" checked={this.state.shape === "square"} onChange={this.handleChoiceOfShape}/> Square </label>
          <label><input type="radio" value="circle" checked={this.state.shape === "circle"} onChange={this.handleChoiceOfShape}/> Circle </label>


          <label> Column <input type="text" maxLength="1" style = {{width:15}} placeholder="0"/></label>
          <label>Rows <input type="text" maxLength="1" style = {{width:15}} placeholder="0"/></label>
          <label> X position <input type="text" maxLength="1" style = {{width:15}} placeholder="0"/></label>
          <label> Y position <input type="text" maxLength="1" style = {{width:15}} placeholder="0"/></label>

          {this.state.language === "swedish" ? <p> <br/> Skriv in kommando: <br/><br/> V - Vänd åt vänster, H - Vänd åt höger, G - Gå framåt </p> : <p> <br/> Type in command: <br/><br/> L - Turn to the left, R - Turn to the right, F - Move forward</p> }
          <input type="text" name="input" onChange={this.handleInput} onInput={this.toInputUppercase}/>
          <button name="Button" onClick={this.handleSubmit}>GO!</button>
          </form>
        </div>
      )
    }
}

export default Input;