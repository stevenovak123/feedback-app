import { useState, useContext, useEffect } from 'react'
import RatingSelect from './RatingSelect'
import Button from './Shared/Button'
import Card from './Shared/Card'
import FeedbackContext from '../Context/FeedbackContext'
const FeedbackForm = () => {
	const [text, setText] = useState('')
	const [rating, setRating] = useState(10)
	const [btnDisabled, setbtnDisabled] = useState(true)
	const [message, setMessage] = useState('')

	const { addFeedback, feedbackEdit, updateFeedback } =
		useContext(FeedbackContext)
	useEffect(() => {
		if (feedbackEdit.edit === true) {
			setbtnDisabled(false)
			setText(feedbackEdit.item.text)
			setRating(feedbackEdit.item.rating)
		}
	}, [feedbackEdit])
	const handleTextChange = (e) => {
		if (text === '') {
			setbtnDisabled(true)
			setMessage(null)
		} else if (text !== '' && text.trim().length <= 10) {
			setbtnDisabled(true)
			setMessage('Text must be atleast 10 characters')
		} else {
			setMessage(null)
			setbtnDisabled(false)
		}
		setText(e.target.value)
	}
	const handleSubmit = (e) => {
		e.preventDefault()
		if (text.trim().length > 10) {
			const newFeedback = {
				text,
				rating,
			}
			if (feedbackEdit.edit === true) {
				updateFeedback(feedbackEdit.item.id, newFeedback)
			} else {
				addFeedback(newFeedback)
			}
			setText('')
		}
	}

	return (
		<Card>
			<form onSubmit={handleSubmit}>
				<h2>Rate your experience with us</h2>
				<RatingSelect
					select={(rating) => {
						setRating(rating)
					}}
				/>
				<div className='input-group'>
					<input
						value={text}
						type='text'
						placeholder='Write a review'
						onChange={handleTextChange}
					/>
					<Button isDisabled={btnDisabled} type='submit' version='primary'>
						Send
					</Button>
				</div>
			</form>
			{message && <div className='message'>{message}</div>}
		</Card>
	)
}

export default FeedbackForm
