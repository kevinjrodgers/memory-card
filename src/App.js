import GameBoard from './components/GameBoard';
import TopNav from './components/TopNav';
import BottomNav from './components/BottomNav';
import './App.css';

function App() {
  return (
    <div className="App">
      <TopNav/>
      <section>
        <GameBoard/>
      </section>
      <BottomNav/>
    </div>
  );
}

export default App;
