import { useDispatch, useSelector } from "react-redux"
import { clearError, selectErrorMessage } from "../redux/slices/errorSlice"
import { ToastContainer, toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useEffect } from "react"

export const Error = () => {
	const errorMessage = useSelector(selectErrorMessage)
	const dispatch = useDispatch()
	useEffect(() => {
		if (errorMessage) {
			toast.info(errorMessage)
			dispatch(clearError())
		}
	}, [errorMessage, dispatch])

	return <ToastContainer position="top-right" autoClose={2000}></ToastContainer>
}
