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
              src={"https://api.ventaflow.co/api/platform/session/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ZlbnRhZmxvdy5jbyIsInN1YmRvbWFpbiI6ImplcmVtaW50aG11bm96c3dlYnNpdGUtMSIsImV4cCI6MTczNDcyMDAzMCwidXNlcklkIjo1OTQzODgsImNvbnRlbnQiOiI4eU5GVmdtMUlFN0ZZcG95In0.YSLGMbfX4_f82vE3DF1i37cbD0v98DGER-QqPy6jfNw"}
            />
      <CreateTodoButton/>
    </div>
  );
}

export default App;
