import { useState } from "react";
function Experience () {
    const [companyName, setCompanyName] = useState('Acme')
    const [positionTitle, setPositionTitle] = useState('Explosives R&D Test Dummy')
    const [jobDescription, setDescription] = useState('Standing in the blast radius of newly developed explosive devices')
    const [count, setCount] = useState(0)
    const experience = [
        {label: "Company Name", type: "text", value: companyName, change: setCompanyName},
        {label: "Position", type: "text", value: positionTitle, change: setPositionTitle}
    ]
    let description = {label: "Job Description", type:"text", value: jobDescription, change: setDescription}
    const extras = []
    function newAdd () {
        const experience = [
          {label: "Company Name", type: "text"},
          {label: "Position", type:"text"}
        ]
        const description = {label: "Job Description"}
        return <>{experience.map((need) => {
          return <>
          <label>{need.label}</label>
          <input className="experience" id={need.label} type={need.type}></input>
          </>
        })}
        <label>{description.label}</label>
        <input className="experience" id={description.label} rows="4" cols="50"></input>
        </>
      }
    let i = 0
    while (i < count) {
        extras.push(newAdd())
        i++
    }
    return <>
    {experience.map((need) => {
        return <>
        <label>{need.label}</label>
        <input className="experience" id={need.label} type={need.type} value={need.value} onChange={(event) => need.change(event.target.value)}></input>
        </>
      })}
       <label>{description.label}</label>
      <input className="experience-description" id={description.label} value={description.value} rows="4" cols="50" onChange={(event) => description.change(event.target.value)}></input>
    {extras.map((extra) => {
        return <>
        {extra}
        </>
    })}
    <div>
      <button onClick={(click) => {
        click.preventDefault()
        if (count > 0) {
            setCount(count - 1)
        }
      }}>Remove</button>
      <button onClick={(click) => {
        click.preventDefault()
        setCount(count + 1)
      }}>Add</button>
      </div>
      </>
}
export default Experience