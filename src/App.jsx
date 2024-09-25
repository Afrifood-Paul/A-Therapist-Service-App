import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import HomePageTwo from "./pages/HomePagetwo";
import HomePageThree from "./pages/HomePagethree";
import HomePageFour from "./pages/HomePagefour";
import Services from "./pages/Services";
import ServicesTwo from "./pages/ServicesTwo";
import ServicesSingle from "./pages/ServicesSingle";
import StudyCase from "./pages/StudyCase";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Appointment from "./pages/Appointment";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />} />
      <Route path="home-page-two" element={<HomePageTwo />} />
      <Route path="home-page-three" element={<HomePageThree />} />
      <Route path="home-page-four" element={<HomePageFour />} />
      <Route path="services" element={<Services />} />
      <Route path="services-two" element={<ServicesTwo />} />
      <Route path="service-single" element={<ServicesSingle />} />
      <Route path="study-case/*" element={<StudyCase />} />
      <Route path="about-us" element={<AboutUs />} />
      <Route path="blog" element={<Blog />} />
      <Route path="contact-us" element={<ContactUs />} />
      <Route path="appointment" element={<Appointment />} />
    </>
  )
);


const App = () => <RouterProvider router={router} />;

export default App;
