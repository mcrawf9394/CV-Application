import { useState } from 'react'
import './style/App.css'
import Education from './components/education'
import Experience from './components/experience'
import GeneralInfo from './components/generalInfo'
import DisplayInfo from './components/DisplayInfo'
function App() {
  const [display, setDisplay] = useState(false)
 return <div id='grid'>
 <form>
 <label>General Information</label>
<GeneralInfo />
<label>Education</label>
<Education />
<label>Experience</label>
<Experience />
<button onClick={(click) => {
  click.preventDefault()
  setDisplay(false)
  document.getElementById('display').disabled = false
}}>Edit</button>
<button id="display" type='submit' onClick={(click) => { 
  click.preventDefault() 
  setDisplay(true)
  document.getElementById('display').disabled = true
  }}>Submit</button>
</form>
{display ? (
<DisplayInfo />
) : (
  <></>
)
}
 </div>
}
export default App
