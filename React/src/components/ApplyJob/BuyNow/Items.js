import React, { useContext } from "react";
import { CartContext } from "./Cart";
import style from "./Cart.module.css";

const Items = ({ id, description, title, img, price, quantity }) => {
  const { removeItem, increment, decrement } = useContext(CartContext);
console.log(img)
  return (
    <>
      <div className={style.items_info5}>
        <div className={style.product_img5}>
          <img src={img} alt="image" />
        </div>

        <div className={style.title5}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>

        <div className={style.add_minus_quantity5}>
          <i className="fas fa-minus minus" onClick={() => decrement(id)}></i>
          <input type="text" placeholder={quantity} disabled />
          <i className="fas fa-plus add" onClick={() => increment(id)}></i>
        </div>

        <div className={style.price5}>
          <h3>₹ {price}</h3>
        </div>

        <div className={style.remove_item5}>
          <i
            className="fas fa-trash-alt remove"
            onClick={() => removeItem(id)}></i>
        </div>
      </div>

      <hr />
    </>
  );
};

export default Items;