import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout';
import Main from '../Main/Main';
import FAQ from '../FAQ/FAQ';
import Content from '../Content/Content';
import Contacts from '../Contacts/Contacts';


const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Main />} />
        <Route path="/questions" element={<FAQ />} />
        <Route path="/content" element={<Content />} />
        <Route path="/contacts" element={<Contacts />} />
      </Route>
    </Routes>
  );
};

export default App;

