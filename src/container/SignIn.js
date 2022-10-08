import React from 'react'
import { Button, Form } from 'react-bootstrap';

export default function SignIn() {
    const onsubmit = (e) => {
        e.preventDefault();
        let username = e.target.email.value;
        let password = e.target.password.value;

        if (username === process.env.REACT_APP_ADMIN_EMAIL) {
            if (password === process.env.REACT_APP_ADMIN_PASSWORD) {
                let obj = {
                    name: process.env.REACT_APP_ADMIN_NAME,
                    email: process.env.REACT_APP_ADMIN_EMAIL,
                    password: process.env.REACT_APP_ADMIN_PASSWORD,
                    id: process.env.REACT_APP_ADMIN_ID
                }
                localStorage.setItem("user", JSON.stringify(obj));
                window.location.href = "/";
            } else {
                alert("Invalid passw0rd ");
            }
            
        }else if (localStorage.getItem("userList") !== null) {
            let temp = JSON.parse(localStorage.getItem("userList"));
            let user = temp.find(e => e.email === username)
            if (user) {
                if (user.password === password) {
                    localStorage.setItem("user", JSON.stringify(user));
                    // return navigate("/");
                    window.location.href = "/";

                }else {
                    alert("Invalid passw0rd ");
                }
            }else {
                alert("Invalid username ");
            }

        }else {
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
                    <Form.Control type="password" name="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="success" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

