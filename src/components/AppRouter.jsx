import React from 'react';
import {Navigate, Route, Routes} from 'react-router-dom';
import {routes} from '../router/routes';

const AppRouter = () => {
  return (
      <Routes>
        <Route path="*" element={<Navigate to={'/error'}/>}/>
        <Route path="/" element={<Navigate to={'/about'}/>}/>

        {routes.map((route, i) => {
          return (
              <Route
                  key={i}
                  path={route.path}
                  element={<route.element />}
                  exact={route.exact}
              />
          );
        })}
      </Routes>
  );
};

export default AppRouter;