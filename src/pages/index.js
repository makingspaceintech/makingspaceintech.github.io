import React from "react";
import Link from "gatsby-link";

import "../assets/css/main.css";

import Header from "../components/Header";
import About from "../components/About";
import Programs from "../components/Programs";
import Events from "../components/Events";
import Footer from "../components/Footer";

const IndexPage = () => (
  <div>
    <Header />
    <About />
    <Programs />
    <Events />
    <Footer />
  </div>
);

export default IndexPage;
