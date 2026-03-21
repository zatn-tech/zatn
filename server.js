/**
 * Production entry for hosts that expect a single Node file (e.g. cPanel “Application startup file”).
 * Uses PORT from the environment (Passenger/cPanel set this).
 */
const http = require("http");
const { parse } = require("url");
const next = require("next");

const port = parseInt(
  process.env.PORT || process.env.PASSENGER_PORT || "3000",
  10,
);
const hostname = "0.0.0.0";
const dev = process.env.NODE_ENV !== "production";

const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  http
    .createServer((req, res) => {
      const parsedUrl = parse(req.url, true);
      handle(req, res, parsedUrl);
    })
    .listen(port, hostname, (err) => {
      if (err) throw err;
      console.log(`> Ready on http://${hostname}:${port}`);
    });
});
