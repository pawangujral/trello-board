import React from 'react';
import Tasks from "./views/tasks"; 
import {TaskProvider} from "./context/taskContext/taskProvider";

function App() {
  return (
      <TaskProvider>
        <Tasks/>
      </TaskProvider>
    )
}

export default App;
