import React, { useContext } from "react";
import { Scrollbars } from "react-custom-scrollbars-2";
import Items from "./Items";
import { CartContext } from "./Cart";
import style from "./Cart.module.css";
import { useNavigate } from "react-router-dom";

const ContextCart = () => {
  const navigate = useNavigate();
  const { item, clearCart, totalItem, totalAmount } = useContext(CartContext);

  return (
    <>
      <header>
        <div className={style.continue_shopping5}>
          <img  src="/images/arrow.png" alt="arrow" className={style.arrow_icon5} />
          <h3>continue billing</h3>
        </div>

        <div className={style.cart_icon5}>
          <img src="/images/cart.png" alt="cart" />
          <p>{totalItem}</p>
        </div>
      </header>

      <section className={style.main_cart_section5}>
        <h1>Professional Planning</h1>
        <p className={style.total_items5}>
          You have <span className={style.total_items_count5}>{totalItem} </span> items
          in the cart.
        </p>

        <div className={style.cart_items5}>
          <div className={style.cart_items_container5}>
            <Scrollbars>
              {item.map((curItem) => {
                return <Items key={curItem.id} {...curItem} />;
              })}
            </Scrollbars>
          </div>
        </div>

        <div className={style.card_total5}>
          <h3>
            Cart Total : ₹ {totalAmount}
          </h3>
         <div className={style.btn_container}>
         <button onClick={()=>{
                                        navigate("/ApplyJob/BuyNow/Congrats");
                                    }}>checkout</button>
          <button className={`${style.clear_cart5} ${style.red_btn}`} onClick={clearCart}>
            Clear Cart
          </button>
           </div>
        </div>
      </section>
    </>
  );
};

export default ContextCart;