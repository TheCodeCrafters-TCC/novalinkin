import { PORT } from "./config/keys.js";
import connectifyServer from "./app.js";

const port = PORT || 5000;

connectifyServer.listen(port, "0.0.0.0", () =>
  console.log(`Server running on http://localhost:${port}`)
);
