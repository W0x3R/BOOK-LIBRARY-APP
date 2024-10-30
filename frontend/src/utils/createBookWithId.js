import { v4 as uuidv4 } from "uuid"

export const createBookWithId = (book, src) => {
	return {
		...book,
		isFavorite: false,
		src,
		id: uuidv4()
	}
}
