import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Loader } from 'shared/components/Loader';
import { Main } from './SharedLayout.styled';
import { Header } from 'components/Header/Header';
import { Footer } from 'components/Footer/Footer';

export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Main>
        <Suspense fallback={<Loader />}>
          <Outlet />
        </Suspense>
      </Main>
      <Footer />
    </>
  );
};
