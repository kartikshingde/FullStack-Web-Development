import { useEffect, useState } from "react";

const User = ({ name }) => {
  const [count, setCount] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    //API Call in Functional component;
  }, []);

  return (
    <div className="user-card">
      <h1>About</h1>
      <h1>Count={count}</h1>
      <h1>Count2={count2}</h1>
      <h2>Name:{name}</h2>
      <h3>Location:Pune</h3>
      <h3>Contact:@kartikshingde</h3>
    </div>
  );
};

export default User;
