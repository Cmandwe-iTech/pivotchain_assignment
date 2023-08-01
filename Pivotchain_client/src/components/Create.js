import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
function Create() {
  const [employee, setEmployee] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });

  const navigate = useNavigate();
  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:8080/create", employee).then((res) => {
        navigate("/");
      });
    } catch (e) {
      console.log(e);
    }
  };
  console.log(employee);
  return (
    <Form className="mt-3">
      <Form.Group controlId="formBasicName">
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your full name"
          onChange={(e) => {
            setEmployee({ ...employee, fullName: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          onChange={(e) => {
            setEmployee({ ...employee, email: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group>
        <Form.Label>Mobile No.</Form.Label>
        <Form.Control
          type="Number"
          placeholder="Enter your mobile number"
          onChange={(e) => {
            setEmployee({ ...employee, mobile: e.target.value });
          }}
        />
      </Form.Group>
      <Form.Group controlId="formBasicCity">
        <Form.Label>City</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter your city"
          onChange={(e) => {
            setEmployee({ ...employee, city: e.target.value });
          }}
        />
      </Form.Group>
      <Button variant="primary" className="mt-3" onClick={handleSubmit}>
        Submit
      </Button>
    </Form>
  );
}

export default Create;
