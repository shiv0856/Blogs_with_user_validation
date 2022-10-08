import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';
import { useNavigate } from "react-router-dom";

export default function SignUp() {
    let navigate = useNavigate();
    const onsubmit = (e) =>{
        e.preventDefault();
        let name = e.target.name.value;
        let email = e.target.email.value;
        let password = e.target.password.value;
        let cpassword = e.target.cpassword.value;

        if (password === cpassword){
            let obj ={
                name,
                email,
                password,
                id : uuidv4(),
            }

            let temp = localStorage.getItem("userList") !== null ? JSON.parse(localStorage.getItem("userList")) : []
            localStorage.setItem("userList", JSON.stringify([...temp,obj]));
            return navigate("/signIn");
        }
        else {
            alert("Password and Confirm Password are not same. Please try again!")
        }

    }

    return (
        <div className='container'>
            <h2> Sign Up </h2>
            <Form onSubmit={onsubmit}> 
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name="name"  placeholder="Enter your name" required  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name="email" placeholder="Enter your email address" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label>Confirm Password</Form.Label>
                    <Form.Control type="password" name="cpassword" placeholder="ConfirmPassword" required />
                </Form.Group>
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>

        </div>
    )
}
