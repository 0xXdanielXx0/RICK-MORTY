import "./styles/LocationInfo.css"



const LocationInfo = ({location}) => {
  return (
    <article className="location_card">
        <h2 className="location_name">{location?.name}</h2>
        <ul>
            <li><span className="location_first">Type:</span><span className="location_second">{location?.type}</span></li>
            <li><span className="location_first">Dimension:</span><span className="location_second">{location?.dimension}</span></li>
            <li><span className="location_first">Population:</span><span className="location_second">{location?.residents.length}</span></li>
        </ul>
    </article>
  )
}

export default LocationInfo