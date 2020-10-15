import React from 'react'
import UserList from './components/UserList'
import './App.css'
import AddUser from './components/AddUser'

//deneme


 class App extends React.Component {

  state = {
    idx : 4,
    users: [
      {id:1, name:"ali" , state:"offline"},
      {id:2, name:"mustafa" , state:"online"},
      {id:3, name:"mehmet" , state:"busy"},
    ]
  }

  addMethod = (value) => {
    console.log(value)
    console.log("app çalıştı")
    let id = this.state.idx
    let user= {
      name: value,
      state: "online",
      id: id
    }
    let tUsers = [...this.state.users,user]

    this.setState({
      users:tUsers,
      idx: id+1
    })

  }

  render() {
    return (
      <div>
        <UserList users={this.state.users} />
        <hr/>
        <AddUser addMethod={this.addMethod}/>
      </div>
    )
  }
  
}


export default App;