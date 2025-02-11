import "./Card.css"
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";
import { CardMain } from "./CardMain";

export const Card = (props) => {

    const updatedClickOnCard = () => {
        props.clickOnCard(props.locations)
    }
     
    return (
        <div className="card_conteiner" onClick={updatedClickOnCard}>
            <CardHeader location = {props.locations} headerColor = {props.headerColors}/>
            <CardMain rent_price = {props.rent_prices} />
            <CardFooter/>
        </div>
    )
}