import { motion, AnimatePresence } from 'framer-motion'
import FeedbackItem from './FeedbackItem'
import { useContext } from 'react'
import FeedbackContext from '../Context/FeedbackContext'
const FeedbackList = () => {
	const { feedback } = useContext(FeedbackContext)
	if (!feedback || feedback.length === 0) {
		return <p>No Feedback Yet</p>
	}
	return (
		<div className='feedback-list'>
			<AnimatePresence>
				{feedback.map((item) => (
					<motion.div
						key={item.id}
						initial={{ opacity: 1 }}
						animate={{ opactity: 1 }}
						exit={{ opacity: 0 }}
					>
						<FeedbackItem
							key={item.id}
							item={item}
							
						/>
					</motion.div>
				))}
			</AnimatePresence>
		</div>
	)
}

export default FeedbackList
