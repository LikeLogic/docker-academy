

export const CardMain = () => {
    return (
        <div className="card_body">
            <div className="card_body_rent_information">
                <h6 className="card_body_rent_information_title">Rent $4</h6>
                <div className="card_body_rent_information_list">
                    <div className="card_body_rent_information_list_item">
                        <p>With 1 House</p>
                        <p>$200</p>
                    </div>
                    <div className="card_body_rent_information_list_item">
                        <p>With 2 House</p>
                        <p>$600</p>
                    </div>
                    <div className="card_body_rent_information_list_item">
                        <p>With 3 House</p>
                        <p>$1400</p>
                    </div>
                    <div className="card_body_rent_information_list_item">
                        <p>With 4 House</p>
                        <p>$1700</p>
                    </div>
                    <div className="card_body_rent_information_list_item">
                        <p>With HOTEL</p>
                        <p>$2000</p>
                    </div>
                </div>
            </div>
            <div className="card_body_margage_information"> 
                <p className="card_body_margage_information_text">Mortgage value $200</p>
            </div>
            <div className="card_body_pricing_information">
                <p className="card_body_pricing_information_house">Houses Cost $200 each</p>
                <p className="card_body_pricing_information_hotel">Hotels, $200 each</p>
                <p className="card_body_pricing_information_addition">plus 4 houses</p>
            </div>
        </div>
    )
}