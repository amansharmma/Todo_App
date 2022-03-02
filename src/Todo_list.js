import React, {useState} from 'react'
import './Todo.css';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Card from "react-bootstrap/Card";

const Todo_list = () => {
    const [inputData, setInputData] = useState({name: "", task: ""});
    const [items, setItems] = useState([]);
    const [toggleSubmit, setToggleSubmit ] = useState(true);
    const [isEditItem, setIsEditItem] = useState(null);

    const addItem = () => {
        if ((inputData.name === "")&&(inputData.task === "")){
            console.log(inputData)
            alert("fill the data")

        } else if(inputData && !toggleSubmit) {
            setItems(items.map((elem, ind) => {
                if (ind === isEditItem){
                    return { ...elem, name: inputData.name, task: inputData.task }
                }
                return elem
            }))

            setToggleSubmit(true);
            setInputData({name: "", task: ""}); 
            setIsEditItem(null)
        }
        else{
            setItems([...items,inputData]);
            setInputData({name: "", task: ""})      
    }}

    const deleteItem = (id) => {
        
        const rest = items.filter((elem,ind) => {
            return ind !== id;
        });

        setItems(rest);
    }

    const editItem = (id) => {
        const newEditItem = items.find((elem, ind) => {
            return ind === id;
        });

        console.log(newEditItem);
        setInputData({name: newEditItem.name, task: newEditItem.task}); 
        setToggleSubmit(false);
        setIsEditItem(id)

    }

    const delAll = () =>{
        setItems([]);
    }

    return (
        <>
        <div>
            <h1>Person Menager</h1>
            <h5>This is my task</h5>
            <div className = "inp">
             <input type = "text" placeholder = "your name" className = "inp"
            value = {inputData.name} 
            onChange = {(e) => setInputData({...inputData, name: e.target.value})} /><br></br>
             <input placeholder = "your task"  className = "rock"
             value = {inputData.task} 
             onChange = {(e) => setInputData({...inputData, task : e.target.value})}/><br></br>
             { 
                toggleSubmit ? <button title = "Add-item"  onClick = {addItem}>Add Task</button> : 
                <button title = "Update-item" className = "upd-btn" onClick = {addItem}>Update Item</button>
                }
             {/* <button title = "Add-item" onClick = {addItem}>add Item</button> */}
             
             <div className = "rcorners1">
    
                {
                    items.map((elem,ind) => {
                        return (
                            <>
                            
                            <Card className = "small_card">{
                                <div key = {ind} className = "small" >
                                    <div className = "marge">
                                        <h3>Name = {elem.name}</h3>
                                        <h3>Task = {elem.task}</h3>
                                        {/* <h3>ID = {ind}</h3> */}
                                        <button title = "delete-item" className = "del-btn" onClick = {() => deleteItem(ind) }> Delete </button>
                                        <button title = "Update-item" className = "upd-btn" onClick = {() => editItem(ind) }> Update </button>
                                    </div>
                                </div>
                                }</Card>
                            
                            </>
                        )
                    })  
                }
                <button title = "delete-item" className = "del-btn" onClick = {delAll }> Delete All</button>
             </div>
             
            </div>
        </div>
        </>
    )
}

export default Todo_list

