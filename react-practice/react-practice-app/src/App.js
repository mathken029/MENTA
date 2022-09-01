import React, { useState } from 'react'
import logo from './logo.svg';
import './App.css';
import Button from './Button'

function App() {

  const [count, setCount] = useState(0)
  
  return (
    <div className="App">
      <p>カウント：{count}</p>
      <Button btn_click={() => setCount(count + 1)} btn_txt="クリックして+1してね"/>
      <Button btn_click={() => setCount(count - 1)} btn_txt="クリックして-1してね"/>
    </div>
  );
}

export default App;
