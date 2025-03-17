import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userInfo: {
        name: "Dummy",
        location: "Default",
        // avatar_url: "http://dummy-photo.com",
      },
    };

    // console.log(this.props.name + " Child Constructor");
  }

  async componentDidMount() {
    // console.log(this.props.name + " Child Component did Mount");
    //API Calls

    const data = await fetch("https://api.github.com/users/akshaymarch7");
    const json = await data.json();
    console.log(json);

    this.setState({
      userInfo: json,
    });
  }

  render() {
    // console.log(this.props.name + " Child Render()");

    const { name, location, avatar_url, followers, following, login } =
      this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h1>About</h1>
        <h2>Name:{name}</h2>
        <h3>Location:{location}</h3>
        <h3>Followere:{followers}</h3>
        <h3>Following:{following}</h3>
        <h3>Contact:{login}</h3>
      </div>
    );
  }
}

export default UserClass;
