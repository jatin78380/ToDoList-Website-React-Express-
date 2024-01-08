import { useNavigate } from 'react-router-dom';
const Home =()=>{
    const navigateTo = useNavigate(); 
    const navigate = useNavigate();
    
  const handleSignup = () => {
    navigateTo('/signup'); 
  }
  const handleLogin = () => {
    navigate('/login');}

    return <>
    <h1 id="hy"> Welcome to To-do list website</h1>
    <p id="store"> Store your to-do list which will be visible to just you!!</p>
    <button onClick={handleSignup}>Sign Up</button> <br></br> <br></br>
    <button onClick={handleLogin}>Login</button>  <br></br> <br></br>
    <footer> <b>This website is created by Jatin</b>  <br></br> <br></br>
    <a href="https://www.linkedin.com/in/jatin-parashar-1b1905222/">Linkedin</a> <br></br>
    <a href="https://twitter.com/jatinssh">Twitter</a>
    </footer>
    </>
}
export default Home;