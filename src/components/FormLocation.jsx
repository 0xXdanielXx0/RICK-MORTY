import getRandomNumber from "../utils/getRandomNumber"

const FormLocation = ({setIdLocation}) => {

const handleSubmit = e =>{
e.preventDefault()
const inputValue = e.target.inputId.value.trim()
if(inputValue !== "" || inputValue === "0"){
    setIdLocation(getRandomNumber(126))
}else{
    setIdLocation(inputValue)
}
e.target.inputId.value = ""
}

  return (
    <form onSubmit={handleSubmit}>
        <input style={{ marginLeft: "42.5em", marginTop: "8px", borderRadius: "0.5em 0 0 0.5em"}} id="inputId" type="text" />
        <button style={{backgroundColor: "rgb(0, 221, 0)", marginLeft: "0em", borderRadius: "0 0.5em 0.5em 0", color:"white"}}>Search</button>
    </form>
  )
}

export default FormLocation