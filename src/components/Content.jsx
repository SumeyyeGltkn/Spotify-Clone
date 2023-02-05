import { Routes, Route } from "react-router-dom";
import Home from "views/Home";
import Search from "views/Search";
import Navbar from "./Navbar";
import Books from "views/Books";

export default function Content() {
  return (
    <main className="flex-auto overflow-auto">
      <Navbar />
      <div className="px-8 py-5">
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
          <Route path="/search" element={<Search />}></Route>
          <Route path="/books" element={<Books />}></Route>
        </Routes>
      </div>
    </main>
  );
}
