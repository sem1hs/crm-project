const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/userRoutes");
const companyRouter = require("./routes/companyRoutes");
const notesRouter = require("./routes/notesRoutes");
const projectRouter = require("./routes/projectRoutes");
const taskRouter = require("./routes/taskRoutes");
const meetingRouter = require("./routes/meetingRoutes");

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
    optionsSuccessStatus: 200,
  }),
);

app.use("/api/user", userRouter);
app.use("/api/company", companyRouter);
app.use("/api/notes", notesRouter);
app.use("/api/project", projectRouter);
app.use("/api/task", taskRouter);
app.use("/api/meeting", meetingRouter);

module.exports = app;
