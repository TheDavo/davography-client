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


const container = document.getElementById('root');
const root = createRoot(container);

root.render(
<BrowserRouter>
  <Routes>
    <Route path="/" element={<App />}>
      <Route index element={<Home />} />
      <Route path="autocross" element={<Autocross />} />
      <Route path="drifting" element={<Drifting />} />
      <Route path="rallycross" element={<Rallycross />} />
      <Route path="drag-racing" element={<DragRacing />} />
      <Route path="about-me" element={<AboutMe />} />
      <Route path="galleries" element={<Galleries />} />
      <Route path="gear" element={<Gear />} />
    </Route>
  </Routes>
</BrowserRouter>
);