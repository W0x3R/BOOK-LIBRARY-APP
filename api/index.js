const express = require("express")
const cors = require("cors")
const booksData = require("./data/books.json")

const app = express()

app.use(cors())

const generateRandomBookNumber = (min, max) => {
	min = Math.ceil(min)
	max = Math.floor(max)
	return Math.floor(Math.random() * (max - min + 1) + min)
}

const getRandomBook = () => {
	let randomBook = booksData[generateRandomBookNumber(0, booksData.length - 1)]
	return randomBook
}

app.get("/random-book", (req, res) => {
	res.json(getRandomBook())
})

app.get("/random-book-delayed", (req, res) => {
	setTimeout(() => {
		res.json(getRandomBook())
	}, 1500)
})

const port = process.env.PORT || 4000
app.listen(port, () => {
	console.log(`Server is running on port ${port}`)
})
