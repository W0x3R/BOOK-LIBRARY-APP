import { useState } from "react"
import "./BookForm.css"

export const BookForm = () => {
	const [title, setTitle] = useState("")
	const [author, setAuthor] = useState("")

	const handleSubmit = (e) => {
		e.preventDefault()

		if (title && author) {
			console.log(title, author)
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
