import { Button } from "shared-ui";
import "./App.css";

function App() {
  const a = 1;

  const b = () => {
    var t = "x";
  };

  const g = "";

  return (
    <div className="App">
      <Button onClick={() => window.alert("clicked!")}>e</Button>
    </div>
  );
}

export default App;
