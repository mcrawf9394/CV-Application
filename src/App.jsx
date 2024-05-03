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
 <h3>General Information</h3>
<GeneralInfo />
<h3>Education</h3>
<Education />
<h3>Experience</h3>
<Experience />
<div>
<button id='edit' onClick={(click) => {
  click.preventDefault()
  setDisplay(false)
  let buttons = document.querySelectorAll('button')
  buttons.forEach((button) => {
    button.disabled = false
  })
  let inputs = document.querySelectorAll('input')
  inputs.forEach((input) => {
    input.disabled = false
  })
}}>Edit</button>
<button id="display" type='submit' onClick={(click) => { 
  click.preventDefault() 
  setDisplay(true)
  let buttons = document.querySelectorAll('button')
  buttons.forEach((button) => {
    if (!button.id) {
      button.disabled = true
    }
  })
  document.getElementById('display').disabled = true
  let inputs = document.querySelectorAll('input')
  inputs.forEach((input) => {
    input.disabled = true
  })
  }}>Submit</button>
</div>
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
