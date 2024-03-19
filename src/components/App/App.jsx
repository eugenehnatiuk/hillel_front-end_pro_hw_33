import React from 'react';
import { Route, Routes, HashRouter } from 'react-router-dom';
import Layout from './Layout.jsx';
import Main from '../Main/Main.jsx';
import FAQ from '../FAQ/FAQ.jsx';
import Content from '../Content/Content.jsx';
import Contacts from '../Contacts/Contacts.jsx';


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

