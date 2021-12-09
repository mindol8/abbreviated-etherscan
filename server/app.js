import express from "express";
import controllers from "./controllers/index.js";
import cors from "cors";
const port = 8080;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(
    cors({
        origin: [`http://localhost:3000`],
        credentials: true,
        methods: ['GET', 'POST', "OPTIONS"]
    })
);

app.get("/:network", controllers);


app.listen(port, () => {
    console.log(`port: ${port} is running`);
})