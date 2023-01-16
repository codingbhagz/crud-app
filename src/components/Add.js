import React from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";
import validator from "validator";

function Add(){

    const[name, setName] = useState("");
    const[age, setAge] = useState();
    const[dob, setDob] = useState();
    const[email, setEmail] = useState("");
    const[phnum, setPhNum] = useState("");
    const[insurance, setInsurance] = useState(false);

    let history = useNavigate();


      
    

    const handleSubmit = (e) => {
        e.preventDefault();

        const ids = uuid();
        let uniqueId = ids.slice(0,8);

        let a = name;
        let b = age;
        let c = dob;
        let d = email;
        let p = phnum;
        let i = insurance;

        if(p.length>10){
            alert("Phone Number should be less than 10 nos");
            return;
        }
        
        if (b>100) {
            alert("Invalid age");
            return;
          }
          
        if(!d.match(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g)){
            alert("Invalid email");
            return;
        }

       

        Employees.push({id: uniqueId, Name: a, Age: b, Dob: c, Email: d, PhNum: p, EligibleInsurance: i});

        history("/");
    }

    return <div>
        <Form className="d-grid gap-2" style={{margin: "15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" required onChange={(e) => setName(e.target.value)}>
                
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="number" placeholder="Enter Age" required onChange={(e) =>setAge(e.target.value)}>
                
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="date" placeholder="Enter DOB" required onChange={(e) => setDob(e.target.value)}>
                
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="email" placeholder="Enter Email-id" required onChange={(e) => setEmail(e.target.value)}>
                
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="number" placeholder="Enter PhNum"  value={phnum} maxLength="10"
                                         required onChange={(e) => setPhNum(e.target.value)}>
                
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
                <Form.Check type="checkbox" placeholder="insurance" required onChange={(e) => setInsurance(!insurance)}>
                
                </Form.Check>
            </Form.Group>
            <Button onClick={(e) => handleSubmit(e)} type="submit">Submit</Button>
        </Form>
        
    </div>;


    
}

export default Add;