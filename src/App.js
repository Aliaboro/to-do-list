
import './App.css';
import image from './things.png'
import imageTwo from './girl.png'
import { ToDoList } from './ToDoList';

function App() {
  return (
    <div className='app'>
      <div className="container">
      <img src={ image } width="200px" alt="things"/>
      </div>
      <div className="container">
      <h1>Things to do list</h1>
      </div>
      <ToDoList/>
      <div className="container">
      <img src={ imageTwo } width="200px" alt="girl"/>
      </div>
    </div>
  );
}

export default App;

