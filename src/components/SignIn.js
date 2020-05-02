import React from 'react'

export default class SignIN extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return (
            <div className ="SignIn">
            <form>
            <label for = "username" ><b>Username</b></label>
            <br />
            <input type = "text" name = "username" />
            <br />
            <label for = "password" ><b>Password</b></label>
            <br />
            <input type = "password" />
            <div class="psw">Forgot <a href="#">password?</a></div>
            <button type = "submit"  className = "loginbtn"> Login</button>
            </form>
            </div>
        )
    }
}