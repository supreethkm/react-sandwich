import React,{Component} from "react";


class Person extends Component{
  state
  constructor() {
    super()
  }
  render(){
    return <div><h1>This is {this.props.name}, of age {this.props.age} years </h1></div>
  }
}
export default Person;
