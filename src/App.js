import React,{ Component } from "react";
import { Route } from 'react-router-dom';
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

class App extends Component {
  render() {
    return (
      <div>
        <Route path="/" component={TodoList} exact={true} />>
        <Route path="/todo/add" component={TodoForm} />
      </div>
    );
  }
}

export default App;
