import React ,{useState}from 'react';
import './App.css';

function App() {
  const[ToDos,setToDos]=useState([])
  const[ToDo,setToDo]=useState('')
  const val=0

 const add= (todo,edited)=>{
  if( !todo ){
   

  }else{  
   const update=ToDos.find((i)=>i.text ===todo)
if(!update){
    
  setToDos([...ToDos,{Id:Date.now(),text:ToDo,status:false,edited:null}])
  setToDo('')}}}
 
 

 
  const deleteTodo = (id) => {
    const updatedToDos = ToDos.filter((todo) => todo.Id !== id);
    setToDos(updatedToDos); 
  };
    const editone=(id)=>{
    
      const work = ToDos.find((todo) => todo.Id == id);
      work.edited='true';
      setToDo(work.text,work.edited )
      const updatedToDos = ToDos.filter((todo) => todo.Id !== id);
    setToDos(updatedToDos); 
   


    }

  return (
    <div className="app">
      <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2>My works</h2>
      </div>
      <div className="input">
        <input value={ToDo} onChange={(e)=>setToDo(e.target.value)} type="text"  placeholder="add works" />
        <button className='button' onClick={()=>add(ToDo)} >Add</button>
      </div>

{ToDos.map((val) =>{
  return(
      <div className="todos">
        <div className="todo">
          <div className="left">
            <input onChange={(e)=>{
             val.status=!val.status
             console.log(val)
            }}value={val} type="checkbox"  />
            <p>{val.text }</p>
          </div>
          <div className="right">
            <button onClick={()=>deleteTodo(val.Id) }className='button' > delete</button>
            
            <button className='button' onClick={()=>editone(val.Id)} >edit</button>
          </div>
        </div>
      </div>)})}

      
    </div>
  );
}

export default App;
