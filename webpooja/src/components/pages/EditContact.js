import axios from 'axios';
import React, { Component } from 'react'
import { Consumer } from "../../Context";
//import { v4 as uuidv4 } from 'uuid';
import TextInputGroup from "../layout/TextInputGroup";


 class EditContact extends Component {
     state={
         name:'',
         email:'',
         phone:'',
         errors:''
     };
   
     onChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
     };
     async componentDidMount(){
        const {id}=this.props.match.params;
        const res=await axios.get(
            `https://jsonplaceholder.typicode.com/users/${id}`);
        const contact=res.data;
        this.setState({
            name:contact.name,
            email:contact.email,
            phone:contact.phone
        })   
    }

     onSubmit2= async (dispatch,e)=>{
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
        const updateContact ={
            name,
            email,
            phone
        }
        const {id}=this.props.match.params;
         const res= await axios.put(`https://jsonplaceholder.typicode.com/users/${id}`,updateContact);
         dispatch({type:'UPDATE_CONTACT', payload:res.data});
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
                    <div className="card-header">Edit Contact</div>
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
                        value="Update Contact"
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
export default EditContact;
