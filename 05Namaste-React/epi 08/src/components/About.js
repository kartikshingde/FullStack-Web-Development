import User from "./User";
import UserClass from "./UserClass";

const About = () => {
  return (
    <div>
      <h1>Hello</h1>

      <User name={"Kartik Shingde (function)"}/>
      <UserClass name={"Kartik Shingde (class-based)"}/>
    </div>
  );
};

export default About;
