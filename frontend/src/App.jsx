import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// Global Context provider
import { WorkoutsContextProvider } from './context/WorkoutsContext';

// Layouts
import Main from './layouts/Main';

// Pages
//import HomeV1 from './pages/HomeV1/HomeV1';
import Home from './pages/Home';

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
    ]
  },  
]);

function App() {  
  return (
    <div className="app">
      <WorkoutsContextProvider>
        <RouterProvider router={router} />
      </WorkoutsContextProvider>
    </div>
  )
}

export default App;