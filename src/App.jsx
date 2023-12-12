import { useState } from "react";

import Meme from "./Meme";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Meme />
    </div>
  );
}

export default App;
