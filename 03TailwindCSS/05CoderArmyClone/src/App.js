import React from "react";
import ReactDOM from "react-dom/client";
import Body from "../components/Body";
import Header from "../components/Header";
const AppLayout = () => {
  return (
    <div>
      <Header />
      <Body/>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);

export default AppLayout;
