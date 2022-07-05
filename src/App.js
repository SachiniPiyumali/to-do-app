import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import TodoList from './components/TodoList';
import Login from './components/Login';
import { Button } from "@mui/material";

import{ BrowserRouter,  Routes, Route, Link} from 'react-router-dom'

function App() {
  return (

    <BrowserRouter>
      <Link to='/'></Link>
      <Button>Home</Button> 
      <Link to='/login' >
        <Button>Logout</Button> 
      </Link>
      <Routes>
      <Route path="/" element={<TodoList/>}/>
     <Route path='/login' element={<Login/>}/>
      </Routes> 
    </BrowserRouter>
   

  );
}

export default App;
