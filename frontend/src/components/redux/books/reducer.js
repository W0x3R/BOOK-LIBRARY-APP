import * as actionTypes from "./actionTypes"

const initialState = []

export const booksReducer = (state = initialState, action) => {
	const { type, payload } = action

	switch (type) {
		case actionTypes.ADD_BOOK:
			return [...state, payload]

		case actionTypes.DELETE_BOOK:
			return state.filter((book) => book.id !== payload)

		case actionTypes.TOGGLE_FAVORITE:
			return state.map((book) => {
				return book.id === payload
					? { ...book, isFavorite: !book.isFavorite }
					: book
			})

		default:
			return state
	}
}
