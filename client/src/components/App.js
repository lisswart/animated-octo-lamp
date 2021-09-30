import Timer from './Timer';
import './App.css';

function App() {  

  return (
    <div className="app-container">
      <nav className="navbar">
        <h3>This is navbar</h3>
      </nav>
      <h1>Pomodoro Clock</h1>
      <Timer />
    </div>
  );
}

export default App;
