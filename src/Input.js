import React from 'react';

class Input extends React.Component {
  constructor(props){
    super(props)

    this.state = {
      inputCommand: "",
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

      let command = this.state.inputCommand;
      let currentPosX = this.state.positionX;
      let currentPosY = this.state.positionY;
      let currentFacing = this.state.facing;

      let north = "N";
      let south = "S";
      let east;
      let west;
      let forward
      let left;
      let right;

      if(this.state.language === "swedish"){
        forward = "G"
        left = "V"
        right = "H"
        east = "Ö"
        west = "V"
      } else {
        forward = "F"
        left = "L"
        right = "R"
        east = "E"
        west = "W"
      }

      if(this.state.shape === "square"){
        this.handleSquare(command, currentPosX, currentPosY, currentFacing, forward, left, right, north, south, east, west)
      } else {
        this.handleCircle(command, currentPosX, currentPosY, currentFacing, forward, left, right, north, south, east, west)
      }
    }

    handleSquare(command, currentPosX, currentPosY, currentFacing, forward, left, right, north, south, east, west){
      let cols = this.state.columns;
      let rows = this.state.rows;

      if(cols < 0 || rows < 0 || currentPosX > cols || currentPosY > rows){
        alert("Start position, columns or rows invalid")
      }
      
      const splitCommand = command.split('').forEach(c => {         
        if( (c === left && currentFacing === north) || (c === right && currentFacing === south) ) {
            currentFacing = west;
          } else if ((c === right && currentFacing === north) || (c === left && currentFacing === south)) {
            currentFacing = east;
          } else if ((c === left && currentFacing === east) || (c === right && currentFacing === west)) {
            currentFacing = north;
          } else if ((c === right && currentFacing === east) || (c === left && currentFacing === west)) {
            currentFacing = south;
          } else if (c === forward && currentFacing === north){
            currentPosY++;
          } else if (c === forward && currentFacing === east){
            currentPosX++;
          } else if (c === forward && currentFacing === south){
            currentPosY--;
          } else if (c === forward && currentFacing === west){
            currentPosX--;
          } else {
            alert("Invalid command")
          }

          if(!(currentPosX >= 0 && currentPosX <= cols && currentPosY >= 0 && currentPosY <= rows)){
            alert("Robot walked outside area")
          }
      })
      
      console.log(currentFacing, currentPosX, currentPosY)
      this.setState({facing: currentFacing, positionX: currentPosX, positionY: currentPosY});
    }

    handleCircle(command, currentPosX, currentPosY, currentFacing, forward, left, right, north, south, east, west){
      let radius = this.state.radius;
      let startX = currentPosX;
      let startY = currentPosY;

      if(Math.abs(startX) > radius || Math.abs(startY) > radius){
        alert("Start position or radius invalid")
      }

      const splitCommand = command.split('').forEach(c => {         
        if( (c === left && currentFacing === north) || (c === right && currentFacing === south) ) {
            currentFacing = west;
          } else if ((c === right && currentFacing === north) || (c === left && currentFacing === south)) {
            currentFacing = east;
          } else if ((c === left && currentFacing === east) || (c === right && currentFacing === west)) {
            currentFacing = north;
          } else if ((c === right && currentFacing === east) || (c === left && currentFacing === west)) {
            currentFacing = south;
          } else if (c === forward && currentFacing === north){
            currentPosY++;
          } else if (c === forward && currentFacing === east){
            currentPosX++;
          } else if (c === forward && currentFacing === south){
            currentPosY--;
          } else if (c === forward && currentFacing === west){
            currentPosX--;
          } else {
            alert("Invalid command")
          }

          let d = Math.sqrt((Math.pow(startX - currentPosX, 2)) + Math.pow(startY - currentPosY, 2));
          if(!(d <= radius)) {
            alert("Robot walked outside area")
          } 
      })

      console.log(currentFacing, currentPosX, currentPosY)
      this.setState({facing: currentFacing, positionX: currentPosX, positionY: currentPosY});
    }

    handleInput(event){
      this.setState({
        inputCommand: event.target.value
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