import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home.tsx";
import Projects from "./pages/Projects.tsx";
import Contact from "./pages/Contact.tsx";
import Header from "./components/Header.tsx";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path={"/projects"} element={<Projects />}></Route>
        <Route path={"/contact"} element={<Contact />}></Route>
        <Route> </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
