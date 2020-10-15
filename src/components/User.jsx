import React from 'react'

 function User({name,state,deleteMethod}) {
    return (

        
        <div className="card">
            <button className="deleteButton" onClick={deleteMethod}>Sil</button>
            <h1>Name: {name}</h1>
            <h2>State:  <span className={state}>{state}</span></h2>
            <button >Click</button>
        </div>
    )
}

export default User;
