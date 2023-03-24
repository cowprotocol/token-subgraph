import app from "./app";
import { serveMetrics } from "./metrics";

const port = 8080; // default port to listen

// start the Express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});

// Serve metrics on a separate port.
serveMetrics(9989);
