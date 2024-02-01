import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import Login from './components/Login';
import { Provider } from 'react-redux';
import store from './utils/store';
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
    <Provider store={store}>
       <RouterProvider router={approute} />
       </Provider>
  );
}

export default App;
