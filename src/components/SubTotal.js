import React from "react";
import "./SubTotal.css";
import CurrencyFormat from "react-currency-format";
import {useStateValue} from "../api/StateProvider";
import {getBasketTotal} from "../api/Reducer";
import {useHistory} from "react-router-dom";

function Subtotal(){
    const history = useHistory();
    const [{basket},dispatch] = useStateValue();

    return(
        <div className='subtotal'>
            <CurrencyFormat
               renderText={(value) => (
                   <React.Fragment>
                        <p>
                            Subtotal({basket.length}items):<strong>{value}</strong>
                        </p>
                        <small className='subtotal__gift'>
                            <input type="checkbox"/>This order contains a Gift
                        </small>
                    </React.Fragment>
               )}
               decimalScale={2}
               value={getBasketTotal(basket)}
               displayType={"text"}
               thousandSeparator={true}
               prefix={"$"}
            />
            <button>Proceed to Checkout</button>
        </div>
    )
}

export default Subtotal;

