import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
import { FaTimes, FaEdit } from 'react-icons/fa'
import Card from './Shared/Card'
const FeedbackItem = ({ item }) => {
	const { deleteFeedback, editFeedback } = useContext(FeedbackContext)
	return (
		<Card>
			<div className='num-display'>{item.rating}</div>
			<button className='close' onClick={() => deleteFeedback(item.id)}>
				<FaTimes color='purple' />
			</button>
			<button className='edit' onClick={() => editFeedback(item)}>
				<FaEdit color='purple' />
			</button>
			<div className='text-display'>{item.text}</div>
		</Card>
	)
}

export default FeedbackItem
