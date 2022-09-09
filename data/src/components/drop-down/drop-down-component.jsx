import Button from "../button/btn-component"
import { useContext } from "react";
import { CartContext } from "../context/cartContext";
import { CartItem } from "../cart-component/cart-item"
import './dropdown.scss'
const DropDown =()=>{
    const {CartItems} = useContext(CartContext);
    return (
        <div className="cart-dropdown-container">
            <div className="cart-items">
            {
                CartItems.map((item)=>(
                    <CartItem key={item.id} cartitemdata={item}/>
                ))
            }
            <Button>Checkout</Button>
            </div>
        </div>
    )
}

export default DropDown;