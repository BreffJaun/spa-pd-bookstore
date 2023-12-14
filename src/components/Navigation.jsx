// I M P O R T:   F I L E S
import "../styles/navigation.css";

// I M P O R T:   P A C K A G E S
import { NavLink } from "react-router-dom";

// I M P O R T:   F U N C T I O N S

// C O D E
const Navigation = () => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/welcome"
          >
            Welcome
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/books"
          >
            Books
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive, isPending }) =>
              isPending ? "pending" : isActive ? "active" : ""
            }
            to="/checkout"
          >
            Checkout
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
