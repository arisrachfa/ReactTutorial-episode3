// libraries
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom'

// Style
import './App.css';

import CssModulePage from './Page/CssModulePage';
import TernaryOperatorsPage from './Page/TernaryOperatorsPage';
import ListPage from './Page/ListPage';
import ExercisePage from './Page/ExercisePage';

function App() {
  return (
    <Router>
      <div className='navigation'>
        <Link to='/'>CSS Module</Link>
        <Link to='/ternary'>Ternary Operator</Link>
        <Link to='/list'>List</Link>
        <Link to='/exercise'>Exercise</Link>
      </div>

      <Routes>
        <Route path='/' exact element={<CssModulePage />}/>
        <Route path='/ternary' element={<TernaryOperatorsPage />}/>
        <Route path='/list' element={<ListPage />}/>
        <Route path='/exercise' element={<ExercisePage />}/>
      </Routes>
    </Router>
  );
}

export default App;
