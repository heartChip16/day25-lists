import { useState } from 'react'
import './App.css'
import MemoizedEx from './MemoizedEx.jsx'
import PizzaToppings from './PIzzaToppings.jsx'
import Products from './Products'

function App() {

  return (
    <div className="App">
      <PizzaToppings />
      <MemoizedEx />
      <Products />
    </div>
  )
}

export default App
