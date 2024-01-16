import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query ContactQuery {
      allContentfulContactinfo {
        nodes {
          email
          gitHub
          linkedIn
          location
          name
          phone
          portfolio
          contactImage {
            gatsbyImageData(placeholder: BLURRED, formats: [AUTO, WEBP])
          }
        }
      }
    }
  `);

  const contactInfo = data?.allContentfulContactinfo?.nodes[0];

  return (
    <>
      <Navbar />
      {children}
      <Footer contactInfo={contactInfo} />
    </>
  );
};

export default Layout;
