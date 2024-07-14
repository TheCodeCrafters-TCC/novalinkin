import { PORT } from "./config/keys.js";
import connectifyServer from "./app.js";

const port = PORT || 4000;

connectifyServer.listen(port, () =>
  console.log(`Server running on http://localhost:${port}`)
);
