import { useState } from "react";
import './Login.css';

const Login = () => {
    const [errorMessages, setErrorMessages] = useState({});
    const [isSubmitted, setIsSubmitted] = useState(false);

    const database = [
        {
            email: "user1",
            password: "pass1"
        },
        {
            email: "user2",
            password: "pass2"
        },
        {
            email: "user3",
            password: "pass3"
        }
    ];

    const errors = {
        uemail: "You have entered an invalid email",
        pass: "You have entered an invalid password"
    };

    const handleSubmit = (event) => {
        event.preventDefault(); 
        let [uemail, pass] = document.forms[0];
        const userData = database.find((user) => user.email === uemail.value) 
        if(userData) {
            if(userData.pass !== pass.value){
                setErrorMessages({name:"Password", message: errors.pass})
            } else {
                setIsSubmitted(true);
            }
        } else {
                setErrorMessages({name:"Username", message: errors.uemail});
        }
    }

    return (
        <div className="App">
        <form onSubmit={handleSubmit}>
            <h2 className="login">LOGIN</h2>
            <label className="email">Email</label><br/>
            <input type="text" className="emailInput" required/><br/><br/>
            <label className="password">Password</label><br/>
            <input type="password" className="passwordInput" required/><br/><br/>
            <input type="submit" className="button" value="SIGN IN" /><br/>
        </form>
        <div className="links">
            <a className="link1">CREATE ACCOUNT</a>
            <a className="link2">FORGOT YOUR PASSWORD?</a>
        </div>
        </div>
    )
}

export default Login;