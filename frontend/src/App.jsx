import { 
  createBrowserRouter,
  RouterProvider 
} from 'react-router-dom';

// Global Context providers
import { WorkoutsContextProvider } from './context/WorkoutsContext';
import { AuthContextProvider } from './context/AuthContext';

// Layouts
import Main from './layouts/Main';

// helpers
import ProtectedRoutes from './helpers/ProtectedRoutes';

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
        path: "/",
        element: <ProtectedRoutes />,
        children: [
          {
            index: true,
            element:<Home />,
          },
        ]
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "register",
        element: <Register />,
      },
      
      // {
      //   index: true,
      //   element: <HomeV1 />,
      // },
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