import React from 'react'
import { Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <div>
         <Nav className='mt-5 offset-4'
                activeKey="/home"
                onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
                >
                <Nav.Item>
                    <NavLink to="/">Home </NavLink>
                </Nav.Item> &nbsp; &nbsp;
               
                <Nav.Item>
                    <NavLink to="/Login">Login  </NavLink>
                </Nav.Item> &nbsp; &nbsp;
                <Nav.Item>
                     <NavLink to="/Register">Register </NavLink>
                </Nav.Item> &nbsp; &nbsp;
                <Nav.Item>
                
                <NavLink to="/get_students">Get Students</NavLink>
                </Nav.Item>
                
           </Nav>




    </div>
  )
}
