import { graphql, Link } from "gatsby";
import * as React from "react";
import Navbar from "../components/Navbar";
import Layout from "../layout";

const contactPage = (props) => {
  return (
    <Layout>
      <Navbar></Navbar>
      <h1>RING DÅ</h1>
    </Layout>
  );
};
export default contactPage;
