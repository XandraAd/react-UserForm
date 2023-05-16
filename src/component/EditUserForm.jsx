/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { Component } from 'react'

export default class EditUserForm extends Component {
    constructor(props){
        super(props)
        this.state={
            
                name:props.user.name,
                email:props.user.email,
                gen:props.user.gen,
                id:props.user.id
            
        }
    }

    componentDidUpdate(prevProps) {
        if (prevProps.user !== this.props.user) {
          this.setState({
            name: this.props.user.name,
            email: this.props.user.email,
            gen: this.props.user.gen,
            id: this.props.user.id,
          });
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
        );
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const { name, email, gen } = this.state;
    const updatedUser = {
      name,
      email,
      gen,
      id: this.props.user.id,
    };
    this.props.handleData(updatedUser);
    this.handleReset();
    e.target.reset();
  };

  

render() {
    return (
      <div>
        
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
          <input type="submit" value="save" />
          </form>
        <hr />
      </div>
    )
  }
}