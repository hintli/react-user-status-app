import React from 'react'

 function User({user,deleteMethod,stateChange}) {

    const changeHandler = (e) => {
        stateChange({state : e.target.value , id : user.id});
    }

    return (

        
        <div className="card">
            <button className="deleteButton" onClick={deleteMethod}>Sil</button>
            <h1>Name: {user.name}</h1>
            <h2>State:  <span className={user.state}>{user.state}</span></h2>
            <button >Click</button>
            <select id="state" name="state" onChange={changeHandler} value={user.state}>
                <option value="online">online</option>
                <option value="offline">Offline</option>
                <option value="busy">Busy</option>
            </select>
        </div>
    )
}

export default User;
