import {React, useState, useEffect} from "react";
import {Form, Button, Row, Col} from "react-bootstrap";
import {Link, useNavigate} from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();
    const sendOTP = () => {
        navigate('/signup/otp');
    };

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [password_confirmation, setPasswordConfirmation] = useState("");
    const [phone, setPhone] = useState("");
    const [country_code, setCountryCode] = useState("=1");
    const [role_id, setRoleId] = useState(2);

    
    const handleSubmit = event => {
        event.preventDefault();
    
        const data = {name, email, password, password_confirmation, phone, country_code, role_id};
        fetch("https://dev.api.peacemakerapp.com/api/register", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(data)
          
        })
          .then(response => response.json())
          .then(data => console.log(data))
          .catch(error => console.log(error));
      };



    // console.log(name, email);


    return(
        <>
            <>
                <h1 className={"mb-3"}>Create Account</h1>
                <Form onSubmit={handleSubmit}>
                    <Form.Group col className={"form-group"} controlId="signupfirstname">
                        <Form.Label>Name</Form.Label>
                        
                        <Form.Control type={"text"}
                        value={name}
                        onChange={event => setName(event.target.value)}
                        placeholder="Enter Username" />
                    </Form.Group>

                    <Form.Group col className={"form-group"} controlId="signupphonenumber">
                        <Form.Label>Enter phone number</Form.Label>
                        <Form.Control type={"tel"}  placeholder="+233 1899 3890 12899" 
                        value={phone}
                        onChange={event => setPhone(event.target.value)}/>
                    </Form.Group>

                    <Form.Group col className={"form-group"} controlId="signupuemail">
                        <Form.Label>Email</Form.Label>
                        <Form.Control type={"email"}  placeholder="Enter Email" 
                        value={email}
                        onChange={event => setEmail(event.target.value)}/>
                    </Form.Group>

                    <Form.Group col className={"form-group"} controlId="signuppassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type={"password"}
                            placeholder="************"
                            value={password}
                            onChange={event => setPassword(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group col className={"form-group"} controlId="signupconfirmpassword">
                        <Form.Label>Confirm Password</Form.Label>
                        <Form.Control
                            type={"password"}
                            placeholder="************"
                            value={password_confirmation}
                            onChange={event => setPasswordConfirmation(event.target.value)}
                        />
                    </Form.Group>
                    <Form.Group className={"form-group text-center mb-5"}>
                        <Button variant={"gradient w-100"} type="submit">Sign Up</Button>
                    </Form.Group>
                    <Form.Group className={"form-group text-center"}>
                        Already have an account? <Link to={"/signin"} className={"text-green"}>Sign In</Link>
                    </Form.Group>
                    <Form.Group className={"form-group text-center"}>
                        <Link to={"/admin"} className={"text-green"}>Login as Admin</Link>
                    </Form.Group>
                </Form>
            </>
        </>
    )
}

export default SignUp;