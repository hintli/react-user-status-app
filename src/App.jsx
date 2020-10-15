import React from 'react'
import UserList from './components/UserList'
import './App.css'

//deneme


 class App extends React.Component {

  state = {
    users: [
      {id:1, name:"ali" , state:"offline"},
      {id:2, name:"mustafa" , state:"online"},
      {id:3, name:"mehmet" , state:"busy"},
    ]
  }

  render() {
    return (
      <div>
        <UserList users={this.state.users} />
      </div>
    )
  }
  
}


export default App;