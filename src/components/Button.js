import React, {useEffect, useState} from "react";

const Button1 = (props) => {
    const [click, setClick] = useState(0)

    useEffect(() => {
        document.title = `${click} раз`
    });
    
  return (
    <>
      <button onClick={() => setClick(click + 1)} className="btn btn-secondary">{props.text} {click}</button>
      </>
  )
}
Button1.defaultProps = {
    text: "Clicked: "
}




export default Button1