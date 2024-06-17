import { useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const navigateTo = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;

    const userInfo = {
      email: email,
      password: password,
    };

    try {

      const res = await fetch("http://localhost:3000/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userInfo),
      });

      const data = await res.json();

      if (data.message === "Registration Successful") {
        alert("Registration Successful");
        navigateTo("/login");
      } else {
        alert("User Already exists");
      }
    }
      catch (error) {
      console.error('Error during fetch:', error);
      alert('An error occurred during registration');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <header>To-do list website</header>
      <br />
      <br />
      <br />
      <h1>Signup Page</h1>
      <p>Enter your credentials to register yourself to be able to store your to-do list here.</p>
      <br />
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="email" className="emailpassword">
            Email:
          </label>
          <input type="email" ref={emailRef}></input>
        </div>
        <br />
        <div>
          <label htmlFor="password">Password:</label>
          <input type="password" ref={passwordRef}></input>
        </div>
        <br />
        <button type="submit" >
          Sign Up
        </button>
      </form>
      <br />
      <br />
      <footer>
        <b>This website is created by Jatin</b> <br />
        <br />
        <a href="https://www.linkedin.com/in/jatin-parashar-1b1905222/">Linkedin</a> <br />
        <a href="https://twitter.com/jatinssh">Twitter</a>
      </footer>
    </>
  );
};

export default SignUp;
