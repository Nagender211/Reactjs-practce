import React, { Component } from 'react'
import { Navigate } from 'react-router-dom';
import Cookies from 'js-cookie'
class Login extends Component{
    state={
        username: '',
        password: '',
        isLoggin: false,
        error: '',
        showError: false,
    }
    onSucces=(jwtToken)=>{
        Cookies.set('jwt-token',jwtToken,{expires: 7});
        this.setState({
            isLoggin: true
        })

    }
    onFauilr=(errorMsg)=>{
        this.setState({
            error: errorMsg,
            showError: true
        })

    }
    onSubmitForm=async(e)=>{
        e.preventDefault();
        const {username,password}=this.state;
        const updateUser={username,password}
        const url='https://apis.ccbp.in/login';
        const options={
            method: 'POST',
            body: JSON.stringify(updateUser)
        }
        const response=await fetch(url,options);
        console.log(response)
        const data=await response.json();
        if(response.ok===true){
           
            this.onSucces(data.jwt_token)
        }
        else{
            this.onFauilr(data.error_msg)
        }
    }
    userName=(e)=>{
        this.setState({
            username: e.target.value
        })
    }
    passwordChange=(e)=>{
        this.setState({
            password: e.target.value
        })
    }
    renderUserName=()=>{
        const {username}=this.state;
        return (
            <div>
                <label htmlFor='username'>Username:</label>
                <input type="text" placeholder='please enter the userName' value={username} onChange={this.userName} />
            </div>
        )

    }
    renderpassword=()=>{
        const {password}=this.state;
        return(
            <div>
            <label htmlFor='password'>Password:</label>
            <input type='password' placeholder='please enter the password' value={password} onChange={this.passwordChange} />
            </div>
        )
    }
    render() {
        const {showError,error}=this.state;
        const jwtToken=Cookies.get('jwt-token');
        if(jwtToken !== undefined){
            return <Navigate to='/' />
        }
      return (
        <div>
            <form onSubmit={this.onSubmitForm}>
                <div>{this.renderUserName()}</div>
                <div>{this.renderpassword()}</div>
                <button type='submit'>Login</button>
                {showError && <p>*{error}</p>}
                
            </form>
          
        </div>
      )
    }
}

export default Login
