import { useState } from "react"
import { useDispatch } from "react-redux"
import { v4 as uuidv4 } from "uuid"
import "./BookForm.css"
import { addBook } from "../redux/books/actionCreators"

export const BookForm = () => {
	const [title, setTitle] = useState("")
	const [author, setAuthor] = useState("")
	const dispatch = useDispatch()

	const handleSubmit = (e) => {
		e.preventDefault()

		if (title && author) {
			const book = {
				title,
				author,
				id: uuidv4()
			}
			dispatch(addBook(book))
			setTitle("")
			setAuthor("")
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
			</form>
		</div>
	)
}
