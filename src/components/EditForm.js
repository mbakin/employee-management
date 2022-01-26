import React,{ useContext,useState } from 'react'
import { EmployeeContext } from '../context/EmployeeContext'
import { Form, FormGroup,Button } from 'react-bootstrap'
 
const EditForm = ({theEmployee}) => {


  const { updateEmployee } = useContext(EmployeeContext)

  const employee = theEmployee;
  const id = employee.id;

  const [name, setName] = useState(employee.name);
  const [email, setEmail] = useState(employee.email);
  const [address, setAddress] = useState(employee.address);
  const [phone, setPhone] = useState(employee.phone);

  const updatedEmployee = {id, name, email, address, phone};

  const handleSubmit = (e) => {
    e.preventDefault();
    updateEmployee(id, updatedEmployee)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Form.Control 
          type="text"
          placeholder="Full name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
      />
      </FormGroup>
      <FormGroup>
        <Form.Control 
          type="email"
          placeholder="Email address"
          name="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
      />
      </FormGroup>
      <FormGroup>
        <Form.Control 
          as="textarea"
          placeholder="Address"
          name="address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          rows={3}
      />
      </FormGroup>
      <FormGroup>
        <Form.Control 
          type="text"
          placeholder="Phone number"
          name="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
      />
      </FormGroup>

      <Button variant="success" type="submit" block>
        Update Employee
      </Button>
    </Form>
  )
}

export default EditForm
