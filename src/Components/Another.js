import React from 'react'
import { useSelector } from 'react-redux'

function Another() {
    const output = useSelector(function(data)
    {
      return data.myReducer.allTasks
    })
    console.log(output)
  return (
    <div>
        {
          output.map(function(task){
            return <li>{task}</li>
          })
        }
      </div>
  )
}

export default Another