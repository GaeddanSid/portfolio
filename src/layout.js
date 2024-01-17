import React from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout = ({ children }) => (
  <>
    <Helmet>
      <html lang="sv" />
      <meta charSet="utf-8" />
      <meta
        name="description"
        content="Personlig portfolio för Pontus Norén Stomberg, Front End utvecklare"
      />
    </Helmet>
    {/* innehållet i helmet hjälper tillgänglighet samt SEO */}
    <Navbar />
    {children}
    <Footer />
  </>
);

export default Layout;
