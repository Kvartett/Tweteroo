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
    let qntTweets = 10;
    let showtweets = tweets.slice(-qntTweets)
    showtweets = showtweets.map((tweet) => {
        return {
            username: tweet.username,
            avatar: users.find((user) => user.username === tweet.username).avatar,
            tweet: tweet.tweet
        }
    })
    res.send(showtweets);
}),

    app.listen(5000, () => {
        console.log("Starting server!")
    })