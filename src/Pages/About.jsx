import { Link } from 'react-router-dom'
import Card from '../components/Shared/Card'
const About = () => {
	return (
		<Card>
			<div className='about'>
				<h1>About this project</h1>
				<p>this is a react practice app </p>
			</div>
			<Link to='/'>
				<p>Click here to go back</p>
			</Link>
		</Card>
	)
}

export default About
