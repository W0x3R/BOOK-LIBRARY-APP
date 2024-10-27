import { useState } from "react"
import { useDispatch } from "react-redux"
import bookData from "../../data/book.json"
import "./BookForm.css"
import { addBook } from "../redux/books/actionCreators"
import { createBookWithId } from "../../utils/createBookWithId"

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
			</form>
		</div>
	)
}
