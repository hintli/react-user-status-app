import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Emre",
      state: "Online"
    }
  }

  clickHandler() {
    console.log(this)
    this.setState({
      name: "Orhaaaannnn"
    })
  }

  changeHandler = (e) => {
    this.setState({
      state:e.target.value
    })
  }

  nameChangeHandler = (e) => {
    this.setState({
      name:e.target.value
    })
  }

  render() {
    const {name,state} = this.state;
    return(
      <div className="card">
        <h1>Adı: {name}</h1>
        <h3 className={state}>Durum: {state}</h3>
        <button onClick={this.clickHandler.bind(this)}>Click</button>


        <select id="state" name="state" onChange={this.changeHandler} value={state}>
          <option value="online">online</option>
          <option value="offline">Offline</option>
          <option value="busy">Busy</option>
        </select>

        <input type="text" name="name" onChange={this.nameChangeHandler}/>
      </div>
    )
  }
}

export default App;
