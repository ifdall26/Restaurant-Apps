const path = require("path");

module.exports = {
  // Konfigurasi lainnya...
  devServer: {
    contentBase: path.resolve(__dirname, "public"), // Menetapkan folder public sebagai root directory
  },
};
