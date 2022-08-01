import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Get_student from '../Get_student';
//rfc
export default function Edit() {
    //sate
    const [student,setStudent] = useState({
        data:{
            attributes:{
                name:''
            }
        }
      });

    let params =useParams();


     
    useEffect(()=>{
        console.log('page loaded successfully');
        getStudent(params.stu_id);

    },[]);
    //function
    let getStudent = (student_id=1)=>{
        // console.log(config.base_url);
         console.log('good morning')
         
         try {
             
             fetch(`http://localhost:1337/api/siblings/`+ student_id)
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
    
       let handleChange=(e)=>{
           console.log('hello',e.target.value);
           setStudent({
               ...student,
               data:{
                   attributes:{
                       name:e.target.value
                   }
               }

           })
       }

       let submitStudent=(e)=>{
           e.preventDefault();
           console.log('submitted');
           

       }

    //retrun
  return (
   <>  
    <div>Edit page {params.stu_id}</div>

    <form onSubmit={(e)=>{submitStudent(e)}}>
                <label>Enter your name:
                <input 
                    type="text" 
                    name="friend_name" 
                    value={ student.data.attributes.name }
                   onChange={ (e)=>{ handleChange(e) } }
                />
                </label>
                <input type="submit" />
            </form>
    
    </>
  )
}
