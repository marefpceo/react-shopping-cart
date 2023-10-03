import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from '../App/App';
import Home from '../Content/Home';
import Shop from '../Shop/Shop';
import Cart from '../Cart/Cart';
import ErrorPage from '../ErrorPage/ErrorPage';

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/shop', element: <Shop /> },
        { path: '/cart', element: <Cart /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default Router;
