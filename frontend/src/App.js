import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./Screens/HomeScreen/HomeScreen";
import BlogPage from "./Screens/BlogPage/BlogPage";
import AddBlogPage from "./Screens/AddBlogPage/AddBlogPage";
import NavBar from "./components/Navbar/NavBar";

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/add__blog" element={<AddBlogPage />} />
          <Route path="/blog__page/:id" element={<BlogPage />} />
          <Route path="/" element={<HomeScreen />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
