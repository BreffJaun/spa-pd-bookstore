// I M P O R T:   F I L E S
import "../styles/checkout.css";
import spinner from "../images/spinner-solid.svg";

// I M P O R T:   P A C K A G E S
import { useState, useContext, useEffect } from "react";
import UserNameContext from "../context/UserNameContext.jsx";
import OrdersContext from "../context/OrdersContext.jsx";

// I M P O R T:   F U N C T I O N S

// C O D E
const Checkout = () => {
  const [userName] = useContext(UserNameContext);
  const [orders, setOrders] = useContext(OrdersContext);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  const decrementOrders = (bookId) => {
    setOrders((prevOrders) => {
      const updatedOrders = prevOrders.map((order) =>
        order.id === bookId ? { ...order, orders: order.orders - 1 } : order
      );
      return updatedOrders.filter((order) => order.orders > 0);
    });
  };

  const incrementOrders = (bookId) => {
    setOrders((prevOrders) => {
      const updatedOrders = prevOrders.map((order) =>
        order.id === bookId ? { ...order, orders: order.orders + 1 } : order
      );
      return updatedOrders;
    });
  };

  const clearCheckout = () => {
    setOrders([]);
  };

  return (
    <div>
      {userName ? (
        <p>{`${userName}, you are one step away from your books being delivered!`}</p>
      ) : (
        <></>
      )}
      {orders && orders.length > 0 ? (
        <div className="checkout-items">
          {orders.map((order) => (
            <div key={order.id} className="checkout-item">
              {loaded ? (
                <img
                  src={`https://edwardtanguay.vercel.app/share/images/techBooks/${order.idCode}.jpg`}
                  alt={`Book ${order.id}`}
                  className="checkout-image"
                />
              ) : (
                <img
                  className="spinner-image"
                  src={spinner}
                  alt={`${order.id}`}
                />
              )}
              <div className="checkout-content">
                <div className="checkout-details">
                  <p>Title: {order.idCode}</p>
                </div>
                <div className="orders-controls">
                  <button onClick={() => decrementOrders(order.id)}>-</button>
                  <p>Ordered: {order.orders}</p>
                  <button onClick={() => incrementOrders(order.id)}>+</button>
                </div>
              </div>
            </div>
          ))}
          <button className="clear-checkout" onClick={clearCheckout}>
            Clear Checkout
          </button>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Checkout;
