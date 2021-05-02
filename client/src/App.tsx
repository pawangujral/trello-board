import React from 'react';
import Tasks from "./views/tasks"; 
import Add from "./views/tasks/add"; 
import {TaskProvider} from "./context/taskContext/taskProvider";
import {BrowserRouter as Router, Route, Switch, Redirect} from "react-router-dom";

function App() {
  return (
    <TaskProvider>
      <Router>
          <Switch>
            <Route path="/" component={Tasks} exact/>
            <Route path="/task/add" component={Add} exact/>
            <Route path="/task/edit/:id" component={Add} exact/>
            <Redirect path="*" to="/"/>
          </Switch>
      </Router> 
    </TaskProvider>
    )
}

export default App;  