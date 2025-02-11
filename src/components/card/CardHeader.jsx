
export const CardHeader = (props) => {
    return (
        <div className="card_header" style={{backgroundColor: props.headerColor}}>
            <h4 className="card_haeder_title">Title Deeds</h4>
            <h2 className="card_haeder_location">{props.location}</h2>
        </div>
    )
}