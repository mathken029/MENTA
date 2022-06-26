import logo from './logo.svg';
import './App.css';

const name = "libealくん"
const number = 1 + 1

const element = 
  (
    <>
      <h1>こんにちは{name}！</h1>
      <h2>1 + 1の答えは {number} です！</h2>
    </>
  )

function App() {
  return (
    <div className="App">
      {element}
    </div>
  );
}

export default App;
