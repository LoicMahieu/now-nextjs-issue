const path = require("path");

module.exports = {
  target: 'serverless',
  webpack: (config, options) => {
    config.module.rules.forEach(rule => {
      if (rule.use && rule.use.loader === "next-babel-loader") {
        rule.include.push(path.join(__dirname, "../settings"));
      }
    });
    return config;
  },
};
