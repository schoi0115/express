const express = require("express");
const bodyParser = require("body-parser");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
// app.use(bodyParser.json());

// Routes
// const authRoutes = require("./routes/auth");
// app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("Welcome to the Express Backend!");
});
app.get("/sound/:name", (req, res) => {
    const { name } = req.params
    console.log(name)
    if (name == 'dog') { res.json({ "sound": '멍멍' }); }
    else if (name == 'cat') { res.json({ "sound": '야옹' }); }
    else if (name == 'pig') { res.json({ "sound": '꿀꿀' }); }
    else {
        res.json({ "sound": '알수없음' });
    }

});

// app.get("/user/:id", (req, res) => {
//     const p = req.params;
//     console.log(p)
//     res.json({'userID': p.id})

// });

// app.post('/user/:id', (req, res) => {


// })


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

// setTimeout(()=> {console.log("1 초 지남")}, 1000)
// setTimeout(()=> {console.log("5 초 지남")}, 5000)

