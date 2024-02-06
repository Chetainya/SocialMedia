import './App.css'
import NavBar from './assets/Components/NavBar/NavBar'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Profile from './assets/Components/UserProfile/Profile';
import Login from './assets/Components/UserLogin/Login';
import Signup from './assets/Components/UserLogin/Signup';

function App() {
  
  const router = createBrowserRouter([{
    path : '/'  , element : <NavBar /> , children : [
      {path : '/profile' , element : <Profile />},
      {path : '/login' , element : <Login />},
      {path : '/signup' , element : <Signup />},
      

    ]
  }])

  return (
    <RouterProvider router={router}>
      
    </RouterProvider>
  )
}

export default App
