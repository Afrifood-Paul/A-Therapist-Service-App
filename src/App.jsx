import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Home from "./pages/Home";
import HomePageTwo from "./pages/HomePageTwo";
import HomePageThree from "./pages/HomePageThree";
import HomePageFour from "./pages/HomePageFour";
import Services from "./pages/Services";
import ServicesTwo from "./pages/ServicesTwo";
import ServicesThree from "./pages/ServicesThree";
import ServicesSingle from "./pages/ServicesSingle";
import StudyCase from "./pages/StudyCase";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import ContactUs from "./pages/ContactUs";
import Appointment from "./pages/Appointment";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<Home />}></Route>
      <Route path="homepagetwo" element={<HomePageTwo />}></Route>
      <Route path="homepagethree" element={<HomePageThree />}></Route>
      <Route path="homepagefour" element={<HomePageFour />}></Route>
      <Route path="Services" element={<Services />}></Route>
      <Route path="Servicestwo" element={<ServicesTwo />}></Route>
      <Route path="Servicesthree" element={<ServicesThree />}></Route>
      <Route path="ServicesSingle" element={<ServicesSingle />}></Route>
      <Route path="Studycase" element={<StudyCase />}></Route>
      <Route path="aboutus" element={<AboutUs />}></Route>
      <Route path="blog" element={<Blog />}></Route>
      <Route path="contact" element={<ContactUs />}></Route>
      <Route path="appointment" element={<Appointment />}></Route>
    </>
  )
);

const App = () => <RouterProvider router={router} />;

export default App;
