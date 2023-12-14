// I M P O R T:   F I L E S
import "./styles/App.css";

// I M P O R T:   P A C K A G E S
import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import UserNameContext from "./context/UserNameContext.jsx";
import BooksContext from "./context/BooksContext.jsx";
import OrdersContext from "./context/OrdersContext.jsx";

// I M P O R T:   F U N C T I O N S
import Navigation from "./components/Navigation.jsx";
import Welcome from "./views/Welcome.jsx";
import Books from "./views/Books.jsx";
import Checkout from "./views/Checkout.jsx";

// C O D E
function App() {
  const [userName, setUserName] = useState("");
  const [books, setBooks] = useState([]);
  const [orders, setOrders] = useState([]);
  return (
    <OrdersContext.Provider value={[orders, setOrders]}>
      <BooksContext.Provider value={[books, setBooks]}>
        <UserNameContext.Provider value={[userName, setUserName]}>
          <div className="App">
            <h1>BOOKSTORE</h1>
            <Navigation />
            <main>
              <Routes>
                <Route index element={<Navigate to="/welcome" />} />
                <Route path="/welcome" element={<Welcome />} />
                <Route path="/books" element={<Books />} />
                <Route path="/checkout" element={<Checkout />} />
              </Routes>
            </main>
          </div>
        </UserNameContext.Provider>
      </BooksContext.Provider>
    </OrdersContext.Provider>
  );
}

export default App;

// I M P O R T:   F I L E S

// I M P O R T:   P A C K A G E S

// I M P O R T:   F U N C T I O N S

// C O D E
