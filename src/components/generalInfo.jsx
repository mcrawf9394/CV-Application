import { useState } from "react"
function GeneralInfo () {
const [name, setName] = useState("John Doe")
const [email, setEmail] = useState("example@email.com")
const [phone, setPhone] = useState('222-222-2222')
const formNeeds = [
  {label: "Name", type: "text", value: name, change: setName}, 
  {label: "Email", type:"Email", value: email, change: setEmail}, 
  {label: "Phone", type:"tel", value: phone, change: setPhone}
]
return (
  <>
    {formNeeds.map((need) => {
      return <>
      <label>{need.label}</label>
      <input className="generalInfo" id={need.label} type={need.type} value={need.value} onChange={(event) => need.change(event.target.value)}></input>
      </>
    })}
  </>
)
}
export default GeneralInfo