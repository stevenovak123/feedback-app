import { useState } from 'react'
import './App.css'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackData from './data/FeedbackData'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
function App() {
	const [feedback, setFeedback] = useState(FeedbackData)
	const deleteFeedback = (id) => {
		if (window.confirm('Are you sure to delete the feedback')) {
			setFeedback(feedback.filter((item) => item.id !== id))
		}
	}
	return (
		<>
			<Header text='Hello World' />
			<div className='container'>
				<FeedbackForm />
				<FeedbackStats feedback={feedback} />
				<FeedbackList feedback={feedback} handleDelete={deleteFeedback} />
			</div>
		</>
	)
}

export default App
