import { PORT } from "./config/keys.js"
import connectifyServer from "./app.js"

connectifyServer.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));