import { useState} from 'react';


export  function CreateTodo() {
  let nextId=0;
  const[title,setTitle]= useState("");
  const[date,setDate]=useState();
  const[projects,setProjects] = useState([]);
  const [description,setDescription]=useState("");
  const [completed,setCompleted]=useState(false);
 
  return (
    <div>
    <header> <h1> <b> Welcome to TO-do List Page, Enter your to-do list and store it here!</b> </h1></header>  <br></br><br></br><br></br><br></br> 

    <input style= {{
      padding:10,
      margin:10
    }}type="text"  placeholder="Enter the project title:"
   
    onChange={e=>setTitle(e.target.value) }/>
    <br>
    </br><br></br>

    <input type="text"  onChange={e =>setDescription(e.target.value)} placeholder="description:"/>
    <br></br> <br></br>
    
    <input type="date" 
    
    onChange={e=>setDate(e.target.value)}/>
    <br></br> <br></br>
    
    <button onClick={() => {
        fetch("http://localhost:3000/todo",{
          method:"POST",
          body:JSON.stringify({
            title,
            description,
            date,
            completed
          }),
          headers:{
            "Content-Type":"application/json"
          }
        })
        .then(async function(res) {
        const data = await res.json();
        setProjects([...projects,data])
        })

          alert("You added the new to-do!");
      }} >Add a todo </button>

      <h2 style={{color:'pink'}}> To-do lists are: </h2>
       {/* <ul>
        
      {projects.map(project => (
          <li  key={project.id}> {project.projecttitle} {project.description}  {project.completed} {project.date} </li>
        ))}
       
      </ul> */}
      <br></br> <br></br><br></br><br></br>
      <footer> <b>This website is created by Jatin</b>  <br></br> <br></br>
    <a href="https://www.linkedin.com/in/jatin-parashar-1b1905222/">Linkedin</a> <br></br>
    <a href="https://twitter.com/jatinssh">Twitter</a>
    </footer>
    
    </div>
  );
}


    
