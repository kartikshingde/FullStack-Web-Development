import React from "react";

class UserClass extends React.Component {
  render() {

    constructor(props){
      super(props);
      console.log(props)
    }
    return (<div className="user-card">
      <h1>About</h1>
      <h2>Name:{this.props.name}</h2>
      <h3>Location:Pune</h3>
      <h3>Contact:@kartikshingde</h3>
    </div>);
  }
}

export default UserClass;
