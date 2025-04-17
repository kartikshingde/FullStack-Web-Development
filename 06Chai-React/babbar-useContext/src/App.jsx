import { createContext } from "react";
import "./App.css";
import Counter from "./components/Counter";

const ThemeContext = createContext();

function App() {
  return (
    <div>
      <Counter/>
    </div>
  );
}

export default App;
export { ThemeContext };
