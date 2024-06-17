export function Todos({todos}) {
  return (
    <div>
     {todos.map((todo) => {
        return <div>
        <h1>{todo.title}</h1>
        <p>{todo.description}</p>
        <button>{todo.completed ? 'Completed' : 'Not Completed'}</button>
       </div>

     }
     )}   
     </div>
     )

}