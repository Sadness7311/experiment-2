import Background from './components/Background'
import Home from './components/Home'
import Navbar from './components/Navbar'
import SecondSection from './components/SecondSection'
import { useState } from 'react'
import ThirdSection from './components/ThirdSection'
function App() {
  const [width, setWidth] = useState(window.innerWidth)

  window.addEventListener('resize', () => setWidth(window.innerWidth))
  return (
    <>
      {width > 900 ?<>
      <Background/>
      <Navbar/>
      <Home/>
      <SecondSection/>
      <ThirdSection/>
      </> : <>
        <h4 style={{ color: 'white' }}>The site is currently not available for mobile phones.  -Sadness7311</h4>
      </>}
    </>
  )
}
export default App