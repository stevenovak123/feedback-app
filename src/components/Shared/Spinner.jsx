import spinner from '../Assets/spinner.gif'
const Spinner = () => {
	return (
		<img
			src={spinner}
			alt='Loading...'
			style={{ width: '100px', margin: 'auto', display: 'block' }}
		></img>
	)
}

export default Spinner
