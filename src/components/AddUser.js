import React from "react";
import OverlayTrigger from 'react-bootstrap/OverlayTrigger';
import Tooltip from 'react-bootstrap/Tooltip';
import Button from 'react-bootstrap/Button';

class AddUser extends React.Component {
    userAdd = {}
    constructor(props) {
        super(props)
        this.state = {
            firstname: "",
            lastname: "",
            bio: "",
            age: "",
            isHappy: false
        }
    }
    render() {
    return (
        <header>
            <h5>Создание нового крутого пользователя</h5>
            <form ref={(el) => this.myForm = el}>
            <div className="mb-3"><input placeholder="Имя" className="form-control"
            onChange={e => this.setState({firstname: e.target.value})} /></div>
            <div className="mb-3"><input placeholder="Фамилия" className="form-control"
            onChange={e => this.setState({lastname: e.target.value})} /></div>
            <div className="mb-3"><textarea placeholder="Биография" className="form-control"
            onChange={e => this.setState({bio: e.target.value})} /></div>
            <div className="mb-3"><input placeholder="Возраст" className="form-control" 
            onChange={e => this.setState({age: e.target.value})} /></div>
                    <div className="mb-3 form-check">
                <label htmlFor="isHappy" className="form-check-label">Погода</label>
                <input type="checkbox" id="isHappy" className="form-check-input" 
                onChange={e => this.setState({isHappy: e.target.checked})} /><br />
                    </div>
            <div className="mb-3">
            {['left'].map((placement) => (
        <OverlayTrigger key={placement} placement={placement} delay={{ show: 200, hide: 100 }}
          overlay={<Tooltip id={`tooltip-${placement}`}>Уверены?</Tooltip>}>
                <Button variant="success" onClick={() =>  {
                this.myForm.reset()
                this.userAdd = {
                    firstname: this.state.first_name,
                    lastname: this.state.last_name,
                    email: this.state.email,
                    avatar: this.state.avatar
            }
            if(this.props.user)
                this.userAdd.id = this.props.user.id
            this.props.onAdd(this.userAdd)
                }}>Создать пользователя</Button>
            </OverlayTrigger>))}
            </div>
            </form>
        </header>
    )
  }
  }

  export default AddUser