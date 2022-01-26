import { ToastContainer } from 'react-toastify';
import CalenderBar from './components/CalenderBar';
import TaskBar from './components/TaskBar';
import Calender from './components/Calender'

import './assets/styles/app.scss';

function App() {
  return (
    <div className="App">
       <ToastContainer />
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
