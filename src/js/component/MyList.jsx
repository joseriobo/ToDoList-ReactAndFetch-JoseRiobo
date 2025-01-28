import React, { useState, useEffect } from "react";


const MyList = () => {
    const [inputValue, setInputValue] = useState('');
    const [listOfItems, setListOfItems] = useState([]);
   
   
    const updateTasks = async () => {
        const response = await fetch('https://playground.4geeks.com/todo/users/joseriobo' )
        console.log(response);  
        if(!response.ok){
            addUser()
        } else{
            const data = await response.json()
            console.log(data)
            setListOfItems(data.todos)
        }
        
    }

    useEffect(()=>{ 
        updateTasks()
        addUser()
    }, [])
  
    const addUser = async () =>{
        const response = await fetch('https://playground.4geeks.com/todo/users/joseriobo', {method: "POST"}         )
        console.log(response);  

    }

    const addTasks = async () =>{
        const response = await fetch('https://playground.4geeks.com/todo/todos/joseriobo', {
        method: "POST",
        body: JSON.stringify({
            "label": inputValue,
            "is_done": false
          }),
        headers: {
          "Content-Type": "application/json"
        }
    })
        const data = await response.json()
        addUser(data)  
    }

    const deleteTasks = async (id) => {
        const response = await fetch("https://playground.4geeks.com/todo/todos/"+id, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json"
        }
    })
        if(response.ok){
            updateTasks()
    
    }}

  
    return ( 
        <>
        <div className="myToDoBigList">
            <h1 className="listTitle">To Do List</h1>
            <div className="myForm">
            <form className="myToDoList fw-bolder">
                    <input className="toDoInput" type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} placeholder="No tasks, add a task"/>
                    <button onClick={inputValue.length > 0 ? addTasks : "" } className="addedItem">Add Task</button>
                    
            </form>   
            </div>
           <ul className="toDoList">
                    {listOfItems.map((items, index) =>
                    
                    <li className="toDo" key={index}><span className="toDoText">{items.label} </span> 
                    <button id="deleteTask" onClick={() => deleteTasks(items.id)} ><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
                </li> 
                    
                   )}
                  </ul>  
               
        </div>
                
    </>
    )}
         
export default MyList;
