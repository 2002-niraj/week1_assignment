import { useState,useEffect} from "react";
import "./Counter.css";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import RestartAltIcon from '@mui/icons-material/RestartAlt';
import TungstenTwoToneIcon from '@mui/icons-material/TungstenTwoTone';
import DarkModeTwoToneIcon from '@mui/icons-material/DarkModeTwoTone';

export default function Counter({ initialValue , toast }) {
  const [count, setCount] = useState(()=>{
    const savedCount = localStorage.getItem("counter");
    return (savedCount)? parseInt(savedCount):initialValue
  });
  const [darkMode, setDarkMode] = useState(false);
 

  useEffect(() => {
    localStorage.setItem("counter", count);
  }, [count]);
  
  const increment = () => {
    setCount(count + 1);
  };
  const reset = () => {
    setCount(0);
  };
  const decrement = () => {
    if (count > 0) {
      setCount(count - 1);
    } else {
     toast.error("Counter is already at 0 !");
      return;
    }
  };
 
  const toggle = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
       
        document.body.style.backgroundColor = "#2c3e50"; 
        document.body.style.color = "#f1c40f"; 
        document.title = "Dark-mode"     
        toast.info("Dark mode is enabled"); 
      } else {
        
        document.body.style.backgroundColor = "#ffff"; 
        document.body.style.color = "#0000";    
        document.title = "Light-mode"           
      }

  };

  return (
    <div>
        <div className="heading">
        <h1 style={{ color: darkMode ? "#fff" : "#333" }} >Counter App</h1>
      </div>
   
      <div className="counter-container">
        <div>
          <h2>Counter value: {count}</h2>

          <div className="btn-group">
            <button className="btn increment-btn" onClick={increment}>
             <AddIcon/>
            </button>
            <button className="btn reset-btn" onClick={reset}>
             <RestartAltIcon/>
            </button>
            <button className="btn decrement-btn" onClick={decrement}>
            <RemoveIcon/>
            </button>
            <button className="btn toggle-btn" style={darkMode ? { backgroundColor: "#2c3e50" } : {}} onClick={toggle} >
            {darkMode ? <DarkModeTwoToneIcon /> : <TungstenTwoToneIcon />}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
