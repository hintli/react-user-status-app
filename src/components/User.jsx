import React from 'react'

 function User({name,state}) {
    return (
        <div className="card">
            <h1>Name: {name}</h1>
            <h2>State:  <span className={state}>{state}</span></h2>
            <button >Click</button>
        </div>
    )
}

export default User;
