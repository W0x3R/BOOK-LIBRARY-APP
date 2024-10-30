import { configureStore } from "@reduxjs/toolkit"
import filterReducer from "./slices/filterSlice"
import bookReducer from "./slices/booksSlice"

export const store = configureStore({
	reducer: {
		books: bookReducer,
		filter: filterReducer
	}
})
