import { TodoCount } from './TodoCount';
import { TodoSearch } from './TodoSearch';
import { TodoList } from './TodoList';
import { TodoItem } from './TodoItem';
import { CreateTodoButton } from './CreateTodoButtom';
import './App.css';

function App() {
  return (
    <div className="App">
      <TodoCount
      completed={3}
      total={4}/>

      <TodoSearch/>
      <TodoList>
        <TodoItem/>
        <TodoItem/>
        <TodoItem/>
      </TodoList>
      <iframe
              src={"https://jereminthmunozswebsite-1.ventaflow.co/me/website"}
            />
      <CreateTodoButton/>
    </div>
  );
}

export default App;
