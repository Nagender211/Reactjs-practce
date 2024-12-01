import React, { Component } from 'react'

import {Navigate} from 'react-router-dom'
import Cookies from 'js-cookie'

class Login extends Component{

    state={
        username: "",
        password: "",
        isLogged: false,
        error: "",
    }
    // componentDidMount(){
    //     this.onFormSubmnit();
    // }
    componentDidMount(){
        this.getProfileData();
    }
    getProfileData=async()=>{
        const {profile}=this.state;
        try{
            const response=await fetch('https://apis.ccbp.in/profile');
            const data=await response.json();
            console.log(data)

        }
        catch(error){
            console.error('Failed to get profile data', error)
        }
    }
    onFailur=()=>{
        console.log("user login is faild")
    }
    onSucces=(jwtToken)=>{
        Cookies.set('jwt-token',jwtToken,{expires: 7})
        const {username,password}=this.state;
        this.setState({
            username: "",
            password: "",
            isLogged: true
        })
        console.log("user login is success")
        console.log(username,password)
    }
    onFormSubmnit=async(e)=>{
        e.preventDefault();
        console.log("form is submited")
        const {username,password}=this.state;
        const updateUser={username,password};
        const url ='https://apis.ccbp.in/login';
        const options={
            method: 'POST',
             
           
            body: JSON.stringify(updateUser)
        }
        const response=await fetch(url,options)
        const data=await response.json();
        if(response.ok === true){
            this.onSucces(data.jwt_token);
        }else{
            this.onFailur()
        }
    }
    userName=(e)=>{
        this.setState({username: e.target.value})

    }
    userPassword=(e)=>{
        this.setState({password: e.target.value})
    }

    renderUserName=()=>{
        const {username}=this.state 
        return (
            <div>
                <label>Username:</label>
                <input type="text" name="username" value={username} onChange={this.userName} placeholder='please enter the username'/>
            </div>
        )
    } 


    renderPassword=()=>{
        const {password}=this.state 
        return (
            <div>
                <label>Password:</label>
                <input type="text" name="username" value={password} onChange={this.userPassword} placeholder='please enter the password '/>
            </div>
        )
    }

    render() {
        
        const jwtToken=Cookies.get('jwt-token')
        if(jwtToken !== undefined){
            return <Navigate to="/"/>
        }
      return (
        <div>
            <form onSubmit={this.onFormSubmnit}>
                <div>
                {this.renderUserName()}
            </div>
            <div>
                {this.renderPassword()}
            </div> 
          
                <button type='submit'>Login</button>
            
            </form>
            
        </div>
      )
    }
}

export default Login
