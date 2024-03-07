import './App.css';
import {Routes, Route} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import TodoSubjet from './components/TodoSubjet';
import Users from './components/Users';
// import Tasks from './components/Tasks';

function App() {
  return (
      <div className="App">
        <TodoSubjet />
        <Routes>
          <Route path='/'></Route>
          <Route path='/users/:id' element={<Users />}></Route>
        </Routes>
      </div>
  );
}

export default App;
