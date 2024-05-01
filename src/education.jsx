import { useState } from "react";
function Education () {
    const [schoolName, setSchoolName] = useState('School')
    const [title, setTitle] = useState('Title of study')
    const [graduation, setGraduation] = useState('2019-06-04')
    const education = [
        {label: "School Name", type: "text", value: schoolName, change: setSchoolName},
        {label: "Title of Study", type: "text",value: title, change: setTitle}, 
        {label: "Graduation Date", type:"date", value: graduation, change: setGraduation}
    ]
    return <>
    <form>
    {education.map((need) => {
      return <>
      <label>{need.label}</label>
      <input key={need.label} type={need.type} value={need.value} onChange={(event) => need.change(event.target.value)}></input>
      </>
    })}
  </form>
    </>
}
export default Education