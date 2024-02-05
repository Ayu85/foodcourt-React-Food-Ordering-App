import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Login from './components/Login';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './components/Restaurant/Home';
const approute = createBrowserRouter([
  {
    path: "/",
    element: <Body />
  },
  {
    path: '/login',
    element: <Login />
  },
  {
    path: '/restaurants',
    element: <Home />
  }
])
function App() {
  return (
    <Provider store={store}>
      <RouterProvider router={approute} />
    </Provider>
  );
}

export default App;
