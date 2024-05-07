import React,{useState} from "react"
import "../Components/index.css"


function Todolist(){
const[task,settask] = useState(["Eat breakfast","taske a shower","walk the dog"]);
const[newtask,setnewtask] = useState("");

function handleinputchange(event){

    setnewtask(event.target.value);


}

function addtask(){

    if(newtask.trim !==""){
settask(t=>[...t,newtask])
setnewtask("")
    }
}

function deletetask(index){

    const updatedtask = task.filter((_,i)  => i !== index)
settask(updatedtask)

}

function movetaskup(index){
if(index > 0){

    const updatedtasks = [...task];

    [updatedtasks[index],updatedtasks[index-1]] = [updatedtasks[index-1],updatedtasks[index]]

    settask(updatedtasks)
}



}

function movetaskdown(index){

    if(index < task.length - 1){

        const updatedtasks = [...task];
    
        [updatedtasks[index],updatedtasks[index+1]] = [updatedtasks[index+1],updatedtasks[index]]
    
        settask(updatedtasks)
}
}
  
return(
    
    <div className="todolist">
        <h1>
           To-Do-List 
        </h1>

        <div>
            <input type="text" placeholder="Enter a Task ..." value={newtask} onChange={handleinputchange} /> 
            <button className="addbutton" onClick={addtask} >Add</button>
            </div>
<ol>
    {
task.map((task,index)=>
<li key={index}>

    <span className="text">{task}</span>
    <button className="deletebutton" onClick={()=>deletetask(index)}>Delete</button>
   
    <button className="movebutton" onClick={()=>movetaskup(index)}>⬆️</button>

    <button className="movebutton" onClick={()=>movetaskdown(index)}>⬇️
    </button>
</li>
)

    }
</ol>
           
    </div>
)

}

export default  Todolist