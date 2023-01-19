import React, { ChangeEvent } from 'react';
import { useState } from 'react';

const TodoListBasic = () => {
    const [task, setTask] = useState('');
    const [state, setState] = useState('');
    const [itemsToDo, setItemsToDo]:any = useState([]);
    const [itemsInProgress, setItemsInProgress]:any = useState([]);
    const [itemsDone, setItemsDone]:any = useState([]);

    let nextId = 0;

    const change = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTask(e.target.value);
    }
    
    const handleSelect = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setState(event.target.value);
    }

    return (
    <div className='TodoListBasic' style={{position: "absolute"}}>
        <div style={{margin: "20px"}}>
    <input onChange={change} value = {task}/>
    <select onChange={handleSelect}>
        <option>Choose status</option>
        <option>To do</option>
        <option>In progress</option>
        <option>Done</option>
    </select>
    <button onClick={() => {
        setTask('');
        if(state == 'To do'){
        setItemsToDo([...itemsToDo,{ id: nextId++, task: task }]);
        }
        if(state == 'In progress'){
            setItemsInProgress([...itemsInProgress,{ id: nextId++, task: task }]);
        }
        if(state == 'Done'){
            setItemsDone([...itemsDone,{ id: nextId++, task: task }]);
        }
        }}>
        Add</button>
        </div>
      <ul style={{display: "inline-block", marginLeft: "1%", position: "fixed"}}>
        <h1 style={{fontSize: "25px"}}>To do</h1>
        {itemsToDo.map((item: any) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
      <ul style={{display: "inline-block", marginLeft: "10%", position: "fixed"}}>
        <h1 style={{fontSize: "25px"}}>In Progress</h1>
        {itemsInProgress.map((item: any) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
      <ul style={{display: "inline-block", marginLeft: "22%", position: "fixed"}}>
        <h1 style={{fontSize: "25px"}}>Done</h1>
        {itemsDone.map((item: any) => (
          <li key={item.id}>{item.task}</li>
        ))}
      </ul>
    </div>
    )
    }

export default TodoListBasic;
