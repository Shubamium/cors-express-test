const express = require('express')
const cors = require('cors')
const app = express()

// Enable CORS for all routes
app.use(cors())

app.get('/api', async(req, res) => {
  // Make the API request
  const apiResponse = await fetch('https://api.myanimelist.net/v2/users/shubamium/animelist?fields=list_status&status=watching&limit=8',
  {
    headers: {
      'X-MAL-CLIENT-ID':"ba472ff1e5680c717f45643a0644cb34"
    }
  })

  // Send the response back to the client
  res.send(await apiResponse.json())
})

app.listen(3000, () => {
  console.log('Server listening on port 3000')
})

// const endpoint = `https://api.myanimelist.net/v2/users/${malUsername}/animelist?fields=list_status&status=watching&limit=8`;


// const headerse = new Headers({
//     'X-MAL-CLIENT-ID':"ba472ff1e5680c717f45643a0644cb34"
// })