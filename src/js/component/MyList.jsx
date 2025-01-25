import React, { useState } from "react";


const MyList = () => {
    const [inputValue, setInputValue] = useState('');
    const [listOfItems, setListOfItems] = useState([]);

    const addIt = (event) => {
        event.preventDefault();
        if(inputValue.trim() !== ""){
        setListOfItems([...listOfItems, inputValue]); 
        setInputValue("");
        }
    };
    const deleteTask =(index) =>{
        const updatedList = listOfItems.filter((element, item) => item !== index);
        setListOfItems(updatedList);
    }
    console.log(listOfItems);
    return ( 
        <>
        <div className="myToDoBigList">
            <h1 className="listTitle">To Do List</h1>
            <div className="myForm">
            <form className="myToDoList fw-bolder">
                    <input className="toDoInput" type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} placeholder="No tasks, add a task"/>
                    <button onClick={addIt} className="addedItem">Add Task</button>
            </form>    
            </div>
           <ul className="toDoList">
                    {listOfItems.map((item, index) =>
                    
                    <li className="toDo" key={index}>
                    
                   
                    <span className="toDoText" id={`toDo-${index}`}> {item}  </span>
                    
                    <button id="deleteTask" onClick={()=> deleteTask(index)}><svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path d="M280-120q-33 0-56.5-23.5T200-200v-520h-40v-80h200v-40h240v40h200v80h-40v520q0 33-23.5 56.5T680-120H280Zm400-600H280v520h400v-520ZM360-280h80v-360h-80v360Zm160 0h80v-360h-80v360ZM280-720v520-520Z"/></svg></button>
                </li>)}
                </ul>  
        </div>
                
    </>
    )
}
         
export default MyList;
