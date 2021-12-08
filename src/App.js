import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import FeedbackList from './components/FeedbackList'
import Header from './components/Header'
import FeedbackStats from './components/FeedbackStats'
import FeedbackForm from './components/FeedbackForm'
import AboutIconLink from './components/AboutIconLink'
import About from './Pages/About'
import { FeedbackProvider } from './Context/FeedbackContext'
function App() {
	return (
		<FeedbackProvider>
			<Router>
				<Header text='Hello World' />
				<div className='container'>
					<Routes>
						<Route
							exact
							path='/'
							element={
								<>
									<FeedbackForm />
									<FeedbackStats />
									<FeedbackList />
								</>
							}
						></Route>
						<Route path='/about' element={<About />} />
					</Routes>
					<AboutIconLink />
				</div>
			</Router>
		</FeedbackProvider>
	)
}

export default App
