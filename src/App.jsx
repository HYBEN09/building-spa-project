import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/HomPage';
import ProductsPage from './pages/Products';

const router = createBrowserRouter([
  { path: '/', element: <HomePage /> },
  { path: '/products', element: <ProductsPage /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
