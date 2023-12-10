require('dotenv').config() //
const express = require('express')  // variable has all functionalities of Express
const app = express() //Everything i now assigned to the app directly 
const port = 3000 
const githubData = 
{
  "login": "Tushar292004",
  "id": 119316384,
  "node_id": "U_kgDOBxyfoA",
  "avatar_url": "https://avatars.githubusercontent.com/u/119316384?v=4",
  "gravatar_id": "",
  "url": "https://api.github.com/users/Tushar292004",
  "html_url": "https://github.com/Tushar292004",
  "followers_url": "https://api.github.com/users/Tushar292004/followers",
  "following_url": "https://api.github.com/users/Tushar292004/following{/other_user}",
  "gists_url": "https://api.github.com/users/Tushar292004/gists{/gist_id}",
  "starred_url": "https://api.github.com/users/Tushar292004/starred{/owner}{/repo}",
  "subscriptions_url": "https://api.github.com/users/Tushar292004/subscriptions",
  "organizations_url": "https://api.github.com/users/Tushar292004/orgs",
  "repos_url": "https://api.github.com/users/Tushar292004/repos",
  "events_url": "https://api.github.com/users/Tushar292004/events{/privacy}",
  "received_events_url": "https://api.github.com/users/Tushar292004/received_events",
  "type": "User",
  "site_admin": false,
  "name": "Tushar Chandak",
  "company": "STUDENT ",
  "blog": "",
  "location": "CHENNAI",
  "email": null,
  "hireable": null,
  "bio": "🎓 BE CSE student specializing in Blockchain 🌐 | Aspiring Full Stack Developer ⚡ | Passionate about Web development and Problem Solving 💡 ",
  "twitter_username": null,
  "public_repos": 28,
  "public_gists": 0,
  "followers": 5,
  "following": 2,
  "created_at": "2022-11-28T12:51:47Z",
  "updated_at": "2023-11-28T11:07:57Z"
}

app.get('/', (req, res) => {
    res.send('Hello Nisha')
})

app.get('/twitter', (req, res) => {
    res.send("Tushar's Besti Nisha")
})

app.get('/login', (req, res) => {
    res.send("<h1>Please Login In My Heart</h1>")
})

app.get('/youtube', (req, res) => {
    res.send(`<h2>HELLO WELCOME TO YOUTUBE</h2>`)
})

app.get('/github', (req, res) => {
    res.json(githubData)
})

app.listen(process.env.PORT, () => {  // App is using "listen" method as a callback function 
    console.log(`Example app listening at http://localhost:${process.env.PORT}`)
})

//Everthing above just created a simple server