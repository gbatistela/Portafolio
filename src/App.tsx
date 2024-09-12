import "./App.css";
import Header from "./components/Header";
import About from "./components/About";
import ProjectList from "./components/ProjectList";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <ProjectList />
      <Contact />
    </div>
  );
}

export default App;
