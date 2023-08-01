import { useState } from "react";

function App() {
  const currTime = new Date().toLocaleTimeString();
  const [time, settime] = useState(currTime);

  setInterval(updateTime, 1);

  function updateTime(){
    settime(new Date().toLocaleTimeString())
  }
  return (
    <div className="App">
      <h1 className="time">{time}</h1>
      <button className="button" onClick={updateTime}>Get Curr Time</button>
    </div>
  );
}

export default App;
