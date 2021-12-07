import { useState } from 'react'
import Button from './Shared/Button'
import Card from './Shared/Card'

const FeedbackForm = () => {
	const [text, setText] = useState('')
	const handleTextChange = (e) => {
		setText(e.target.value)
	}
	return (
		<Card>
			<form>
				<h2>Rate your experience with us</h2>
				{/*  rating select component*/}
				<div className='input-group'>
					<input
						value={text}
						type='text'
						placeholder='Write a review'
						onChange={handleTextChange}
					/>
					<Button type='submit' version='primary'>
						Send
					</Button>
				</div>
			</form>
		</Card>
	)
}

export default FeedbackForm
