import React from "react";
import { Link } from "react-router-dom";
import "./Sidebar.scss";

const Sidebar = () => {
  const [state, setState] = React.useState({
    cats: [],
  });

  React.useEffect(() => {
    fetch("http://127.0.0.1:5000/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setState({ ...state, cats: data.categories });
      });
  }, []);

  return (
    <div className="sidebar">
      <div className="sidebarItem">
        <div className="sidebarTitle">ABOUT ME</div>
        <img
          src="https://images.pexels.com/photos/7404949/pexels-photo-7404949.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
          alt="person"
        />
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Asperiores
          corrupti dolorum quos. Dolores, quam nesciunt.
        </p>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">CATEGORIES</div>
        <ul className="sidebarList">
          {state.cats.map((cat) => (
            <Link to={`/?cat=${cat.name}`} className="link">
              <li key={cat.name} className="sidebarListItem">
                {cat.name.split("")[0].toUpperCase() + cat.name.substring(1)}
              </li>
            </Link>
          ))}
        </ul>
      </div>
      <div className="sidebarItem">
        <div className="sidebarTitle">FOLLOW US</div>
        <div className="sidebarSocial">
          <i className="sidebarIcon fab fa-facebook-square"></i>
          <i className="sidebarIcon fab fa-twitter-square"></i>
          <i className="sidebarIcon fab fa-pinterest-square"></i>
          <i className="sidebarIcon fab fa-instagram-square"></i>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
