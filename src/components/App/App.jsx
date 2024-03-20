import React from 'react';
import {
  createBrowserRouter,
  createHashRouter,
  RouterProvider,
} from 'react-router-dom';
import Layout from './Layout';
import Main from '../Main/Main';
import FAQ from '../FAQ/FAQ';
import Content from '../Content/Content';
import Contacts from '../Contacts/Contacts';


const router = createHashRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Main />,
      },
      {
        path: '/questions',
        element: <FAQ />,
      },
      {
        path: '/content',
        element: <Content />,
      },
      {
        path: '/contacts',
        element: <Contacts />,
      },
      {
        path: '*',
        element: '404 - Not Found',
      },
    ],
  },
]);

const App = () => {
  return (
     <RouterProvider router={router} />
  );
};

export default App;
