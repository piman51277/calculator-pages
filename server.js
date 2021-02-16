const express = require('express')
const app = express()

//generate a list of pages based on the contents of public
const fs = require('fs')
const pageList = fs.readdirSync('./public');
let pagesLinks = ''
for (i in pageList) {
    pagesLinks += `<a href="/${pageList[i]}">${pageList[i]}</a><br>`
}

app.use(express.static('public'))

app.get('/', (req, res) => {
    let contents = `<!DOCTYPE html><html><head><title>Calculator pages</title></head><body><h1>Welcome to the Calculator pages, a collection of various calculator webpages</h1>${pagesLinks}</body></html>`
    res.send(contents)
})

app.listen(80, () => {})