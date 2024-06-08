import React from "react";
import Navbar from "./Navbar";
import Whitebox from "./Whitebox";
import IntroCard from "./IntroCard";
import ContactUs from "./ContactUs";
import Galleary from "./Galleary";
import Offers from "./Offers";
import Certificates from "./Certificates";
import Business from "./Business";
import Blogs from "./Blogs";
import Appoinment from "./Appoinment";
import Form from "./Form";
import ProductCard from "./ProductCard";
import Service from "./Service";
import Review from "./Review";
import Feedbackform from "./Feedbackform";
const Layout = () => {
  return (
    <div className="App">
      <Whitebox />
      <IntroCard />
      <ContactUs />
      <ProductCard />
      <Service />
      <Offers />
      <Blogs />
      <Galleary />
      <Business />
      <Certificates />
      <Feedbackform />

      <Review />
      <Appoinment />
      <Form />
    </div>
  );
};

export default Layout;
