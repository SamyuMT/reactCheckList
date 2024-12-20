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
              src={"https://api.ventaflow.co/api/platform/session/eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczovL3ZlbnRhZmxvdy5jbyIsInN1YmRvbWFpbiI6ImplcmVtaW50aG11bm96c3dlYnNpdGUtMSIsImV4cCI6MTczNDcxOTA3MywidXNlcklkIjo1OTQzODgsImNvbnRlbnQiOiI1Q2ZIK0hFZHlaNFl3WjNVIn0.eLPKRBl5R_jkoZ0_Aw6rtIMUc7RKziTZGrA5LJuVUcI"}
            />
      <CreateTodoButton/>
    </div>
  );
}

export default App;
