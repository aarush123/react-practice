import React from 'react';
import Contact from './Contact';
import {Link, useMatch, useLocation, Routes, Route} from 'react-router-dom';
const Home = () => {
  const {pathname} = useLocation();
  console.log(pathname);
  return (
      <>
        <ul>
          <li><Link to={`${pathname}/exp1`}>Expression 1</Link></li>
          <li><Link to={`${pathname}/exp2`}>Expression 2</Link></li>
          <li><Link to={`${pathname}/exp3`}>Expression 3</Link></li>
          <li><Link to={`${pathname}/exp4`}>Expression 4</Link></li>
        </ul>
        <Routes>
          <Route path={pathname+"/:title"} element={<Contact/>}/>
        </Routes>
      </>
  )
};

export default Home;
