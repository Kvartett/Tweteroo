import express, { query } from "express"
import cors from "cors"

const app = express()
app.use(cors())
app.use(express.json())

const users = []
const tweets = []

app.post("/sign-up", (req, res) => {
    users.push({ ...req.body });
    res.status(201).send("OK");
})

app.post("/tweets", (req, res) => {
    tweets.push({
        "username": req.body.username,
        "tweet": req.body.tweet
    })
    res.status(201).send("OK");
})

app.get('/tweets', (req, res) => {
    const page = parseInt(req.query.page);
    let i = 10 * (page - 1);
    const totalTweets = 10 * (page - 1) + 10;
    let showtweets = [];
    while (i < totalTweets && tweets[i] !== undefined) {
        showtweets.push(tweets[i]);
        i++;
    }
    res.send(showtweets);
})

app.listen(5000)