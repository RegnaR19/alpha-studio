import React from "react";
import Button from 'react-bootstrap/Button';
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import AddUser from "./AddUser";

class User extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
        editForm: false
    }
  }
    user = this.props.user    
    render() {
    return (
        <div className="bg-users">
        <h5>
        <i className="bi bi-person-circle"></i> {this.user.id}. {this.user.first_name} {this.user.last_name}</h5>
            <p><img src={this.user.avatar} alt="" /></p>
            <b>Email: {this.user.email}</b><br /><br />

        {['top'].map((placement) => (
        <OverlayTrigger key={placement} placement={placement} delay={{ show: 100, hide: 100 }}
          overlay={ <Tooltip id={`tooltip-${placement}`}>Удалить запись</Tooltip>}>
        <Button variant="danger" size="sm" onClick={() => this.props.onDelete(this.user.id)}><i className="bi bi-x-circle"></i></Button>
        </OverlayTrigger>))}&nbsp;

        {['top'].map((placement) => (
        <OverlayTrigger key={placement} placement={placement} delay={{ show: 100, hide: 100 }}
          overlay={ <Tooltip opacity={0.9} id={`tooltip-${placement}`}>Редактировать запись</Tooltip>}>
        <Button variant="danger" size="sm" onClick={() => {
                    this.setState({  
                      editForm: !this.state.editForm
                    })}}><i className="bi bi-pencil-square"></i></Button>
        </OverlayTrigger>))}
        {this.state.editForm && <AddUser user={this.user} onAdd={this.props.onEdit} />}
        </div>
        )
  }

  }

  export default User