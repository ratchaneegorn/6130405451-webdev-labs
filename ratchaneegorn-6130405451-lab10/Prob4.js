//This program that uses Node.js to call Google API to show Restuaurants in KK
const http = require('http')
const port = 8080
var request1 = require("request")

const listRestaurant = (req, res) => {
    request1.get("https://krunapon.github.io/google/call-kk-restaurants.json", (error, response, body) => {
        if (error) {
            return console.log.dir(error);
        }
        var result = JSON.parse(body);
        res.write('<head><meta charset="utf-8"></head>')
        res.write('<h1>Restuaurants in Khon Kaen</h1>')
        res.write('<ol>')
        for(const item of result.results) {
            res.write(`<li>${item.name}</li>`)
        }
        res.write('</ol>')
        res.end()
    })
}

const server = http.createServer((req, res) => {
    res.statusCode = 200
    res.setHeader('Content-Type','text/html')
    listRestaurant(req, res)
})

server.listen(port, () => {
    console.log(`Server running at port ${port}`)
})
