//Main
import React from 'react'
import './App.css';
import ParticleBackground from './Particles/ParticleBackground'
import PracticeTests from './projects/PracticeTests/PracticeTests'
import BasicTextFields from './projects/SignUp/SignUp'
// import Videos from './GdriveVideos/Videos'

function App() {
  return (
    <>
      <ParticleBackground />
      {/* <Videos/> */}
      {/* <PracticeTests /> */}
      <BasicTextFields/>
    </>
  );
}

export default App;

//Fade Transition
// import React, { Component } from 'react';
// import {
//   Route,
//   NavLink,
//   Switch
// } from "react-router-dom";
// import './App.css';
// import Home from './Home';
// import About from './About';
// import {
// 	CSSTransition,
// 	TransitionGroup
// } from 'react-transition-group'

// // class component
// class App extends Component {

//   render() {

//     return (
//       <div className="App">
//         <div className="nav">
//           <NavLink exact to="/" activeClassName="active">Home</NavLink>
//           <NavLink to="/about" activeClassName="active">About</NavLink>
//         </div>
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/about" component={About} />
//         </Switch>
//       </div>
//     );
//   }
// }

// export default App;

//Slide transition
// import React, { Component } from 'react'
// import './App.css'
// import HomePage from './pages/homePage'
// import { Switch, Route, withRouter } from 'react-router-dom'
// import AboutPage from './pages/aboutPage'

// // import { TransitionGroup, CSSTransition } from 'react-transition-group'

// import './pageTransitions/slideTransition.scss'

// class App extends Component { 
// 	constructor(props) {
// 		super(props)
// 		this.state = {}
// 	}

// 	render() {
// 		// const { location } = this.props
//     // location={location}
// 		return (
// 			<div className='App'>
// 				<Switch >
// 					<Route exact path='/' component={HomePage} />
// 					<Route path='/about' component={AboutPage} />
// 				</Switch>
// 			</div>
// 		)
// 	}
// }

// export default App

//RouterTutorial
// import React from 'react'
// import './App.css';

// function App() {
//   return (
//     <>

//     </>
//   );
// }

// export default App;