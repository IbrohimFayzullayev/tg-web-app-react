import { useEffect } from 'react';
import './App.css';
import { useTelegram } from "../../hooks/useTelegram";

function App() {
  const { tg, onToggleButton } = useTelegram();

  useEffect(() => {
    tg.ready();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  
  return (
    <div className="app">
      <button onClick={onToggleButton}>Toggle</button>
    </div>
  );
}

export default App;
