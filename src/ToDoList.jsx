import React, { useState } from 'react'

const ToDoList = () => {
    const [activity,setActivity] = useState("");
    const [listData,setListData] = useState([]);

    function addActivity(){
        setListData((listData)=>{
            const updatedlist = [...listData,activity]
            console.log(updatedlist)
            setActivity('');
            return updatedlist;
        })
    }
    function removeActivity(i){
       const updatedListData = listData.filter((elem,id)=>{
         return i != id;
       })
       setListData(updatedListData)
    }
    function removeAll(){
        setListData('')
    }
  return (
    <div className="container">
        <div className="header">ToDoList</div>
        <input type='text' placeholder='Add Here' value={activity} onChange={(e)=>setActivity(e.target.value)}/>
        <button onClick={addActivity}>Add</button>

        <div className="List-heading">Here IS your List</div>
        {listData != [] && listData.map((data,i)=>{
            return (
                <>
                <p key={i}>
                    <div className="listData">{data}</div>
                </p>
                <div className="btn-position">
                    <button onClick={()=>removeActivity(i)}>Trash</button>
                </div>
                </>
            )
        })}
        {listData.length >=1 && <button onClick={removeAll}>Remove All</button> }
    </div>
  )
}

export default ToDoList