const app = require("./app");
const { connectDb } = require("./config/db");

const port = process.env.PORT || 5000;
app.listen(port, async () => {
  try {
    console.log(`Server is listening on port ${port}`);
    await connectDb();
  } catch (error) {}
});
