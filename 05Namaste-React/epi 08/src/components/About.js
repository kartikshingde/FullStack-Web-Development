import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component {
  constructor(props) {
    super(props);

    // console.log("Parent Coonstructor");
  }

  componentDidMount() {
    // console.log("Parent Component did Mount");
  }

  render() {
    // console.log("Parent Render()");
    return (
      <div>
        <h1>About</h1>
        <UserClass name={"Kartik Shingde"} location={"Pune MH12"} />
      </div>
    );
  }
}

//If two chils in Parent
/*
  -Parent Constructor
  -Parent render()
    -First Constructor
    -First render()
    
    -Second Constructor
    -Second render()

    <DOM is Updated -In a single BATCH >
    -First ComponentDidMount()
    -Second ComponentDidMount()

  -Parent ComponentDidMount()

*/

export default About;
