import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Dashboard from "./components/Dashboard"; 
import "./App.css"; 

const users = [
  { image: "https://via.placeholder.com/150", name: "Priyanshu Kumar", email: "priyanshu@gmail.com", age: 34 },
  { image: "https://via.placeholder.com/150", name: "John Doe", email: "john.doe@example.com", age: 28 }
];

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard users={users} />} />
      </Routes>
    </Router>
  );
}

export default App;
