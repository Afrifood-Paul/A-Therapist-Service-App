
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { lazy, Suspense } from 'react';
import Spinner from './components/Spinner/Spinner.component';

// Lazy load all components
const Home = lazy(() => import('./pages/Home'));
const HomePageTwo = lazy(() => import('./pages/HomePagetwo'));
const HomePageThree = lazy(() => import('./pages/HomePageThree'));
const ServicesTwo = lazy(() => import('./pages/ServicesTwo'));
const ServicesSingle = lazy(() => import('./pages/ServicesSingle'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Appointment = lazy(() => import('./pages/Appointment'));

// Create routes with lazy-loaded components and Suspense for each route
const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route
        path="/"
        element={
          <Suspense fallback={<Spinner />}>
            <Home />
          </Suspense>
        }
      />
      <Route
        path="home-page-two"
        element={
          <Suspense fallback={<Spinner />}>
            <HomePageTwo />
          </Suspense>
        }
      />
      <Route
        path="home-page-three"
        element={
          <Suspense fallback={<Spinner />}>
            <HomePageThree />
          </Suspense>
        }
      />
      <Route
        path="services-two"
        element={
          <Suspense fallback={<Spinner />}>
            <ServicesTwo />
          </Suspense>
        }
      />
      <Route
        path="service-single"
        element={
          <Suspense fallback={<Spinner />}>
            <ServicesSingle />
          </Suspense>
        }
      />
      <Route
        path="contact-us"
        element={
          <Suspense fallback={<Spinner />}>
            <ContactUs />
          </Suspense>
        }
      />
      <Route
        path="appointment"
        element={
          <Suspense fallback={<Spinner />}>
            <Appointment />
          </Suspense>
        }
      />
    </>
  )
);

// App component
const App = () => <RouterProvider router={router} />;

export default App;
