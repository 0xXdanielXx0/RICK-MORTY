import { useEffect, useState } from "react"
import axios from "axios"
import "./styles/ResidentCard.css"

const ResidentCard = ({url}) => {

const [character, setCharacter] = useState()

useEffect(() => {
axios.get(url)
.then(res => setCharacter(res.data))
.catch(err => console.log(err))
}, [])

  return (
    <article className="resident">
        <header className="resident_header">
            <img  className="resident_image" src={character?.image} alt="" />
            <div className="resident_status">
                <div className={`resident_status-circle ${character?.status}`}></div>
                <span className="resident_status_value">{character?.status}</span>
            </div>
        </header>
        <section className="resident_body">
            <h3 className="resident_name">{character?.name}</h3>
            <hr className="resident_line"/>
            <ul className="resident_list">
                <li className="resident_item"><span className="resident_item_value">Specie</span><span className="resident_item_valuee">{character?.species}</span></li>
                <li className="resident_item"><span className="resident_item_value">Origin</span><span className="resident_item_valuee">{character?.origin.name}</span></li>
                <li className="resident_item"><span className="resident_item_value">Eppisodes</span><span className="resident_item_valuee">{character?.episode.length}</span></li>
            </ul>
        </section>
    </article>
  )
}

export default ResidentCard