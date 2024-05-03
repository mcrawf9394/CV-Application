import "./displayInfo.css"
function DisplayInfo () {
    const info = []
    const education = []
    const experience = []
    let inputs = document.querySelectorAll('input')
    let name
    inputs.forEach((input) => {
        if (input.id === "Name") {
            name = input 
        }
        else if (input.className === "generalInfo") {
            info.push(input)
        }
        else if (input.className === "education") {
            education.push(input)
        }
        else {
            experience.push(input)
        }
    })
    return <div id="application">
        <h1>{name.value}</h1>
        <div className="generalInfodisplay">
        {info.map((stuff) => {
            return <>
            <h2>{stuff.id}</h2>
            <p>{stuff.value}</p>
            </>
        })}
        </div>
        <div className="grid2">
        <div className="educationdisplay">
        {education.map((stuff) => {
                return <div>
                <h2>{stuff.id}</h2>
                <p>{stuff.value}</p>
                </div>
        })}
        </div>
        <div className="experiencedisplay">
        {experience.map((stuff) => {
                return <div>
                <h2>{stuff.id}</h2>
                <p>{stuff.value}</p>
                </div>
        })}
        </div>
        </div>
    </div>
}
export default DisplayInfo