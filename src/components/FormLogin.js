import React, { useState,useContext } from 'react';
import {Button, FormGroup,Label,Input,Form  } from 'reactstrap';
import { GlobalContext } from '../helper/GlobalState';
import {  Link,useNavigate} from 'react-router-dom';


export const FormLogin = () => {
    const[user,setUser]= useState({
        
        email:'',
        password:''  
      });
      
      const{ users}= useContext(GlobalContext);
      const navigate= useNavigate();

      const [errors, setErrors]=useState({});
      const onSubmit=(e)=>{
        e.preventDefault();
     const login={
         
         email:user.email,
         password:user.password
        }
        
  navigate('/userlist')
  
  }


  const onChange= e=>{
    const{name,value}=e.target
    setUser({...user,[name]:value});
  }
  




  return (



    <>
    <div className='d-flex justify-content-center'>  
 <Form  onSubmit={onSubmit}>
     <div><img src='../logo/Acelucid logo.png' alt='acelucid_logo'></img></div>
     <h5>Welcome back!! login below </h5>
    
       <FormGroup>
     <Label for='email'>
       Email
     </Label>
     <Input
        value={user.email}
        onChange={onChange}
       name='email'
       placeholder='Enter your email'
       type='email'
     />
      {errors.email &&<p>{errors.email}</p>}
   </FormGroup>
   <FormGroup>
     <Label for='password'>
       Password
     </Label>
     <Input
        value={user.password}
        onChange={onChange}
       name='password'
       placeholder='Enter your secure password'
       type='password'
     />
      {errors.password &&<p>{errors.password}</p>}
 </FormGroup>
 
   <Button  type='submit'className='btn btn-success'>
     LOGIN
   </Button><br/>
  <span>Don't have an account? <Link to='/'> Signup now!!
   
   </Link></span>
 </Form>
 </div>
</>
  )
};
