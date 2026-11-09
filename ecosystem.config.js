module.exports = {
    apps: [
      {
        name: "STK_LINE_LIFFA",
        script: "./server.js",
        env: {
          NODE_ENV: "production",
          PORT: 33010
        }
      }
    ]
  };