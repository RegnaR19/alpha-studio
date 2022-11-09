import React from "react";
import User from "./User";

class Users extends React.Component {

render() {
  if (this.props.users.length > 0)
    return (
      <>
        {this.props.users.map((e) => (
              <User onEdit={this.props.onEdit} onDelete={this.props.onDelete} key={e.id} user={e} />
            ))}
        </>) 
    else 
      return (
            <div className="bg-users">
                <h5>Все записи удалены!!!</h5>
            </div>
            )
    }
}

export default Users