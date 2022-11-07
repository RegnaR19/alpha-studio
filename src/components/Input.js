import React from "react";


let i = 0;

class Input1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      justtext: "",
      userData: ""
    }
    this.inputClick = this.inputClick.bind(this)
  } 
  render() {
    return (
      <div>
        <p>{this.state.justtext}</p>
          <div className="col-md-4 input-group mb-3">
            <span className="input-group-text" id="basic-addon3">
              <i className="bi bi-envelope"></i> &nbsp; Введите сообщение
             </span>
          <input type="text" className="form-control" id="basic-url inputForm"
          onChange={event => this.setState({userData: event.target.value})}
          aria-describedby="basic-addon3" />
          </div>
        <p><mark id="hid">{this.state.userData}</mark></p>
      </div>
    )
}

  inputClick() {
    this.setState({justtext: "Henge no Jutsu!"}) 
    console.log("Нажато " + i + " раз")
    i++;
  }

}

export default Input1