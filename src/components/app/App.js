import Register from "../Register/Register";
import Login from "../Login/Login";
import Main from "../main/Main";
import Movies from "../Movies/Movies";
import Profile from "../Profile/Profile";
import SavedMovies from "../SavedMovies/SavedMovies";
import NotFoundPage from "../NotFoundPage/NotFoundPage";

import { Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <div className="app">
      <Routes>
        <Route 
        path="/signup" 
        element={<Register />} 
        />

        <Route 
        path="/signin" 
        element={<Login />} 
        />

        <Route 
        path="/" 
        element={<Main />} 
        />

        <Route 
        path="/profile" 
        element={<Profile />} 
        />

        <Route 
        path="/movies" 
        element={<Movies />} 
        />

        <Route 
        path="/saved-movies" 
        element={<SavedMovies />} 
        />

        <Route 
        path="*" 
        element={<NotFoundPage />} 
        />
      </Routes>
    </div>
  );
}