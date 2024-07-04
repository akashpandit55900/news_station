import './App.css';

import React, { useState } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const pageSize = 6;
  const apiKey1 = process.env.REACT_APP_API_KEY1;
  const apiKey2 = process.env.REACT_APP_API_KEY2;

  const [progress, setProgress] = useState(0);

  return (
    <div>
      <Router>
        <NavBar />
        <LoadingBar
          color='#f11946'
          progress={progress}
        />
        <Routes>
          <Route exact path="/" element={
            <News setProgress={setProgress} apiKey1={apiKey1} apiKey2={apiKey2} key="general" pageSize={pageSize} country="in" category="general" />
          } />
          <Route exact path="/business" element={
            <News setProgress={setProgress} apiKey1={apiKey1} apiKey2={apiKey2} key="business" pageSize={pageSize} country="in" category="business" />
          } />
          <Route exact path="/entertainment" element={
            <News setProgress={setProgress} apiKey1={apiKey1} apiKey2={apiKey2} key="entertainment" pageSize={pageSize} country="in" category="entertainment" />
          } />
          <Route exact path="/general" element={
            <News setProgress={setProgress} apiKey1={apiKey1} apiKey2={apiKey2} key="general" pageSize={pageSize} country="in" category="general" />
          } />
          <Route exact path="/health" element={
            <News setProgress={setProgress} apiKey1={apiKey1} apiKey2={apiKey2} key="health" pageSize={pageSize} country="in" category="health" />
          } />
          <Route exact path="/science" element={
            <News setProgress={setProgress} apiKey1={apiKey1} apiKey2={apiKey2} key="science" pageSize={pageSize} country="in" category="science" />
          } />
          <Route exact path="/sports" element={
            <News setProgress={setProgress} apiKey1={apiKey1} apiKey2={apiKey2} key="sports" pageSize={pageSize} country="in" category="sports" />
          } />
          <Route exact path="/technology" element={
            <News setProgress={setProgress} apiKey1={apiKey1} apiKey2={apiKey2} key="technology" pageSize={pageSize} country="in" category="technology" />
          } />
        </Routes>
      </Router>
    </div>
  )
}
export default App;