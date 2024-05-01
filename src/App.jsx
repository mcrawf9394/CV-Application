import { useState } from 'react'
import './App.css'
import Education from './education'
import Experience from './experience'
import GeneralInfo from './generalInfo'
function App() {
  const [showGen, setGen] = useState(false)
 return <>
 <label>General Information</label>
<GeneralInfo />
<label>Education</label>
<Education />
<label>Experience</label>
<Experience />
 </>
}

export default App
