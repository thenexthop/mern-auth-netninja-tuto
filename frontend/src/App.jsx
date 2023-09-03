import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Global Context providers
import { WorkoutsContextProvider } from './context/WorkoutsContext';
import { AuthContextProvider } from './context/AuthContext';

// Layouts
import Main from './layouts/Main';

// Pages
//import HomeV1 from './pages/HomeV1/HomeV1';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      // {
      //   index: true,
      //   element: <HomeV1 />,
      // },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
    ]
  },  
]);

function App() {  
  return (
    <div className="app">
      <AuthContextProvider>
        <WorkoutsContextProvider>
          <RouterProvider router={router} />
        </WorkoutsContextProvider>
      </AuthContextProvider> 
    </div>
  )
}

export default App;