import { Suspense } from 'react';
import { Link, Outlet } from 'react-router-dom';
import { Loader } from 'shared/components/Loader';

export const SharedLayout = () => {
  return (
    <>
      <header>
        <nav>
          <ul>
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
          </ul>
        </nav>
      </header>
      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </>
  );
};
