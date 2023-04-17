import { db } from "./firebase-config.js";
import './App.css';

function App() {
  console.log('firestore', db);
  return (
    <div className="App">
      test
    </div>
  );
}

export default App;
