import { useDispatch, useSelector } from "react-redux"
import "./BookList.css"
import { deleteBook } from "../redux/books/actionCreators"

export const BookList = () => {
	const books = useSelector((state) => state.books)
	const dispatch = useDispatch()

	const handleDeleteBook = (id) => {
		dispatch(deleteBook(id))
	}

	return (
		<div className="app-block book-list">
			<h2>BookList</h2>
			{books.length === 0 ? (
				<p>No books available</p>
			) : (
				<ul>
					{books.map((book, i) => {
						return (
							<li key={book.id}>
								<div className="book-info">
									{++i}. {book.title} by <strong>{book.author}</strong>
								</div>
								<div className="book-actions">
									<button onClick={() => handleDeleteBook(book.id)}>
										Delete
									</button>
								</div>
							</li>
						)
					})}
				</ul>
			)}
		</div>
	)
}
