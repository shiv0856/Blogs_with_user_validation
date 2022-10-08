import React from 'react'
import { Button, Form } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export default function SignIn() {
    let navigate = useNavigate();
    const onsubmit =(e) => {
        e.preventDefault();
        let username = e.target.email.value;
        let password = e.target.password.value;

        if (localStorage.getItem("userList")!==null)
        {
            let temp = JSON.parse(localStorage.getItem("userList"));
            let user = temp.find(e => e.email === username )
            console.log(user);
            if(user)
            {
                if (user.password === password){
                    localStorage.setItem("user",JSON.stringify(user));
                    return navigate("/");

                }
                else{
                    alert("Invalid passw0rd ");
                }
            }
            else {
                alert("Invalid username ");
            }

        }
        else {
            alert("User is not resgitered, Please sign up for account")
        }
    }

    return (
        <div className='container'>
            <h2> Sign In</h2>
            <Form onSubmit={onsubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Username</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter your email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password"  required/>
                </Form.Group>
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

