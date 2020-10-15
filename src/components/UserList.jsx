import React from 'react';
import User from './User';


const UserList = ({users,deleteMethod}) => {
    
        if(users.length > 0) {
            
            return users.map(user => {
                return <User key={user.id}  name={user.name} state={user.state} deleteMethod={() => deleteMethod(user.id)}/>
            })
            
        }else {
            return <div>Yoggggg dedim</div>
        }
        
    
}

export default UserList;