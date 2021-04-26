// import React from 'react'
// import './App.css';
// import ParticleBackground from './Particles/ParticleBackground'
// import PracticeTests from './PracticeTests/PracticeTests'
// // import Videos from './GdriveVideos/Videos'


// function App() {
//   return (
//     <>
//       <ParticleBackground />
//       {/* <Videos/> */}
//       <PracticeTests />
//     </>
//   );
// }

// export default App;

import React, {Component} from 'react'
import HomePage from './pages/homePage'
import AboutPage from './pages/aboutPage'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }
  render() {
    const { location } = this.props

    return (
      <div className = 'App'>
        <Switch location={location}>
          <Route path='/' exact component={HomePage}/>
          <Route path='/about' exact component={AboutPage}/>
        </Switch>
      </div>
    )
  }

}

export default App
