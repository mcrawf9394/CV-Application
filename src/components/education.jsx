import { useState } from "react";
function Education () {
    const [schoolName, setSchoolName] = useState('School')
    const [title, setTitle] = useState('Title of study')
    const [graduation, setGraduation] = useState('2019-06-04')
    const [count,setCount] = useState(0)
    const education = [
        {label: "School Name", type: "text", value: schoolName,  change: setSchoolName},
        {label: "Title of Study", type: "text",value: title, change: setTitle}, 
        {label: "Graduation Date", type:"date", value: graduation, change: setGraduation}
    ]
    function newAdd () {
      const education = [
        {label: "School Name", type: "text"},
        {label: "Title of Study", type:"text"},
        {label: "Graduation Date", type:"date"}
      ]
      return <>{education.map((need) => {
        return <>
        <label>{need.label}</label>
        <input className="education" id={need.label} type={need.type}></input>
        </>
      })}
      </>
    }
    const elements = []
    let i = 0
    while (i < count) {
      elements.push(newAdd(education))
      i++
    }
    console.log(elements)
    return <>
      {education.map((need) => {
        return <>
        <label>{need.label}</label>
        <input className="education" id={need.label} type={need.type} value={need.value} onChange={(event) => need.change(event.target.value)}></input>
        </>
      })}
    {elements.map((element) => {
      return <>
      {element}
      </>
    })}
    <div>
    <button onClick={(click) => {
      click.preventDefault()
      if (count > 0) {
        setCount(count - 1)
      }
    }}
    >Remove</button>
    <button onClick={(click) => {
      click.preventDefault()
      setCount(count + 1)
      }}>Add</button>
    </div>
    </>
}
export default Education