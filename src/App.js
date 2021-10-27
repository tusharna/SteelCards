import logo from './logo.svg';
import './App.css';
import Todo from './components/todo';
import Hooks from './components/Hooks'
import LifecycleHooks from './components/LifecycleHooks';

function App() {
  return (
    <div className="App">     
     {/* <Hooks/> */}
     <LifecycleHooks/>
    </div>
  );
}

export default App;
