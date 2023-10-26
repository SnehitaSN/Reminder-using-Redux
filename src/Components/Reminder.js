import React from "react";
import { addTask } from "../redux.js";
import { useDispatch, useSelector } from "react-redux";

function Reminder() {
  const output = useSelector(function (data) {
    return data.myReducer.allTasks;
  });
  console.log(output);

  // const [tasks, setTasks] = React.useState(["Eating", "Dancing"]);
  const [myTask, setMyTask] = React.useState("");

  const dispatch = useDispatch();

  //mytask=playing

  function collectIt(event) {
    setMyTask(event.target.value);
  }

  function submitData() {
    // setTasks([...tasks,myTask])
    dispatch(addTask(myTask));
  }
  return (
    <div>
      <input type="text" onChange={collectIt} />
      <button onClick={submitData}>Submit</button>

      <div>
        {output.map(function (task) {
          return <li>{task}</li>;
        })}
      </div>

      {/* <div>
        {tasks.map(function(i){
            return <li>{i}</li>
        })}
      </div> */}
    </div>
  );
}

export default Reminder;
