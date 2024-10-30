import { useState } from "react"
import { useDispatch } from "react-redux"
import axios from "axios"
import bookData from "../../data/book.json"
import "./BookForm.css"
import { createBookWithId } from "../../utils/createBookWithId"
import { addBook } from "../redux/slices/booksSlice"

export const BookForm = () => {
	const [title, setTitle] = useState("")
	const [author, setAuthor] = useState("")
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()

		if (title && author) {
			const book = createBookWithId({ title, author })
			dispatch(addBook(book))
			setTitle("")
			setAuthor("")
		}
	}

	const generateRandomBookNumber = (min, max) => {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	const handleAddRandomBook = () => {
		let randomBook = bookData[generateRandomBookNumber(0, bookData.length - 1)]

		const book = createBookWithId(randomBook)
		dispatch(addBook(book))
	}

	const handleAddRandomBookViaAPI = async () => {
		try {
			const res = await axios.get("http://localhost:4000/random-book")
			if (res?.data?.title && res?.data?.author) {
				const book = createBookWithId(res.data)
				dispatch(addBook(book))
			}
		} catch (error) {
			console.log("Error fetching random book", error)
		}
	}

	return (
		<div className="app-block book-form">
			<h2>Add a New Book</h2>
			<form onSubmit={handleSubmit} className="book-form">
				<div>
					<label htmlFor="title">Title: </label>
					<input
						id="title"
						type="text"
						value={title}
						onChange={(e) => setTitle(e.target.value)}
					></input>
				</div>
				<div>
					<label htmlFor="author">Author: </label>
					<input
						id="author"
						type="text"
						value={author}
						onChange={(e) => setAuthor(e.target.value)}
					></input>
				</div>
				<button type="submit">Add book</button>
				<button type="button" onClick={handleAddRandomBook}>
					Add random book
				</button>
				<button type="button" onClick={handleAddRandomBookViaAPI}>
					Add random via API
				</button>
			</form>
		</div>
	)
}
