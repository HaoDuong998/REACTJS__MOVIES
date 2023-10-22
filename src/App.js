// react-router-dom
import { Routes, Route } from 'react-router-dom';
import UserTemplate from './template/User/UserTemplate';
import Home from './page/Home/Home';
import Login from './page/Login/Login';
function App() {
  return (
    <>
      <Routes>
        <Route path='/' element={<UserTemplate />}>
          <Route index element={<Home />}></Route>
        </Route>
        <Route path='sign-in' element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
