import React from 'react';
import User from './User';


const UserList = ({users,deleteMethod,stateChange}) => {
    
        if(users.length > 0) {
            
            return users.map(user => {
                return <User key={user.id} user={user} stateChange={stateChange} deleteMethod={() => deleteMethod(user.id)}/>
            })
            
        }else {
            return <div>Yoggggg dedim</div>
        }
        
    
}

export default UserList;