
import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import Signup from './Signup'
import Login from './Login';
import Residency from './Residency'
import Live from './Live';
import Authentication from './Authentication';
import Candidate from './Candidate'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Signup />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/residency",
        element: <Residency />,
      },
       {
        path: "/live",
        element: <Live />,
      },
         {
        path: "/authentication",
        element: <Authentication />,
      },
      {
        path: "/candidate",
        element: <Candidate />,
      },
    ],
  },
]);

export default router;