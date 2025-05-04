
import './App.css';
import Counter from './Component/Counter';
import { ToastContainer, toast } from "react-toastify";

function App() {
  return (
    <div className="App">
       <ToastContainer/>
       <Counter initialValue={0} toast={toast}/>
    </div>
  );
}

export default App;
