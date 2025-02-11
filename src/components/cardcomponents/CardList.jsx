import "./CardList.css"
import { Card } from "../card/Card"


export const CardList = () => {

    const clickOnCard = (card_location) => {
        alert('You clicked on a ' + card_location)
    }
    return (
        <div className="card_list">
            <Card locations = "Queens Ave." rent_prices = {4} headerColors = {"brown"} clickOnCard = {clickOnCard} />
            <Card locations="Faulkner Street" rent_prices = {8} headerColors = {"lightblue"} clickOnCard = {clickOnCard} />
            <Card locations="Panton Place" rent_prices = {15} headerColors = {"crimson"} clickOnCard = {clickOnCard} />
            <Card locations="Pipers Lane" rent_prices = {20} headerColors = {"orange"} clickOnCard = {clickOnCard} />
            <Card locations="Oaklea Ave." rent_prices = {25} headerColors = {"red"} clickOnCard = {clickOnCard} />
            <Card locations="Linden Grove" rent_prices = {30} headerColors = {"yellow"} clickOnCard = {clickOnCard} />
            <Card locations="Park Drive" rent_prices = {40} headerColors = {"green"} clickOnCard = {clickOnCard} />
            <Card locations="Walker Street" rent_prices = {50} headerColors = {"darkblue"} clickOnCard = {clickOnCard} />
        </div>
        
    )
}