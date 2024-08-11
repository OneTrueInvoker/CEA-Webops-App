import { useState } from 'react'

function ToDoList(){
    const [tasks, setTasks] = useState([]);
    const [newTask, setNewTask] = useState("")


    function handleInputChange(event){
        setNewTask(event.target.value);

    }

    function handleKeyDown(event) {
        if (event.key === 'Enter') {
            addTask();
        }
    }
    function  addTask(){
        if(newTask.trimEnd() !==""){
            setTasks(t=>[...t,newTask]);
            setNewTask("")
        }


    }
    
    function deleteTask(index){
        const updatedTasks = tasks.filter((_,i)=>i !==index);
        setTasks(updatedTasks);
    }

    function moveTaskUp(index){
        if(index>0){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index-1]]=
            [updatedTasks[index-1],updatedTasks[index]]
            setTasks(updatedTasks)
        }

    }
    function moveTaskDown(index){
        if(index<tasks.length-1){
            const updatedTasks = [...tasks];
            [updatedTasks[index],updatedTasks[index+1]]=
            [updatedTasks[index+1],updatedTasks[index]]
            setTasks(updatedTasks)
        }
    }
    function changeTask(index) {
        const newTask = prompt("Enter the new task:", tasks[index]);
        if (newTask !== null && newTask.trim() !== "") {
            const updatedTasks = [...tasks];
            updatedTasks[index] = newTask;
            setTasks(updatedTasks);
        }
        }
    

    return(<div className="to-do-list">
        <h1> To-Do-List</h1>
        <div>
            <input 
            type="text"
            placeholder='Enter a task...'
            value={newTask}
            onChange={handleInputChange}
            onKeyDown={handleKeyDown} />
            <button className='add-button'
            onClick={addTask}
            >
                ADD
            </button>
        
        </div>
        <ol>
            {tasks.map((task,index)=>
                <li key={index}>
                    <span className='text'>{task}</span>
                    <button
                        className='delete-button'
                        onClick={() =>deleteTask(index)}
                        
                    >
                        DELETE
                    </button>
                    
                    <button
                        className='move-button'
                        onClick={() =>moveTaskUp(index)}
                        
                    >
                        UP
                    </button>

                    <button
                        className='move-button'
                        onClick={() =>moveTaskDown(index)}
                    >
                        DOWN
                    </button>

                    <button
                        className="move-button"
                        onClick={() => changeTask(index)}
                    >
                        EDIT
                    </button>



                </li>)}
        </ol>
    </div>)

}

export default ToDoList
