import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.jsx";
import UpdateCharacter from "./pages/UpdateCharacter.jsx";
import CreateCharacter from "./pages/CreateCharacter.jsx";
import DetailCharacter from "./pages/DetailCharacter.jsx";
import ViewCharacter from "./pages/ViewCharacter.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}></Route>
        <Route path="/create" element={<CreateCharacter />}></Route>
        <Route path="/update/:id" element={<UpdateCharacter />}></Route>
        <Route path="/detail/:id" element={<DetailCharacter />}></Route>
        <Route path="/view" element={<ViewCharacter />}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
