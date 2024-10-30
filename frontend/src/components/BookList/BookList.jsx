import { useDispatch, useSelector } from "react-redux"
import { BsBookmarkStar, BsBookmarkStarFill } from "react-icons/bs"
import "./BookList.css"
import {
	selectAuthorFilter,
	selectOnlyFavoriteFilter,
	selectTitleFilter
} from "../redux/slices/filterSlice"
import {
	deleteBook,
	selectBooks,
	toggleFavorite
} from "../redux/slices/booksSlice"

export const BookList = () => {
	const books = useSelector(selectBooks)
	const titleFilter = useSelector(selectTitleFilter)
	const authorFilter = useSelector(selectAuthorFilter)
	const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)
	const dispatch = useDispatch()

	const handleDeleteBook = (id) => {
		dispatch(deleteBook(id))
	}

	const handleToggleFavorite = (id) => {
		dispatch(toggleFavorite(id))
	}

	const filteredBooks = books.filter((book) => {
		const matchesTitle = book.title
			.toLowerCase()
			.includes(titleFilter.toLowerCase())

		const matchesAuthor = book.author
			.toLowerCase()
			.includes(authorFilter.toLowerCase())

		const matchesFavorite = onlyFavoriteFilter ? book.isFavorite : true
		return matchesFavorite && matchesTitle && matchesAuthor
	})

	const highLightMatch = (text, filter) => {
		if (!filter) return text

		const regex = new RegExp(`(${filter})`, "gi")
		return text.split(regex).map((substr, i) => {
			if (substr.toLowerCase() === filter.toLowerCase()) {
				return (
					<span key={i} className="highlight">
						{substr}
					</span>
				)
			}
			return substr
		})
	}

	return (
		<div className="app-block book-list">
			<h2>BookList</h2>
			{books.length === 0 ? (
				<p>No books available</p>
			) : (
				<ul>
					{filteredBooks.map((book, i) => {
						return (
							<li key={book.id}>
								<div className="book-info">
									{++i}. {highLightMatch(book.title, titleFilter)} by{" "}
									<strong>{highLightMatch(book.author, authorFilter)}</strong>
									<span>{` (${book.src})`}</span>
								</div>
								<div className="book-actions">
									<span onClick={() => handleToggleFavorite(book.id)}>
										{book.isFavorite ? (
											<BsBookmarkStarFill className="star-icon" />
										) : (
											<BsBookmarkStar className="star-icon" />
										)}
									</span>

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
