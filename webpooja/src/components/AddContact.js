import React, { Component } from 'react'
import { Consumer } from "../Context";
//import { v4 as uuidv4 } from 'uuid';
import TextInputGroup from "./layout/TextInputGroup";
import axios from "axios";


 class AddContact extends Component {
     state={
         name:'',
         email:'',
         phone:'',
         errors:''
     };
     onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
     }
     onSubmit2= async (dispatch, e)=>{
         e.preventDefault();
        const {name,email,phone}=this.state;
        if(name===''){
            this.setState({errors:{name:'Name is required'}});
            return;
        }
        if(email===''){
            this.setState({errors:{email:"Email is required"}});
            return;
        }
        if(phone===''){
            this.setState({errors:{phone:"Phone no is required"}});
            return;
        }
        const newContact ={
            name,
            email,
            phone,
            errors:{}
        }
        const res= await axios.post
        ('https://jsonplaceholder.typicode.com/users',newContact);
        dispatch({type: 'Add_CONTACT', payload:
        res.data});
        
        //clear state
        this.setState({
            name:'',
            email:'',
            phone:''
        });
        this.props.history.push('/')

     };
     

  render() {
      const {name,email,phone,errors}=this.state;
      return (
          <Consumer>
              {value=>{
                  const {dispatch}=value;
                  return (
                    <div className="card mb-3">
                    <div className="card-header">Add Contact</div>
                    <div className="card-body">
                    <form onSubmit={this.onSubmit2.bind(this, dispatch)}>
                    <TextInputGroup 
                        label="Name"
                        name="name"
                        placeholder="Enter Name"
                        value={name}
                        onChange={this.onChange} 
                        error={errors.name}

                    />
                    <TextInputGroup 
                        label="Email"
                        type="email"
                        name="email"
                        value={email}
                        placeholder="Enter Email"
                        onChange={this.onChange}
                        error={errors.email}  
                    />
                    <TextInputGroup 
                        label="Phone"
                        name="phone"
                        value={phone}
                        placeholder="Enter Phone"
                        onChange={this.onChange}
                        error={errors.phone}  
                    />
                    <input 
                        type="submit"
                        value="Add Contact"
                        className="btn btn-light btn-block" />  
                    </form>
                    </div>
                    </div>
    )
              }}
          </Consumer>
      )
   
  }
}
export default AddContact;
