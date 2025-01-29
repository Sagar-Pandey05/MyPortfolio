import React from 'react'
import Page1 from './Pages/Page1'
import Header from './Components/Header'
import Page2 from './Pages/Page2'
import Page3 from './Pages/Page3'
import Page4 from './Pages/Page4'
import Page6 from './Pages/Page6'
import Page5 from './Pages/Page5'
import Page7 from './Pages/Page7'
import Page8 from './Pages/Page8'
import Page9 from './Pages/Page9'
import Page10 from './Pages/Page10'
import Page11 from './Pages/Page11'
import Page12 from './Pages/Page12'
const App = () => {
  return (
    <div>
      <div id="main" className='overflow-x-hidden'>
        <Header />
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
        <Page5 />
        <Page6 />
        <Page7 />
        <Page8 />
        <Page9 />
        <Page10 />
        <Page11 />
        <Page12 />
      </div>
    </div>
  )
}

export default App