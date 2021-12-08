import { createContext, useEffect, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [feedback, setFeedback] = useState([])
	const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false })

	const fetchFeedback = async () => {
		const reponse = await fetch(
			'http://localhost:5000/feedback?_sort=id&_order=desc'
		)
		const data = await reponse.json()

		setFeedback(data)
		setIsLoading(false)
	}

	useEffect(() => {
		fetchFeedback()
	}, [])

	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		})
	}
	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure to delete the feedback')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4()
		setFeedback([newFeedback, ...feedback])
	}
	const updateFeedback = (id, updItem) => {
		setFeedback(
			feedback.map((item) => (item.id === id ? { ...item, ...updItem } : item))
		)
	}
	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				feedbackEdit,
				isLoading,
				deleteFeedback,
				addFeedback,
				editFeedback,
				updateFeedback,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	)
}

export default FeedbackContext
