import { createContext, useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

const FeedbackContext = createContext()

export const FeedbackProvider = ({ children }) => {
	const [feedback, setFeedback] = useState([
		{
			id: 1,
			text: 'Default Text from context',
			rating: 10,
		},
		{
			id: 2,
			text: 'Default Text from context 2',
			rating: 4,
		},
		{
			id: 3,
			text: 'Default Text from context 3',
			rating: 5,
		},
	])
	const [feedbackEdit, setFeedbackEdit] = useState({ item: {}, edit: false })

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
