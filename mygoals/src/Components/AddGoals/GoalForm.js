import { Fragment, useEffect, useState } from "react";
import  './GoalForm.css'
import ErrorModal from "../UI/ErrorModal";
const GoalForm=({enteredInput,setEnteredInput,enteredGoal,setEnteredGoal,editGoal,setEditGoal})=>{
    const[error,setError]=useState('')
    const updateGoal=(title,id,completed)=>{
        const newGoal=enteredGoal.map((goal)=>
            goal.id === id ? {title,id,completed} : goal
        );
        setEnteredGoal(newGoal);
        setEditGoal('');
    };
    useEffect(()=>{
        if(editGoal){
            setEnteredInput(editGoal.title);
        }
        else{
            setEnteredInput("");
        }
    },[setEnteredInput,editGoal]
    )
    const inputChangeHandler=(event)=>{
        setEnteredInput(event.target.value);
    }
    const submitHandler=(event)=>{
        event.preventDefault();
        if(enteredInput.trim().length===0 ){
            setError({
                title:"invalid input !",
                message:"Please fill the Input field"
            })
            return;
        }
        if(!editGoal){
            setEnteredGoal([...enteredGoal,
                {id:Math.random().toString(),
                 title:enteredInput,
                 completed:false
            }])
            setEnteredInput("");
        }
       else{
           updateGoal(enteredInput,editGoal.id,editGoal.completed);
       }
    }
    const errorHandler=()=>{
        setError('')
        setEnteredInput('')
    }
    return(
        <Fragment>
        {error&&<ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}></ErrorModal>}
        <div className="new-goal">
            <h1 className="goal-title">My Goals</h1>
         <form onSubmit={submitHandler} className="new-goal-controls">
             <input type="text" value={enteredInput} placeholder="Enter Goal" onChange={inputChangeHandler}/>  
             <button type="submit">{editGoal?"Ok" : "Add Goal"}</button>
             
        </form>
        </div>
        </Fragment>
    )
}
export default GoalForm