import axios from "axios";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import { Form, Button } from "react-bootstrap";
import { ModalHeader, Modal, ModalBody } from "reactstrap";
import "./list.css";
function List() {
  const [employee, setEmployee] = useState([]);
  const [popup, setPopup] = useState(false);
  const [updateData, setUpdateData] = useState({
    fullName: "",
    email: "",
    mobile: "",
    city: "",
  });
  const [id, setID] = useState("");
  const fetchData = () => {
    axios.get("http://localhost:8080/read").then((res) => {
      setEmployee(res.data.employee);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  const handleEdit = async () => {
    await axios
      .put(`http://localhost:8080/update/${id}`, updateData)
      .then((res) => {
        fetchData();
      });
  };
  const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/delete/${id}`).then((res) => {
      console.log("ok");
      fetchData();
    });
  };
  return (
    <div className="mx-5 mt-2">
      <h1>Employees List</h1>
      <Modal size="lg" isOpen={popup} toggle={() => setPopup(!popup)}>
        <ModalHeader>Update Details Of employee</ModalHeader>
        <ModalBody>
          <Form className="mt-3">
            <Form.Group controlId="formBasicName">
              <Form.Label>Full Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your full name"
                onChange={(e) => {
                  setUpdateData({ ...updateData, fullName: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Email</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                onChange={(e) => {
                  setUpdateData({ ...updateData, email: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group>
              <Form.Label>Mobile No.</Form.Label>
              <Form.Control
                type="Number"
                placeholder="Enter your mobile number"
                onChange={(e) => {
                  setUpdateData({ ...updateData, mobile: e.target.value });
                }}
              />
            </Form.Group>
            <Form.Group controlId="formBasicCity">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your city"
                onChange={(e) => {
                  setUpdateData({ ...updateData, city: e.target.value });
                }}
              />
            </Form.Group>
            <Button
              variant="primary"
              className="mt-3"
              onClick={() => {
                handleEdit();
                setPopup(false);
              }}
            >
              Submit
            </Button>
          </Form>
        </ModalBody>
      </Modal>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Sr. no.</th>
            <th>Full Name</th>
            <th>Email</th>
            <th>Mobile Number</th>
            <th>City</th>
            <th>Edit / Delete</th>
          </tr>
        </thead>
        <tbody>
          {employee.map((item, index) => (
            <tr key={item._id}>
              <td>{index + 1}</td>
              <td>{item.fullName}</td>
              <td>{item.email}</td>
              <td>{item.mobile}</td>
              <td>{item.city}</td>
              <td>
                <button
                  onClick={() => {
                    setPopup(true);
                    setID(item._id);
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => {
                    handleDelete(item._id);
                  }}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}

export default List;
