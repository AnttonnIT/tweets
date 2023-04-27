import { lazy, useEffect } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import { getUsers } from 'utils/api';
import { SharedLayout } from './SharedLayout/SharedLayout';

const HomePage = lazy(() => import('../pages/HomePage/HomePage'));
const TweetsPage = lazy(() => import('../pages/TweetsPage/TweetsPage'));

export const App = () => {
  useEffect(() => {
    const users = async () => {
      const data = await getUsers();
      console.log(data);
    };
    users();
  }, []);

  return (
    <Routes>
      <Route path="/" element={<SharedLayout />}>
        <Route index element={<HomePage />} />
        <Route path="/tweets" element={<TweetsPage />} />
        <Route path="*" element={<Navigate to={'/'} />} />
      </Route>
    </Routes>
  );
};
