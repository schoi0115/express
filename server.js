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
    if (name == 'dog') { res.json({ "sound": '멍멍', 'img': 'https://png.pngtree.com/thumb_back/fh260/background/20230609/pngtree-three-puppies-with-their-mouths-open-are-posing-for-a-photo-image_2902292.jpg' }); }
    else if (name == 'cat') { res.json({ "sound": '야옹', 'img': 'https://blog.kakaocdn.net/dn/tEMUl/btrDc6957nj/NwJoDw0EOapJNDSNRNZK8K/img.jpg' }); }
    else if (name == 'pig') { res.json({ "sound": '꿀꿀', 'img': 'https://img.freepik.com/free-photo/cute-pink-piglet-fluffy-puppy-playfully-sitting-outdoors-generated-by-artificial-intelligence_188544-129980.jpg?semt=ais_hybrid' }); }
    else {
        res.json({ "sound": '알수없음', 'img': 'https://media.istockphoto.com/id/172198770/ko/%EC%82%AC%EC%A7%84/%EC%88%98%EC%8B%A0%EC%A7%80%EB%8A%94-%EC%95%8C%EC%88%98%EC%97%86%EC%9D%8C.jpg?s=1024x1024&w=is&k=20&c=H7pwa9jT7kFNiqxrN4dFWZr1lZ39-GPxLZ0ZLTUIqHM='});
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

