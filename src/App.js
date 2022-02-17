import './App.css';
import TodoList from './Todo_list';
import React, {useState} from 'react'
import Todo_list from './Todo_list';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default function App() {

  return (   
    <div className="App">
      <TodoList/>
    </div>
    ); 
}


























































 {/* <Switch>
        <Route path = "/Todo_list" component= {TodoList}>
          <TodoList />
        </Route>
      </Switch>       */}

       {/* <div> 
         <h1>Person Menager</h1>
         <h5>This is my task</h5>
         <h4>Toggle Person</h4> 
         <Router>
            <div>
              <nav>
                <Link to="/Todo_list"></Link>
              </nav>
              <Switch>
                <Route path = "/Todo_list">
                  <TodoList />
                </Route>
              </Switch>
              
            </div>
        </Router>
        </div> */}
// function rock() {
//   return <h2>Home</h2>;
// }
// export default App;
