// import logo from './logo.svg';
import './App.css';
import AddUser from './components/pages/addUser';
import Category from './components/pages/category';
import Dashboard from './components/pages/dashboard';
import EditUser from './components/pages/editUser';
import Product from './components/pages/product';
import Users from './components/pages/user';
import Layout from './components/shared/layout';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import 

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<Dashboard/>}/>
            <Route path='users' element={<Users/>}/>
            <Route path='/addUser' element={<AddUser/>}/>
            <Route path='editUser' element={<EditUser/>}/>
            <Route path='category' element={<Category/>}/>
            <Route path='product' element={<Product/>}/>
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default  App
