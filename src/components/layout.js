import React from "react";
import { Helmet } from "react-helmet";
import { Global, css } from "@emotion/core";

const Layout = ({ children }) => (
  <>
    <Helmet>
      <title>OXBLD Starter</title>
    </Helmet>
    <Global
      styles={css`
        :root {
          --bg-color: #f2f2f2;
          --page-width: 1200px;
          --primary-color: #ff3232;
          --secondary-color: #ffee00;
          --text-color: #2d2d2d;
          --link-color: #ab0000;
          --link-underline-color: #000000;
          --border-radius: 5px;
          --nav-link-color: #333333;
          --dropdown-link-color: #555555;
          --dropdown-bg-color: #fdfdfd;
          --header-height: 3rem;
          --footer-height: 4rem;
        }

        html {
          box-sizing: border-box;
        }

        body {
          background-color: var(--bg-color);
          font-family: "Poppins", sans-serif;
          font-size: 18px;
        }

        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }

        body,
        h1,
        h2,
        h3,
        h4,
        h5,
        h6,
        p,
        ol,
        ul {
          margin: 0;
          padding: 0;
          font-weight: normal;
          color: var(--text-color);
        }

        header {
          position: absolute;
          top: 0;
          width: 100%;
          height: var(--header-height);
        }

        main {
          max-width: var(--page-width);
          margin-top: var(--header-height);
          margin-bottom: var(--footer-height);
          margin-left: auto;
          margin-right: auto;
        }

        footer {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: var(--footer-height);
        }

        ol,
        ul {
          list-style: none;
        }
        img {
          max-width: 100%;
          height: auto;
        }

        h1 {
          font-size: 3rem;
          font-weight: 700;
        }

        h2 {
          font-size: 2.5rem;
          font-weight: 700;
        }

        h3 {
          font-size: 2.1rem;
        }

        h4 {
          font-size: 1.8rem;
        }

        h5 {
          font-size: 1.6rem;
        }

        p {
          font-weight: 300;
        }

        /* Links */

        a {
          text-decoration: none;
          color: var(--link-color);
          transition: all 0.3s;
        }

        a:hover {
          text-decoration: underline;
          text-decoration-color: var(--link-underline-color);
          opacity: 0.8;
        }
      `}
    />

    <header>
      <p>Header</p>
    </header>
    <main>{children}</main>
    <footer>
      <p>Footer</p>
    </footer>
  </>
);

export default Layout;
