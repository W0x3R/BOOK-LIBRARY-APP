import { useDispatch, useSelector } from "react-redux"
import {
	resetFilters,
	selectAuthorFilter,
	selectOnlyFavoriteFilter,
	selectTitleFilter,
	setAuthorFilter,
	setOnlyFavoriteFilter,
	setTitleFilter
} from "../redux/slices/filterSlice"
import "./Filter.css"

export const Filter = () => {
	const dispatch = useDispatch()
	const titleFilter = useSelector(selectTitleFilter)
	const authorFilter = useSelector(selectAuthorFilter)
	const onlyFavoriteFilter = useSelector(selectOnlyFavoriteFilter)

	const handleTitleFilterChange = (e) => {
		dispatch(setTitleFilter(e.target.value))
	}

	const handleAuthorFilterChange = (e) => {
		dispatch(setAuthorFilter(e.target.value))
	}

	const handleOnlyFavoriteFilterChange = () => {
		dispatch(setOnlyFavoriteFilter())
	}

	const handleResetFilters = () => {
		dispatch(resetFilters())
	}

	return (
		<div className="app-block filter">
			<div className="filter-row">
				<div className="filter-group">
					<input
						value={titleFilter}
						onChange={handleTitleFilterChange}
						type="text"
						placeholder="Filter by title..."
					></input>
				</div>
				<div className="filter-group">
					<input
						value={authorFilter}
						onChange={handleAuthorFilterChange}
						type="text"
						placeholder="Filter by author..."
					></input>
				</div>
				<div className="filter-group">
					<label>
						<input
							checked={onlyFavoriteFilter}
							onChange={handleOnlyFavoriteFilterChange}
							type="checkbox"
							placeholder="Filter by favorite..."
						></input>
						Only favorite
					</label>
				</div>
				<button type="button" onClick={handleResetFilters}>
					Reset filters
				</button>
			</div>
		</div>
	)
}
