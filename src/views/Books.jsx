// I M P O R T:   F I L E S
import "../styles/books.css";
import spinner from "../images/spinner-solid.svg";

// I M P O R T:   P A C K A G E S
import { useState, useContext, useEffect } from "react";
import UserNameContext from "../context/UserNameContext.jsx";
import BooksContext from "../context/BooksContext.jsx";
import OrdersContext from "../context/OrdersContext.jsx";

// I M P O R T:   F U N C T I O N S

// C O D E
const Books = () => {
  const [userName] = useContext(UserNameContext);
  const [books, setBooks] = useContext(BooksContext);
  const [orders, setOrders] = useContext(OrdersContext);
  const [loaded, setLoaded] = useState(false);

  // FETCH BOOKS
  useEffect(() => {
    fetch(`https://edwardtanguay.vercel.app/share/techBooks.json`)
      .then((res) => res.json())
      .then((data) => {
        setBooks(data);
        setLoaded(true);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleClick = (book) => {
    setOrders((prevOrders) => {
      const existingOrderIndex = prevOrders.findIndex(
        (order) => order.id === book.id
      );

      if (existingOrderIndex !== -1) {
        const updatedOrders = [...prevOrders];
        updatedOrders[existingOrderIndex] = {
          ...updatedOrders[existingOrderIndex],
          orders: updatedOrders[existingOrderIndex].orders + 1,
        };
        return updatedOrders;
      } else {
        return [...prevOrders, { ...book, orders: 1 }];
      }
    });
  };

  if (!books) {
    return null;
  }

  return (
    <div>
      {userName ? (
        <p>{`Hello, ${userName}, there are ${books.length} books, which would you like to buy?`}</p>
      ) : (
        <></>
      )}
      <div className="books-list">
        {books.map((book) => (
          <div className="book-container" key={book.id}>
            {loaded ? (
              <img
                className="book-image"
                src={`https://edwardtanguay.vercel.app/share/images/techBooks/${book.idCode}.jpg`}
                alt={`${book.idCode}`}
                onClick={() => handleClick(book)}
              />
            ) : (
              <img
                className="spinner-image"
                src={spinner}
                alt={`${book.idCode}`}
              />
            )}
            {orders.some((order) => order.id === book.id) && (
              <p className="order-info">
                Ordered: {orders.find((order) => order.id === book.id).orders}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Books;
