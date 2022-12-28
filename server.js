// CORS Proxy || Make sure to check the hosting provider support node.js & express app 
// Backend Code for fetching the anime list , Remove this code if you want to use static hosting
const malUsername = "Shubamium" //Change this to your MyAnimeList username


const express = require('express')
const cors = require('cors')
const app = express()


// Enable CORS for all routes
app.use(cors())

app.get('/api', async(req, res) => {
  // Make the API request
  const apiResponse = await fetch(`https://api.myanimelist.net/v2/users/${malUsername}/animelist?fields=list_status&status=watching&limit=6`,
  {
    headers: {
      'X-MAL-CLIENT-ID':"ba472ff1e5680c717f45643a0644cb34"
    }
  })

  // Send the response back to the client
  res.send(await apiResponse.json())
})

const port = process.env.PORT || 3000
app.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})