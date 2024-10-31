import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { FaSpinner } from "react-icons/fa"
import bookData from "../../data/book.json"
import "./BookForm.css"
import { createBookWithId } from "../../utils/createBookWithId"
import {
	addBook,
	fetchBook,
	selectIsLoadingViaAPI
} from "../redux/slices/booksSlice"
import { setError } from "../redux/slices/errorSlice"

export const BookForm = () => {
	const [title, setTitle] = useState("")
	const [author, setAuthor] = useState("")
	const isLoadingViaAPI = useSelector(selectIsLoadingViaAPI)
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()

		if (title && author) {
			const book = createBookWithId({ title, author }, "manual")
			dispatch(addBook(book))
			setTitle("")
			setAuthor("")
		} else {
			dispatch(setError("You must fill title and author"))
		}
	}

	const generateRandomBookNumber = (min, max) => {
		min = Math.ceil(min)
		max = Math.floor(max)
		return Math.floor(Math.random() * (max - min + 1) + min)
	}

	const handleAddRandomBook = () => {
		let randomBook = bookData[generateRandomBookNumber(0, bookData.length - 1)]

		const book = createBookWithId(randomBook, "random")
		dispatch(addBook(book))
	}

	const handleAddRandomBookViaAPI = () => {
		dispatch(fetchBook("http://localhost:4000/random-book-delayed"))
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

				<button
					type="button"
					onClick={handleAddRandomBookViaAPI}
					disabled={isLoadingViaAPI}
				>
					{isLoadingViaAPI ? (
						<>
							<span>
								Loading book... <FaSpinner className="spinner" />
							</span>
						</>
					) : (
						"Add random book via API"
					)}
				</button>
			</form>
		</div>
	)
}
