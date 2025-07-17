import { useState } from 'react'
import './App.css'
import Home from './pages/Home'
import './index.css'
import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';

function App() {

  return (

    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App
