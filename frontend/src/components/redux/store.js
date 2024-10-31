import { configureStore } from "@reduxjs/toolkit"
import filterReducer from "./slices/filterSlice"
import bookReducer from "./slices/booksSlice"
import errorReducer from "./slices/errorSlice"

export const store = configureStore({
	reducer: {
		books: bookReducer,
		filter: filterReducer,
		error: errorReducer
	}
})
