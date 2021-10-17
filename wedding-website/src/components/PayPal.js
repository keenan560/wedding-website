import React, { useEffect, useRef, useState } from "react";

function PayPal() {
  const [price, setPrice] = useState("");
  const paypal = useRef();
  // useEffect(() => {
  //   window.paypal
  //     .Buttons({
  //       createOrder: (data, actions, error) => {
  //         return actions.order.create({
  //           intent: "CAPTURE",
  //           purchase_units: [
  //             {
  //               description: "Donation",
  //               amount: {
  //                 value: "5.00",
  //                 currency_code: "USD",
  //               },
  //             },
  //           ],
  //         });
  //       },
  //       onApprove: async (data, actions) => {
  //         const order = await actions.order.capture();
  //         console.log(order);
  //       },
  //       onError: (error) => {
  //         console.log(error);
  //       },
  //     })
  //     .render(paypal.current);
  // }, []);
  console.log(price);
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
        {/* <input
          type="text"
          className="form-control"
          aria-label="Sizing example input"
          aria-describedby="inputGroup-sizing-default"
          placeholder="Enter Amount"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        /> */}
      </div>

      <form action="https://www.paypal.com/donate" method="post" target="_top">
        <input type="hidden" name="hosted_button_id" value="UP8F8CDK8XGSU" />
        <input
          type="image"
          src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
          border="0"
          name="submit"
          title="PayPal - The safer, easier way to pay online!"
          alt="Donate with PayPal button"
        />
        <img
          alt=""
          border="0"
          src="https://www.paypal.com/en_US/i/scr/pixel.gif"
          width="1"
          height="1"
        />
      </form>

      <div ref={paypal}></div>
    </div>
  );
}

export default PayPal;
