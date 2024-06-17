import {useRef} from 'react';
import { useNavigate } from 'react-router-dom';
const Login =()=> {
    const navigateTo = useNavigate();
    const emailRef = useRef();
    const passwordRef = useRef();

    const handleSubmit=async(event)=>{
        event.preventDefault();
        const email=emailRef.current.value;
        const password = passwordRef.current.value;
        const userInfo={
            email:email,
            password:password
        }
        const res= await fetch("http://localhost:3000/login", {
            method:"POST", 
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(userInfo)
        });
        const data = await res.json();
        if(data.message==="User Found in the database"){
            alert("Login Successful")
            navigateTo('/todo');
        }
        else{
            alert("Please Check your credentials again!!")
        }
    }
    return <>
    <header> To-do list website</header>
    <h1>Login Page</h1>
    <p id="heading"> <b>Enter your email and password in the text box and then start entering your to-do list!</b> </p> <br></br>

    <form onSubmit={handleSubmit}>
      
        <label htmlFor="email" > Email: </label>
       <input type="email" ref={emailRef} ></input>
           
            <br></br>
            
              <label htmlFor="password" > Password: </label>
              <input type="password" ref={passwordRef} ></input>
            
         <br></br> <br></br>
      <button type="submit">Submit</button>
    </form> <br></br><br></br>

    <footer> <b>This website is created by Jatin</b>  <br></br> <br></br>
    <a href="https://www.linkedin.com/in/jatin-parashar-1b1905222/">Linkedin</a> <br></br>
    <a href="https://twitter.com/jatinssh">Twitter</a>
    </footer>
    </>
}
export default Login;