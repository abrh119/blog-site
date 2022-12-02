import { BrowserRouter, Routes, Route } from "react-router-dom";
import Add from "./pages/Add";
import Books from "./pages/Blogs";

function App() {
  return (
    // Routing and linking set up here using react dom
    <div className="app">
      <BrowserRouter>
        <Routes> 
          <Route path="/" element={<Books />} />
          <Route path="/add" element={<Add />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
