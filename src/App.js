import { ToastContainer } from 'react-toastify';
import CalendarBar from './container/CalendarBar/CalendarBar';
import TaskBar from './container/TaskBar/TaskBar';
import Calendar from './container/Calendar/Calendar'

import './assets/styles/App.scss';

function App() {
  return (
    <div className="App">
       <ToastContainer />
      <div className="tasks">
        <TaskBar/>
      </div>
      <div className="Calendar" >
        <CalendarBar/>
        <Calendar />
      </div>
    </div>
  );
}

export default App;
