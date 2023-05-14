/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class UsersForm extends Component {
    constructor(props){
        super(props)
        this.state={
            
                name:"",
                email:"",
                gen:""
            
        }
    }

    handleChange=(e)=>{
        e.preventDefault()
        this.setState (
            {
                [e.target.name]:e.target.value
            }
        ) 
    }
    handleReset=()=>{
        this.setState(
            {
                name:"",
                email:"",
                gen:""  
            }
        )
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        this.props.handleData(this.state)
      this.handleReset()
      e.target.reset()
    }



render() {
    return (
      <div>
        <h2>User Form</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="name">Name</label>  <br />
          <input type="text" name="name" id="" defaultValue={this.state.name} onChange={this.handleChange} required/>
          <br /><br />
          <label htmlFor="email">Email</label><br />
          <input type="email" name="email" id="" defaultValue={this.state.email}  onChange={this.handleChange} required/>
          <br /><br />
          <label htmlFor="gen">Gen</label><br />
          <input type="number" name="gen" id="" defaultValue={this.state.gen}  onChange={this.handleChange} required/>
          <br /><br />
          <input type="submit" value="submit here" />
          <hr />
        </form>
      </div>
    )
  }
}
