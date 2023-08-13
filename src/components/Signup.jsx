
import React from 'react'
import {FaGoogle,FaFacebook,FaInstagram} from 'react-icons/fa';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

const Signup = () => {
  return (
    <div className='login__container'>
        
<Form className='form__container'>
<h2 className='form__title'>Sign Up</h2>              

      <Form.Group className="mb-3 input__field" controlId="exampleForm.ControlInput1">
        <Form.Label className='input__title'>Email</Form.Label>
        <br />
        <Form.Control type="email" placeholder="Enter Your Email" />
      </Form.Group>
      <hr/>
      <Form.Group className="input__field">
       
        <Form.Label className='input__title'>Password</Form.Label>
        <br />
        <Form.Control type="password" placeholder="Enter Your Password" />
      </Form.Group>    
      <hr />
      <br />
      <Button className='btn btn__primary'>
       Sign Up
      </Button>

      <div >
        <div className='form__footer'>
        <h5>Already have an account?
         <a href="/login" >Login</a>
         </h5>
        </div>
         
         <h5 style={{textAlign:"center"}}>Or</h5>
      <div>
        <div className='icons'>
       <span className='icon'>  <FaGoogle/></span> 
        <span className='icon'><FaFacebook /> </span>
        <span className='icon'> <FaInstagram/></span>
        </div>
         </div>
       </div>

      
    </Form>
      
    </div>
  )
}

export default Signup

