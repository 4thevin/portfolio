import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import Header from "./components/Header.tsx";
import Resume from "./pages/Resume.tsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path={"/projects"} element={<Projects />}></Route>
        <Route path={"/resume"} element={<Resume />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
