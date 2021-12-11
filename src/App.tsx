/** @format */
import 'bulmaswatch/superhero/bulmaswatch.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Register from './pages/signup';
import Login from './pages/login';
import Cookies from 'js-cookie';

const App = () => {
  const token = Cookies.get('token');
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/signup' element={token ? <Home /> : <Register />} />
        <Route path='/login' element={token ? <Home /> : <Login />} />
        <Route path='/' element={token ? <Home /> : <Login />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
