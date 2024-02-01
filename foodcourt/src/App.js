import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Login from './components/Login';
const approute = createBrowserRouter([
  {
    path: "/",
    element: <Body />
  },
  {
    path: '/login',
    element: <Login />
  }
])
function App() {
  return (
    <RouterProvider router={approute} />
  );
}

export default App;
