import { useState} from 'react';
let nextId=0;
export default function TodoList() {
  const[projectname,setProjectname]= useState("Enter the project details: ");
  const[date,setDate]=useState("Enter the last date:");
  const[projects,setProjects] = useState([]);
  return (
    <>
    <header> <h1> <b> Welcome to TO-do List Page, Enter your to-do list and store it here!</b> </h1></header>  <br></br><br></br><br></br><br></br> 
    <label htmlFor="projectName"> Project Name: </label>
    <input type="text" 
    value={projectname}
    onChange={e=>setProjectname(e.target.value) }/>
    <br>
    </br><br></br>

    <label htmlFor="lastdate">Enter the deadline  of the project: </label>
    <input type="text"
    value={date}
    onChange={e=>setDate(e.target.value)}/>
    <br></br> <br></br>
    
    <button onClick={() => {
        setProjects([
          ...projects,
          { id: nextId++, projectname:projectname,date:date },
          ]);
          alert("You added the new to-do!");
      }}>Add</button>

      <h2> To-do lists are: </h2>
       <ol>
      {projects.map(project => (
          <li key={project.id}> {project.projectname}   {project.date}</li>
        ))}
      </ol>
      <br></br> <br></br><br></br><br></br>
      <footer> <b>This website is created by Jatin</b>  <br></br> <br></br>
    <a href="https://www.linkedin.com/in/jatin-parashar-1b1905222/">Linkedin</a> <br></br>
    <a href="https://twitter.com/jatinssh">Twitter</a>
    </footer>
    
    </>
  );
}


    
