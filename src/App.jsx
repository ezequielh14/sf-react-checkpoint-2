import { Routes, Route } from "react-router-dom"
import RickMortyAPI from "./routes/RickMortyAPI";
import Character from "./routes/Character";
import NavBar from "./components/NavBar";
import Home from "./routes/Home";
import Form from "./routes/Form";
import UsersAPI from "./routes/UsersAPI";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-green-400 via-green-500 to-green-600">
      <NavBar />
    <Routes>
      <Route path="/" element={<Home />} />
        <Route path="/form" element={<Form />} />
        <Route path="/users" element={<UsersAPI />} />
				<Route path="/rickmorty" element={<RickMortyAPI />} />
				<Route path="rickmorty/character/:id" element={<Character />} />
			</Routes>
    </div>
  )
}
export default App