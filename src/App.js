import './App.scss';

//components
import CalenderBar from './components/CalenderBar';
import TaskBar from './components/TaskBar';
import Calender from './components/Calender'


function App() {
  return (
    <div className="App">
      <div className="tasks">
        <TaskBar/>
      </div>
      <div className="calender" >
        <CalenderBar/>
        <Calender />
      </div>
    </div>
  );
}

export default App;
