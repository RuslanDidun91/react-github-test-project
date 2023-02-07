import { Routes, Route } from "react-router-dom";
import { Favourite } from "./pages/Favourite";
import { HomePagee } from "./pages/HomePage";
import { Navigation } from "./components/Navigation";

function App() {
  return (
    <>
    <Navigation />
      <Routes>
        <Route path="/" element={<HomePagee />} />
        <Route path="/favourites" element={<Favourite />} />
      </Routes>
    </>
  )
}

export default App;
