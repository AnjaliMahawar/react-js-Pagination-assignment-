import React, { useEffect, useState } from 'react'
import { Button, Form, Modal, Table } from 'react-bootstrap';
import { NavLink, useParams } from 'react-router-dom'
import swal from 'sweetalert';
import Layout from './componentes/Layout'
//import Layout from '../componentes/Layout'
//const config = require('./config.json')


export default function Get_student() {
    //state 
    const [student,setStudent] = useState({
      data:[]
    });//Empty Array
    const [show,setShow] = useState(false);
    const [name,setName] = useState('');
    const [id,setId] = useState('');
    let param = useParams()
    
    //function 
    useEffect(()=>{
      console.log('pageloaded successfully');
      getStudents();
    },[]); 
    
    // without array our application will render
    let getStudents = (pageno=1)=>{
     // console.log(config.base_url);
      console.log('good morning')
      
      try {
          
          fetch(`http://localhost:1337/api/siblings/?pagination[page]=${pageno}&pagination[pageSize]=10`)
          .then((data)=>{
            
            return data.json();//its make data readable
          }).then((data)=>{
            console.log(data);
            
            setStudent(data);
          
          
            
          }).catch((err)=>{
            console.log(err);
          });
      } catch (error) {
        console.log(error)
      }
    }

    let submitStudent = (e)=>{
      e.preventDefault();

      //setIsLoading(true);
      //setIsSubmitted('disabled');

      console.log('submitted');

      ///api/friends/:id
      let data = {  //JSON Javascript Object Notation
          "data": {
            "name": name
          }
      };

      // With the help of fetch ap/i i have to make PUT Request
      fetch(`http://localhost:1337/api/siblings/`+ id,{
          method:"PUT",
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
      })
      .then((data)=>{
          //let make data json readable
          return data.json();
      }).then((data)=>{
          console.log(data);
          //setIsLoading(false);
          //setIsSubmitted('');
          swal("Good job!", "Friend Updated Successfully", "success");
          window.location.reload('/');


      }).catch((err)=>{
          console.log(err);
      });
  }
   let handleShow2=()=>{
     
   }
   let handleShow=(e)=>{
    //alert('hshfe')
    
    let n =e.target.closest('tr').querySelector('td:nth-child(2)').innerHTML;
    let id = e.target.closest('tr').querySelector('td:nth-child(1)').innerHTML;
    setId(id);
    setName(n);
    console.log(e.target.closest('tr').querySelector('td:nth-child(2)').innerHTML);
    
    setShow(true);
   }
   let handleClose=()=>{
       setShow(false);
   }
//retrun
    
  return (
    <Layout>
        <Modal size="lg" show={show} >
        <Modal.Header closeButton>
           <Modal.Title>Edit student</Modal.Title>
        </Modal.Header>
        <Modal.Body>

        <Form onSubmit={(e)=>{ submitStudent(e); }}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Edit Friend</Form.Label>
              <Form.Control name='friend_name' value={name}  onChange={(e)=>{ setName(e.target.value) }}  type="text" placeholder="Enter Name" />
             
            </Form.Group>
            <button type="submit" className="btn btn-primary">Submit</button>
            
       </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    <h1>GetStudent {param.stu_id} {param.id} </h1>
    <h1 className="d-flex justify-content-center">Read Operation with Pagination</h1>
    <div className="d-flex justify-content-center">
        <Button onClick={(e)=>{ getStudents() }}>Get My Friends</Button>
    </div>

    <br />
    <br />
        {
        student.data.length > 0 &&
        <React.Fragment>
            <Table striped bordered hover>
            <thead>
                <tr>
                <th>#</th>
                <th>Friend Name</th>
                <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {
                student.data.map(function(currentValue, index, arr){
                    console.log(arr[index].id);
                    console.log(arr[index].attributes.name);
                    return (
                        <tr key={index}>
                        <td>{arr[index].id}</td>
                        <td>{arr[index].attributes.name}</td>
                        <td>
                            <Button variant="success" size="sm" onClick={()=>{handleShow2()}}>View</Button>&nbsp;
                            <NavLink to={`/edit_student/${arr[index].id}`} variant="primary" size="sm">Edit</NavLink>&nbsp;
                            <Button variant="primary" onClick={(e)=>{handleShow(e)}}>
                               Edit with modal
                              </Button>&nbsp;
                            <Button variant="danger" size="sm">Delete</Button>
                        </td>
                        </tr>
                    )//JSX
                })
                 }


            </tbody>
            </Table>

        </React.Fragment>
    }
</Layout>

  )
}
