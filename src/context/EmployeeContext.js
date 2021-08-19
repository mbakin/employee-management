import { useEffect } from "react";
import { createContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';


export const EmployeeContext = createContext();


const EmployeeContextProvider = (props) => {

  const [employees, setEmployees] = useState([
    // {id:uuidv4(),name:"x", email:"x@hotmail.com", address: "Izmir", phone:"(541) 920-45-73"},
    // {id:uuidv4(),name:"q", email:"q@hotmail.com", address: "Istanbul", phone:"(531) 920-45-73"},
    // {id:uuidv4(),name:"w", email:"w@hotmail.com", address: "Canakkale", phone:"(521) 920-45-73"},
    // {id:uuidv4(),name:"e", email:"e@hotmail.com", address: "Antalya", phone:"(511) 920-45-73"},
  ])

  useEffect(() => {
    const employees = localStorage.getItem("employees")
    setEmployees(JSON.parse(employees))
  },[])

  useEffect(() => {
    localStorage.setItem("employees",JSON.stringify(employees))
  })

  const sortedEmployees = employees.sort((a,b) => (a.name < b.name ? -1 : 1))

  const addEmployee = (name,email,address,phone) => {
    setEmployees([...employees, {id:uuidv4(), name,email,address,phone}])
  }

  const deleteEmployee = (id) => {
    setEmployees(employees.filter(employee => employee.id !== id))
  }

  const updateEmployee = (id, updatedEmployee) => {
    setEmployees(employees.map((employee) =>(employee.id === id ? updatedEmployee : employee)))
  }

  return(
    <EmployeeContext.Provider value={{sortedEmployees, addEmployee, deleteEmployee, updateEmployee}}>
      {props.children}
    </EmployeeContext.Provider>
  )
}

export default EmployeeContextProvider