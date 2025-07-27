
import './App.css';
import { CalculateScore } from './Components/Calculatescore';

function App() {
  return (
    <div>
    <CalculateScore Name={"Steve"}
    School={"DNV Public School"}
    total={284}
    goal={3}/>
    </div>
  );
}

export default App;
