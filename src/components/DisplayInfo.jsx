function DisplayInfo () {
    const info = []
    let inputs = document.querySelectorAll('input')
    inputs.forEach((input) => {
        info.push(input)
    })
    let description = document.querySelector('textarea')
    return <div id="application">
        {info.map((stuff) => {
            return <>
            <h2>{stuff.id}</h2>
            <p>{stuff.value}</p>
            </>
        })}
        <h2>{description.id}</h2>
        <p>{description.value}</p>
    </div>
}
export default DisplayInfo