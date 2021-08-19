import React,{ useContext,useState } from 'react'
import { EmployeeContext } from '../context/EmployeeContext'
import { Form, FormGroup,Button } from 'react-bootstrap'
 
const AddForm = () => {


  const { addEmployee } = useContext(EmployeeContext)

  // const [name, setName] = useState("");
  // const [email, setEmail] = useState("");
  // const [address, setAddress] = useState("");
  // const [phone, setPhone] = useState("");

  const [newEmploye, setNewEmploye] = useState({
    name: "", email: "", address:"", phone: ""
  })

  const {name, email,address, phone} = newEmploye;

  const onInputChange = (e) => {
    setNewEmploye({...newEmploye, [e.target.name]: e.target.value})
  }

  const handleSubmit = (e) =>{
    e.preventDefault();
    addEmployee(name, email, address, phone)
  }

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Form.Control 
          type="text"
          placeholer="Name *"
          name="name"
          value={name}
          onChange={e => onInputChange(e)}
          required
      />
      </FormGroup>
      <FormGroup>
        <Form.Control 
          type="email"
          placeholer="Email *"
          name="email"
          value={email}
          onChange={e => onInputChange(e)}
          required
      />
      </FormGroup>
      <FormGroup>
        <Form.Control 
          as="textarea"
          placeholer="Address"
          name="address"
          value={address}
          onChange={e => onInputChange(e)}
          rows={3}
      />
      </FormGroup>
      <FormGroup>
        <Form.Control 
          type="text"
          placeholer="Phone"
          name="phone"
          value={phone}
          onChange={e => onInputChange(e)}
      />
      </FormGroup>

      <Button variant="success" type="submit" block>
        Add New Employee
      </Button>
    </Form>
  )
}

export default AddForm
