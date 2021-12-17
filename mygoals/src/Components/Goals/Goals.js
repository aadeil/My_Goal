import './Goals.css'
const Goals=({enteredGoal,setEnteredGoal,setEditGoal})=>{
    const goalDeleteHandler=({id})=>{
        setEnteredGoal(enteredGoal.filter((goal)=>goal.id !== id));
    }

    const goalCompleteHandler=(goal)=>{
        setEnteredGoal(enteredGoal.map((item)=>{
            if(item.id===goal.id){
                return{...item,
                    completed:!item.completed}
            }
            return item;
        }))
    }

    const goalEditHandler=({id})=>{
        const Goal=enteredGoal.find((goal)=>goal.id===id);
        setEditGoal(Goal)
    }

    return(
        <div>
            {enteredGoal.map((goal)=><div className='goals' key={goal.id}>
            <div className='goal-description'>
                <div>
                <button className='goal-action-button' onClick={()=>goalCompleteHandler(goal)}><i class="fa fa-check" aria-hidden="true"></i></button>
                </div>
                <div>
                     <h2 className={`${goal.completed ? "goal-complete" : ""}`}  onChange={(event)=>event.preventDefault()}>{goal.title}
                     </h2>
                     </div>
                     </div>
                        <div className='action-buttons'>
                        <button className='goal-action-button' onClick={()=>goalDeleteHandler(goal)}><i class="fa fa-trash"></i> </button>
                        <button className='goal-action-button' onClick={()=>goalEditHandler(goal)}> <i class='fa fa-edit'></i></button>
                        </div>
                        </div>
                        )}

                        </div>
                        )
                        }
export default Goals