import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'shared/components/Loader';
import { Header, Link, List } from './SharedLayout.styled';

export const SharedLayout = () => {
  return (
    <>
      <Header>
        <nav>
          <List>
            <li>
              <Link to="/">
                <b>Home</b>
              </Link>
            </li>
            <li>
              <Link to="/tweets">
                <b>Tweets</b>
              </Link>
            </li>
          </List>
        </nav>
      </Header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
