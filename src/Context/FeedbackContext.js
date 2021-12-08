import { createContext, useEffect, useState } from 'react'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true)
	const [feedback, setFeedback] = useState([])
	const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false })

	const fetchFeedback = async () => {
		const reponse = await fetch('/feedback?_sort=id&_order=desc')
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
	const deleteFeedback = async (id) => {
		if (window.confirm('Are you sure to delete the feedback')) {
			await fetch(`/feedback/${id}`, { method: 'DELETE' })
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}
	const addFeedback = async (newFeedback) => {
		const response = await fetch('/feedback', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify(newFeedback),
		})

		const data = await response.json()

		setFeedback([data, ...feedback])
	}
	const updateFeedback = async (id, updItem) => {
		const response = await fetch(`/feedback/${id}`, {
			method: 'PUT',
			headers: { 'Content-type': 'application/json' },
			body: JSON.stringify(updItem),
		})
		const data = await response.json()
		setFeedback(
			feedback.map((item) => (item.id === id ? { ...item, ...data } : item))
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
