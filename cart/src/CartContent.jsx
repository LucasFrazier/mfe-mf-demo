import React, { useEffect } from "react";

import { useStore } from "home/store";
import { currency } from "home/products";

export default function CartContent() {
  const { cart, clearCart } = useStore();

  return (
    <>
      <div className="m-10 grid grid-cols-4 gap-5">
        {cart.map((item) => (
          <React.Fragment key={item.id}>
            <div>{item.quantity}</div>
            <img src={item.image} alt={item.name} className="max-h-6" />
            <div>{item.name}</div>
            <div className="text-right">
              {currency.format(item.quantity * item.price)}
            </div>
          </React.Fragment>
        ))}
        <div></div>
        <div></div>
        <div></div>
        <div className="text-right" id="grand_total">
          {currency.format(cart.reduce((a, v) => a + v.quantity * v.price, 0))}
        </div>
      </div>
      {cart.length > 0 && (
        <div className="flex mb-10">
          <div className="flex-grow">
            <button
              id="clearcart"
              className="bg-white border border-green-800 text-green-800 py-2 px-5 text-sm font-bold"
              onClick={clearCart}
            >
              Clear Cart
            </button>
          </div>
          <div className="flex-end">
            <button className="bg-black text-white py-2 px-5 text-sm opacity-50 cursor-not-allowed font-bold">
              Checkout
            </button>
          </div>
        </div>
      )}
    </>
  );
}
