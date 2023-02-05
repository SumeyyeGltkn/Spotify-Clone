import Sidebar from "./components/Sidebar";
import BottonBar from "./components/BottonBar";
import Content from "./components/Content";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="wrapper">
        <Sidebar />
        <Content />
      </div>
      <BottonBar />
    </Router>
  );
}

export default App;
