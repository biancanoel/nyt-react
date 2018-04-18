import React from "react";

// This component lets us use a bootstrap input element without worrying about class names
// or manually wrapping the input with a form-group div
// All of the props passed to this component are spread onto the input element
const Input = props => (
  <div className="form-group">
    
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" {...props}/>
    

  </div>
);

export default Input;