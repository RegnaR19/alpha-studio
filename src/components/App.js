import React from "react"
import TopHeader from './Header'
import Users from './Users'
// import Input1 from "./Input"
// import Button1 from "./Button"
import AddUser from "./AddUser";
import axios from "axios";

const baseUrl = "https://reqres.in/api/users?page=1"

class App extends React.Component {
  constructor(props) {
    super(props)
    axios.get(baseUrl).then((res) => {
      this.setState({users: res.data.data});
    })
    this.state = {
      users: []   
  }
    this.addUser = this.addUser.bind(this)
    this.deleteUser = this.deleteUser.bind(this)
    this.editUser = this.editUser.bind(this)
}

  render() {
      return (
      <>
        
        <div className="row">
          <TopHeader title="Разработка программы на React + Bootstrap" />
          <br />
          <main className="col-md-8 col-lg-9">
          <Users users= {this.state.users} onEdit={this.editUser} onDelete={this.deleteUser} />
          {/* <Button1 /> */}
          {/* <Input1 /> */}
          </main>

          <div className="col-md-4 col-lg-3">
            <div className="row">
              <aside className="col-sm-6 col-md-12">
                <AddUser onAdd={this.addUser} />
            </aside>
              <aside className="col-sm-6 col-md-12">
                
            </aside>
            <div className="row"></div>
          </div>
          </div>
          
          </div>
          </>
          )
  }

  deleteUser(id) {
      this.setState({
        users: this.state.users.filter((e) => e.id !== id)
      })
  }

  editUser(user) {
    let allUsers = this.state.users
    allUsers[user.id - 1] = user

    this.setState({users: [] }, () => {
      this.setState({users: [...allUsers]})
    })
  }

  addUser(user) {
    const id = this.state.users.length + 1
    this.setState ({users: [...this.state.users, {id, ...user }]})
  }

}



export default App