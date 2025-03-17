import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
    // console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + " Child Component did Mount");
    //API Calls

    const data = await fetch("https://api.github.com/users/kartikshingde");

    const json = await data.json();

    console.log(json);
  }

  render() {
    //destructuring
    const { name, location } = this.props;
    const { count } = this.state;

    // console.log(this.props.name + " Child Render()");

    return (
      <div className="user-card">
        <h1>About</h1>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h3>Contact:@kartikshingde</h3>
      </div>
    );
  }
}

export default UserClass;
