import './App.css';
import React from 'react'
import IngredientsList from './components/hallacas/ingredientes'
import Header from './components/header.component';
import {Routes,Route} from 'react-router-dom'
import MultiActionAreaCard from './components/intro'

const Home = () => {

  return(
    <div>
      <MultiActionAreaCard/>
      <Header />
      <IngredientsList />
    </div>
  )
}

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home/>}/>
        </Routes>
    </div>
  );
}

export default App;
