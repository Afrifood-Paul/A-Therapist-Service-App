
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
const HomePageTwo = lazy(() => import('./pages/HomePageTwo'));
const HomePageThree = lazy(() => import('./pages/HomePageThree'));
const ServicesTwo = lazy(() => import('./pages/ServicesTwo'));
const ServicesSingle = lazy(() => import('./pages/ServicesSingle'));
const ContactUs = lazy(() => import('./pages/ContactUs'));
const Appointment = lazy(() => import('./pages/Appointment'));
const Support = lazy(() => import('./pages/Support'));


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
        path="personalTherapist"
        element={
          <Suspense fallback={<Spinner />}>
            <HomePageTwo />
          </Suspense>
        }
      />
      <Route
        path="findaswers"
        element={
          <Suspense fallback={<Spinner />}>
            <HomePageThree />
          </Suspense>
        }
      />
      <Route
        path="servicesoffer"
        element={
          <Suspense fallback={<Spinner />}>
            <ServicesTwo />
          </Suspense>
        }
      />
      <Route
        path="servicedetails"
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
      <Route
        path="support"
        element={
          <Suspense fallback={<Spinner />}>
           <Support />
          </Suspense>
        }
      />
    </>
  )
);

// App component
const App = () => <RouterProvider router={router} />;

export default App;
