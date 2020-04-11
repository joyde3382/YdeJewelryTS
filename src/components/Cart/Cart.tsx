import React from "react";
import { IDetailedProduct } from "../../models/IDetailProduct";
import styles from "./Cart.module.scss";
import { storeProducts } from "../../data";

const Cart: React.FC<{ currentProduct: IDetailedProduct }> = () => {
  const cart = fillCart();

  return (
    <div>
      <table className={styles.table}>
        <tr>
          <th>Name</th>
          {/* <th>Count</th> */}
          <th>Price</th>
          <th>Product</th>
          {/* <tr>
          <th>Total</th>
        </tr> */}
        </tr>
        {cart.map((item) => (
          <tr>
            <td>{item.title}</td>
            <td>{item.price}</td>
            <img alt={""} style={{ width: 60 }} src={item.img} />
          </tr>
        ))}
      </table>
    </div>
  );
};

function fillCart(): IDetailedProduct[] {
  return storeProducts;
}

export default Cart;
