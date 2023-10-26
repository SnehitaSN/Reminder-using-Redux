const Redux = require("redux")

//initial state
const initialData = {
  allTasks : ["Eating","Dancing"]
}

//Action
export function addTask(task) //task=playing
{
    return{
        type: "ADD_TASK",
        payload:task
    }
}

// //Action ={
//     type:"ADD_TASK",
//     payload:task
// }
//Reducer/Shopkeeper
const myReducer = (state = initialData,action)=>{
  

    if(action.type === "ADD_TASK"){
        //logic to add the task to the reducer

        return{
          allTasks:[...state.allTasks,action.payload]
        }
    }
return state
}

//Combining reducers
const totalReducer = Redux.combineReducers({
    myReducer:myReducer
})

//create redux store

export const myStore = Redux.createStore(totalReducer)