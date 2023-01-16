import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import Employees from './Employees';
import { v4 as uuid } from "uuid";
import { Link, useNavigate } from 'react-router-dom';
import { useState } from "react";

function Edit() {
    const[name, setName] = useState("");
    const[age, setAge] = useState();
    const[dob, setDob] = useState();
    const[email, setEmail] = useState("");
    const[phnum, setPhNum] = useState("");
    const[insurance, setInsurance] = useState();
    const[id, setId] = useState("");

    let history = useNavigate();

    

    var index = Employees.map(function(e){
        return e.id
    }).indexOf(id);
   

    const handleUpdate = (e) => {

        e.preventDefault();

        let a = Employees[index];
        console.log(Employees[-1]);
        a.Name = name;
        a.Age = age;
        a.Dob = dob;
        a.Email = email;
        a.PhNum = phnum;
        a.EligibleInsurance = insurance;

        if(phnum.length>10){
            alert("Phone Number should be less than 10 nos");
            return;
        }

        history("/");
    }

    useEffect(() => {
        setName(localStorage.getItem('Name'))
        setAge(localStorage.getItem('Age'))
        setDob(localStorage.getItem('Dob'))
        setEmail(localStorage.getItem('Email'))
        setPhNum(localStorage.getItem('PhNum'))
        setInsurance(localStorage.getItem('EligibleInsurance'))
        setId(localStorage.getItem('Id'))
    },[])


    return(
        <div>
            <Form className="d-grid gap-2" style={{margin: "15rem"}}>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="text" placeholder="Enter Name" value={name} required onChange={(e) => setName(e.target.value)}>
                
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="number" placeholder="Enter Age" value={age} required onChange={(e) => setAge(e.target.value)}>
                
                </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="date" placeholder="Enter DOB" value={dob} required onChange={(e) => setDob(e.target.value)}>
                
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="email" placeholder="Enter Email-id" value={email} required onChange={(e) => setEmail(e.target.value)}>
                
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
                <Form.Control type="number" placeholder="Enter PhNum" value={phnum} required onChange={(e) => setPhNum(e.target.value)}>
                
                </Form.Control>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formName">
                <Form.Check type="checkbox" placeholder="insurance" defaultChecked={insurance} required onChange={(e) => setInsurance(!insurance)}>
                
                </Form.Check>
            </Form.Group>
            <Button onClick={(e) => handleUpdate(e)} type="submit">Update</Button>
        </Form>
        </div>
    )

}

export default Edit;