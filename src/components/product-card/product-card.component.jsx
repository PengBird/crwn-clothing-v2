import { ProductsContext } from "../../contexts/products.context";
import "./product-card.styles.scss";
import Button from "../button/button.component";
import { CartDropdownContext } from "../../contexts/cart-dropdown.context";
import { useContext } from "react";

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;

  /////
  const { setCartItems, cartItems } = useContext(CartDropdownContext);

  const handleCart = async (event) => {
    const match = cartItems.find(
      (clickedItem) => clickedItem.id === product.id
    );
    if (!match) {
      product.quantity = 1;
      await setCartItems([...cartItems, product]);
    } else {
      match.quantity += 1;
      setCartItems(cartItems);
    }

    console.log(cartItems);
  };
  /////

  return (
    <div className="product-card-container">
      <img src={imageUrl} alt={`${name}`}></img>
      <div className="footer">
        <span className="name">{name}</span>
        <span className="price">{price}</span>
      </div>
      <Button buttonType="inverted" onClick={handleCart}>
        Add to cart
      </Button>
    </div>
  );
};

export default ProductCard;
