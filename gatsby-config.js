// Makes enviorment variables in .env available
require("dotenv").config();

module.exports = {
  plugins: [`gatsby-plugin-emotion`, `gatsby-plugin-react-helmet`]
};
