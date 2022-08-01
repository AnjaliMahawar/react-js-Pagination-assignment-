import React from 'react'
import Footer from './Footer'
import Header from './Header'

export default function Layout(props) {
  return (
      <>
         <Header/>
             <hr/>
             <hr/>
             <br/>
              
          
              {props.children}


              <hr/>
             <hr/>
             <br/>


         <Footer/>
      
      </>
    
  )
}
