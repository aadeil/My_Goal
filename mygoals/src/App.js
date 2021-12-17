import React,{Fragment, useState} from 'react';
import GoalForm from './Components/AddGoals/GoalForm';
import Goals from './Components/Goals/Goals';
function App() {
  const [enteredInput,setEnteredInput]=useState('')
  const [enteredGoal,setEnteredGoal]=useState([])
  const [editGoal,setEditGoal]=useState(null)
  
  return (
    <Fragment>
    <GoalForm enteredInput={enteredInput} setEnteredInput={setEnteredInput} enteredGoal={enteredGoal} setEnteredGoal={setEnteredGoal} editGoal={editGoal} setEditGoal={setEditGoal}/>
    <Goals enteredGoal={enteredGoal} setEnteredGoal={setEnteredGoal} setEditGoal={setEditGoal}/>
    </Fragment>
  );
}

export default App;
