import React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const Index = () => {
  return (
    <>
      <Layout>
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <Link to="/">Link</Link>
      </Layout>
    </>
  );
};

export default Index;
