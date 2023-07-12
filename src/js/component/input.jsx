import React, {useState} from "react";
import TestInput from "./testInput.jsx";

const Input = () => {
    const [data, setData] = useState("")
    const [toDo, setToDo] = useState([])
    const toDoCounter = toDo.length

    const handleChange = (event) => {console.log(data)
    setData(event.target.value)
    }
    const handleKeyDown = (event) => {
        console.log(event.key)
        if (event.key == "Enter" && data.length != ""){
            setData("")
            setToDo((prev) => {
                return [...prev , data];
            })
        }
    }
    return (
        <div className="container justify-content-center align-items-center vh-100 vw-50">
            <h1 className="text-light confortaa">2Do´s</h1>
{/*input start*/}
            <TestInput 
            data={data} 
            handleChange={handleChange} 
            handleKeyDown={handleKeyDown}
            /> 
{/*input end*/}
            <div className="container text-light container task">
                <ul>
                    {toDo.map((item, index) => {
                        return (
                            <div key={index}className="d-flex justify-content-between item">
                                <li  className="confortaa" key={index}>{item}</li>
                                <i className="fa-regular fa-trash-can trash"
                                    onClick={(event) => {
                                        const newToDo = toDo.filter((filterItem, filterIndex) => {
                                            // return filterIndex != index (it the same)
                                            if (filterIndex == index){
                                                return false;
                                            } 
                                            return true;  
                                        })   
                                        setToDo(newToDo)
                                    }}
                                    ></i>
                            </div>
                        )
                    }
                    )}
                </ul>
            </div>
            <p className="text-light confortaa">
                {
                (toDoCounter == 0 ? "No tasks, add a task" : toDoCounter == 1 ? toDoCounter + " item left" : toDoCounter + " items left")
                }
                </p>
        </div>
    );
};

export default Input;