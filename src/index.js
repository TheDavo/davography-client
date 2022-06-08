import React from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './index.css'
import App from './App'
import Home from './pages/Home'
import Autocross from "./pages/Autocross"
import Drifting from "./pages/Drifting"
import Rallycross from './pages/Rallycross'
import DragRacing from './pages/DragRacing'
import AboutMe from './pages/AboutMe'
import Galleries from './pages/Galleries'
import Gear from './pages/Gear'
import Login from './pages/Login'
import Gallery from './pages/Gallery'


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />

      <Route path="about-me" element={<AboutMe />} />
      <Route path="gear" element={<Gear />} />
      <Route path="login" element={<Login />} />
    </Route>
    <Route path="galleries/" element={<App />} >
      <Route index element={<Galleries />} />
      <Route path=":galleryGenre" element={<Gallery />} />
    </Route>
  </Routes>
</BrowserRouter>
);