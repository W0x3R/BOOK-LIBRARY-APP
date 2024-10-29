import { useDispatch, useSelector } from "react-redux"
import {
	resetFilters,
	selectTitleFilter,
	setTitleFilter
} from "../redux/slices/filterSlice"
import "./Filter.css"

export const Filter = () => {
	const dispatch = useDispatch()
	const titleFilter = useSelector(selectTitleFilter)

	const handleTitleFilterChange = (e) => {
		dispatch(setTitleFilter(e.target.value))
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
				<button type="button" onClick={handleResetFilters}>
					Reset filters
				</button>
			</div>
		</div>
	)
}
