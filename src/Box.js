import React from 'react';
import './Box.css';
import { data, planet } from './data';
import Answer from './Answer'
import Image from './Image'


class Box extends React.Component{ 
  constructor(props){
    super(props)
    this.state = {
      input_weight: "",
      planet_state : "Sun",
      gravity_state : "28.02"
    }
    
    this.handleChange_placeholder = this.handleChange_placeholder.bind(this)
    this.handleChange_dropdown = this.handleChange_dropdown.bind(this)
    this.handelGravity = this.handelGravity.bind(this)
  }
  
  
  handleChange_placeholder(event){
    this.setState({
      input_weight : event.target.value
    })
    
  }
  
  //handlechange is responsible for changing planet state
  handleChange_dropdown(event){
    this.setState({
      planet_state : event.target.value
    })        
    //handlegravity is responsible for changing state of gravity
  }
  
  
  handelGravity(){  
    //getting index of planet from the planet array which we formed
    var index = planet.findIndex(obj => {
      return obj.planet === this.state.planet_state    
    })
    
    //index is index of planet 
    this.setState({
      gravity_state : data[index][1]
      //using data as both have same index to get gravity value
    }) ;   
  } 
  
  
  render(){
    return(

      <div className="grid-container">
                
        <div className="box" >
          <div className="box_1">
          <div className="box_text">Enter your weight</div>

          <div className="input-block">
            <input
              placeholder="Weight" 
              onChange = {this.handleChange_placeholder}
              type="number"
            />    
          </div>   
          </div>

          <br />
  
          <label for="planet" className="box_text">Choose a planet</label>

          <select 
            value={this.state.planet} 
            onChange={this.handleChange_dropdown}
            onClick={this.handelGravity}              
          > 

            { planet.map(item => (
              <option value={item.planet} >{item.planet} </option>
              ))
            }

            

          </select>
        </div>       
        <Image planetprops={this.state.planet_state} />
        <Answer planetprops={this.state.planet_state} weightprops={this.state.input_weight} gravityprops={this.state.gravity_state} />
       
      </div>
      
      

      )
  }
}



export default Box;