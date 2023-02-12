import logo from "./logo.svg";
import "./App.css";
import CharacterList from "./pages/CharacterList";
import { Route, Routes } from "react-router-dom";
import Character from "./pages/Character";
import Search from "./pages/Search";
import Mutation from "./pages/Mutation";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route strict exact path="/" element={<CharacterList />}></Route>
        <Route path="/search" element={<Search />}></Route>
        <Route path="/:id" element={<Character />}></Route>
        <Route path="/addProduct" element={<Mutation />}></Route>
      </Routes>
    </div>
  );
}

export default App;
