import { useState } from 'react'
import RatingSelect from './RatingSelect'
import Button from './Shared/Button'
import Card from './Shared/Card'

const FeedbackForm = ({ handleAdd }) => {
	const [text, setText] = useState('')
	const [rating, setRating] = useState(10)
	const [btnDisabled, setbtnDisabled] = useState(true)
	const [message, setMessage] = useState('')
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
			handleAdd(newFeedback)
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
