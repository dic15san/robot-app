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
      columns: 0,
      rows: 0,
      radius: 0, 
    }

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleSquare = this.handleSquare.bind(this);
    this.handleCircle = this.handleCircle.bind(this);
    this.handleInput = this.handleInput.bind(this);
    this.handleChoiceOfLanguage = this.handleChoiceOfLanguage.bind(this);
    this.handleChoiceOfShape = this.handleChoiceOfShape.bind(this);
    this.toInputUppercase= this.toInputUppercase.bind(this);
    this.handlePosX= this.handlePosX.bind(this);
    this.handlePosY= this.handlePosY.bind(this);
    this.handleColumns= this.handleColumns.bind(this);
    this.handleRows= this.handleRows.bind(this);
    this.handleRadius= this.handleRadius.bind(this);
  }

    handleSubmit(e){
      e.preventDefault();

      let command = this.state.inputValue;
      let currentPosX = this.state.positionX;
      let currentPosY = this.state.positionY;
      let currentFacing = this.state.facing;

      console.log(command);

      if(this.state.shape === "square"){
        handleSquare(command, currentPosX, currentPosY, currentFacing)
      } else {
        handleCircle(command, currentPosX, currentPosY, currentFacing)
      }

    }

      handleSquare(command, currentPosX, currentPosY, currentFacing){

      const splitCommand = command.split('').forEach(c => {
        if( (c === "V" && currentFacing === "N") || (c === "H" && currentFacing === "S") ) {
          currentFacing = "W";
        } else if ((c === "H" && currentFacing === "N") || (c === "V" && currentFacing === "S")) {
          currentFacing = "E";
        } else if ((c === "V" && currentFacing === "E") || (c === "H" && currentFacing === "W")) {
          currentFacing = "N";
        } else if ((c === "H" && currentFacing === "E") || (c === "V" && currentFacing === "W")) {
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

    handleCircle(command, currentPosX, currentPosY, currentFacing){

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
    }

    handlePosX(event){
      this.setState({
        positionX: event.target.value
      })
    }

    handlePosY(event){
      this.setState({
        positionY: event.target.value
      })
    }
    
    handleColumns(event){
      this.setState({
        columns: event.target.value
      })
    }

    handleRows(event){
      this.setState({
        rows: event.target.value
      })
    }

    handleRadius(event){
      this.setState({
        radius: event.target.value
      })
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

          <label> <br/><br/> Start position X <input type="number" style = {{width:30}} placeholder="0" onChange={this.handlePosX}/></label>
          <label> Start position Y <input type="number" style = {{width:30}} placeholder="0" onChange={this.handlePosY}/></label>
          
          {this.state.shape === "square" ? 
          <ul><label> Column <input type="number" style = {{width:30}} placeholder="0" onChange={this.handleColumns}/></label><label> Rows <input type="number" style = {{width:30}} placeholder="0" onChange={this.handleRows}/></label></ul>
          : <label> Radius <input type="number" style = {{width:30}} placeholder="0" onChange={this.handleRadius}/></label>}

          {this.state.language === "swedish" ? <p> <br/> Skriv in kommando: <br/><br/> V - Vänd åt vänster, H - Vänd åt höger, G - Gå framåt </p> : <p> <br/> Type in command: <br/><br/> L - Turn to the left, R - Turn to the right, F - Move forward</p> }
          <input type="text" name="input" onChange={this.handleInput} onInput={this.toInputUppercase}/>
          <button name="Button" onClick={this.handleSubmit}>GO!</button>
          </form>
        </div>
      )
    }
}

export default Input;