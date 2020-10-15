import React , {Component} from 'react';

class AddUser extends Component {

    state = {
        name:""
    }

    //deneme

    submitHandler = (e) => {
        e.preventDefault();
        this.props.addMethod(this.state.name);
        this.setState({
            name:""
        })
    }

    changeHandler = (e) => {
       this.setState({
           name: e.target.value
       })
    }

    render() {

        return (
            <div className="addUserForm">
                <form onSubmit={this.submitHandler}>
                    <input placeholder="Kullanıcı adı giriniz" type="text" id="name" onChange={this.changeHandler} value={this.state.name}/>
                    <button>Ekle</button>
                </form>
            </div>
        )
    }
}

export default AddUser;