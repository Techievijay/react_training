import './App.css';
import Timer from './components/Timer';
import TemperatureCard from './components/TemperatureCard';

function App() {
  return (
    <div className="App">
    <div className="App-content">
      <Timer/>
        <TemperatureCard />
      </div>
    </div>
  );
}

export default App;
