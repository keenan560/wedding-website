import React, { useEffect, useRef, useState } from "react";

function PayPal() {
  const paypal = useRef();
  useEffect(() => {
    window.paypal
      .Buttons({
        createOrder: (data, actions, error) => {
          return actions.order.create({
            intent: "CAPTURE",
            purchase_units: [
              {
                description: "Donation",
                amount: {
                  value: price,
                  currency_code: "USD",
                },
              },
            ],
          });
        },
        onApprove: async (data, actions) => {
          const order = await actions.order.capture();
          console.log(order);
        },
        onError: (error) => {
          console.log(error);
        },
      })
      .render(paypal.current);
  }, []);
  const [price, setPrice] = useState(0);

  return (
    <div
      className="paypal__container text-center"
      style={{ marginLeft: "auto", marginRight: "auto", marginTop: 100 }}
    >
      {/* <h1 className="h1">Donation Checkout</h1> */}
      <div
        className="input-group mb-3 mx-auto"
        style={{ width: 750, height: 55 }}
      >
        {/* <span className="input-group-text" id="inputGroup-sizing-default">
          Default
        </span> */}
        <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Enter Amount"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
      </div>

      <div ref={paypal}></div>
    </div>
  );
}

export default PayPal;
