import { lazy, Suspense, ReactElement, PropsWithChildren } from 'react';
import { Outlet, RouteObject, RouterProps, createBrowserRouter } from 'react-router-dom';

import PageLoader from 'components/loading/PageLoader';
import Splash from 'components/loading/Splash';
import { rootPaths } from './paths';
import paths from './paths';

const App = lazy<() => ReactElement>(() => import('App'));

const MainLayout = lazy<({ children }: PropsWithChildren) => ReactElement>(
  () => import('layouts/main-layout'),
);
const AuthLayout = lazy<({ children }: PropsWithChildren) => ReactElement>(
  () => import('layouts/auth-layout'),
);

// InvestmentPage 
const Investment = lazy<() => ReactElement>(() => import('pages/Investment'));
const Profile = lazy(() => import('pages/Profile'));
const MessagePage = lazy<() => ReactElement>(() => import('pages/Message'));
const HistoryPage = lazy<() => ReactElement>(() => import('pages/History'));
const SettingPage = lazy<() => ReactElement>(() => import('pages/Setting'));
const FavPage = lazy<() => ReactElement>(() => import('pages/Favourite'));

// auth page
const Login = lazy<() => ReactElement>(() => import('pages/authentication/Login'));
const SignUp = lazy<() => ReactElement>(() => import('pages/authentication/SignUp'));

//  Error Page
const ErrorPage = lazy<() => ReactElement>(() => import('pages/error/ErrorPage'));

const routes: RouteObject[] = [
  {
    element: (
      <Suspense fallback={<Splash />}>
        <App />
      </Suspense>
    ),
    children: [
      {
        path: paths.home,
        element: (
          <MainLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </MainLayout>
        ),
        children: [
          { index: true, element: <Investment /> },
          { path: '/Profile', element: <Profile /> },
          { path: '/Message', element: <MessagePage /> },
          { path: '/History', element: <HistoryPage /> },
          { path: '/Setting', element: <SettingPage /> },
          { path: '/Favourite', element: <FavPage /> },
          
        ]
      },
      {
        path: rootPaths.authRoot,
        element: (
          <AuthLayout>
            <Suspense fallback={<PageLoader />}>
              <Outlet />
            </Suspense>
          </AuthLayout>
        ),
        children: [
          {
            path: paths.login,
            element: <Login />,
          },
          {
            path: paths.signup,
            element: <SignUp />,
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: <ErrorPage />,
  },
];

const options: { basename: string } = {
  basename: '/invest-stake',
};

const router: Partial<RouterProps> = createBrowserRouter(routes, options);

export default router;
