import "./Card.css"
import { CardFooter } from "./CardFooter";
import { CardHeader } from "./CardHeader";
import { CardMain } from "./CardMain";

export const Card = (props) => {
    return (
        <div className="card_conteiner">
            <CardHeader/>
            <CardMain/>
            <CardFooter/>
        </div>
    )
}